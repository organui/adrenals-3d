# Model provenance and preparation

## Source and license

The runtime model uses **BodyParts3D / Anatomography 4.3** (object set 4.3, ontology tree FMA3.0), retrieved **2026-10-16**. All selected OBJ headers report compatibility version 4.3.

The original service explicitly permits modification and redistribution of contour data and rendered images under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)** ([legal text](https://creativecommons.org/licenses/by-sa/2.1/jp/legalcode)). An inert [snapshot of that notice](model-source/original-license.html.txt), copied from the lungs explorer's provenance record, is included. This license governs `public/models/adrenals.glb`, the manifest's model data and the model screenshots, separately from the MIT application code. This follows the same choice as [lungs-3d](https://github.com/organui/lungs-3d) and [pancreas-3d](https://github.com/organui/pancreas-3d), which also use 4.3 data: the LSDB archive's CC BY 4.0 grant covers its 4.0 release and is not extended to these 4.3 meshes.

Credit: **BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS).** Adapted by OrganUI. No endorsement is implied.

## Retrieval and pinning

The network policy of the sandbox this was built in blocked both `dbarchive.biosciencedbc.jp` and `lifesciencedb.jp`, so the official archives could not be downloaded. Geometry comes from the public [olivercase/body_parts_3d_api](https://github.com/olivercase/body_parts_3d_api) mirror, pinned at commit `fd527e6f4daf732fd814314d9257df5877b844bc` (the same commit the lungs and pancreas explorers pin).

Each OBJ is checked three ways:

1. Its SHA-256 matches the oid in its pinned Git LFS pointer (recorded per file in [model-inputs.json](../scripts/model-inputs.json)).
2. Its embedded `File ID` and `Concept ID` headers match.
3. That concept maps to that FJ element in the official 4.3 IS-A table, [`FMA2Obj-4.3.tsv`](model-source/FMA2Obj-4.3.tsv) (SHA-256 `c3d16c89…935d4f`). The table is the unchanged official download preserved by lungs-3d; `prepare-model.ts` refuses to run if its hash changes.

The official per-element metadata table (original model filenames) could not be fetched, so unlike lungs-3d it is not preserved here.

## Selected structures

| Structure                    | Source concept(s)                               | Elements                |
| ---------------------------- | ----------------------------------------------- | ----------------------- |
| Right adrenal gland          | FMA15629                                        | FJ3130                  |
| Left adrenal gland           | FMA15630                                        | FJ3129                  |
| Right kidney                 | FMA7204                                         | FJ3147                  |
| Left kidney                  | FMA7205                                         | FJ3145                  |
| Aorta                        | FMA3784 descending aorta (IS-A)                 | FJ3427, cut (see below) |
| Middle suprarenal arteries   | FMA14755 right, FMA14756 left                   | FJ3586, FJ3472          |
| Inferior suprarenal arteries | FMA69265 right, FMA69266 left                   | FJ3584, FJ3467          |
| Renal arteries               | FMA66363 trunk of right, FMA66364 trunk of left | FJ3576, FJ3476          |
| Right suprarenal vein        | FMA14343                                        | FJ3580                  |
| Left suprarenal vein         | FMA14349                                        | FJ3480                  |
| Inferior vena cava           | FMA10951 (IS-A)                                 | FJ3659                  |
| Renal veins                  | FMA14335 right, FMA14336 left (IS-A)            | FJ3577, FJ3477          |

16 elements, 20,920 triangles. Each element belongs to exactly one structure; the script refuses duplicates and unused inputs. Per-element hashes, sizes and counts are in the [manifest](../public/models/manifest.json) and [selected-mappings.tsv](model-source/selected-mappings.tsv).

Decisions:

- **One mesh per gland.** The source has no separate cortex, medulla, or head, body and limbs, so only whole glands can be selected.
- **Aorta cut above the glands.** FJ3427 is the whole descending aorta (source height 947–1282 mm), which would make the scene mostly chest aorta. `model-inputs.json` sets `keepBelowMm: 1125` for it: `prepare-model.ts` keeps only whole source triangles whose three vertices are at or below 1125 mm (the adrenal glands top out at 1108 mm). 1,948 of 4,562 triangles remain; no vertex is moved, so the cut edge is the source's own triangulation and looks ragged. The manifest records the cut and both triangle counts.
- **Inferior vena cava** uses only FJ3659, the segment from 951 to 1095 mm that receives the renal and right suprarenal veins. FJ3441, the segment behind the liver and through the diaphragm, is omitted.
- **Renal veins** use only the trunks outside the kidneys (FJ3577, FJ3477). The other IS-A elements (FJ3578, FJ3478) are the branches inside each kidney and are omitted.
- **Superior suprarenal arteries** have no mesh of their own in the mirror; they come from the inferior phrenic arteries, whose meshes (FMA14746, FMA14747) reach across the whole diaphragm and are omitted.
- Omitted: diaphragm, liver, spleen, pancreas, inferior phrenic vessels, renal artery divisions, ureters, nerves and body context.

## Transformation and orientation

Vertices are recentred on the selection's source bounding box (after the aorta cut) and uniformly scaled by `0.016`; axes change from source `[x, y, z]` to display `[x, z, -y]` (source +x patient left, −y anterior, +z superior). Anterior view looks along display −Z, posterior along +Z, and the superior view looks down from above and slightly in front. In the anterior view the right gland and inferior vena cava are on the viewer's left and the left gland on the right, as expected. No anatomical reshaping or decimation is performed.

## Reproduce

```sh
bun run prepare:model   # downloads missing OBJs into .asset-cache/objs, verifies, writes the GLB and manifest
bun run verify:model    # checks the GLB hash, structure IDs, element lists and geometry
```
