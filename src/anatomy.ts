export type Structure = {
  id: string
  fma: string
  name: string
  sourceName: string
  group: 'Adrenal glands' | 'Neighbouring organs' | 'Arteries' | 'Veins'
  // Official 4.3 IS-A concepts this group draws its source meshes from.
  concepts: string[]
  // FJ element files; each element belongs to exactly one structure.
  elements: string[]
  color: string
  description: string
  note: string
}

export const anatomySource =
  'https://training.seer.cancer.gov/anatomy/endocrine/glands/adrenal.html'
export const structures: Structure[] = [
  {
    id: 'right-adrenal-gland',
    fma: 'FMA15629',
    name: 'Right adrenal gland',
    sourceName: 'right adrenal gland',
    group: 'Adrenal glands',
    concepts: ['FMA15629'],
    elements: ['FJ3130'],
    color: '#d9a03f',
    description:
      'A small, roughly triangular gland capping the top of the right kidney. It sits close behind the inferior vena cava.',
    note: 'The gland is one surface. Its outer cortex and inner medulla are not separate meshes, so they cannot be selected on their own.',
  },
  {
    id: 'left-adrenal-gland',
    fma: 'FMA15630',
    name: 'Left adrenal gland',
    sourceName: 'left adrenal gland',
    group: 'Adrenal glands',
    concepts: ['FMA15630'],
    elements: ['FJ3129'],
    color: '#e3b65a',
    description:
      'A crescent-shaped gland along the upper inner border of the left kidney, reaching down toward the renal hilum.',
    note: 'The gland is one surface. Its outer cortex and inner medulla are not separate meshes, so they cannot be selected on their own.',
  },
  {
    id: 'right-kidney',
    fma: 'FMA7204',
    name: 'Right kidney',
    sourceName: 'right kidney',
    group: 'Neighbouring organs',
    concepts: ['FMA7204'],
    elements: ['FJ3147'],
    color: '#a8726b',
    description:
      'Sits a little lower than the left kidney because the liver lies above it. Its adrenal gland rests on its upper pole.',
    note: 'Included for orientation. Its internal structure is shown in the kidney explorer.',
  },
  {
    id: 'left-kidney',
    fma: 'FMA7205',
    name: 'Left kidney',
    sourceName: 'left kidney',
    group: 'Neighbouring organs',
    concepts: ['FMA7205'],
    elements: ['FJ3145'],
    color: '#b5817a',
    description:
      'The left adrenal gland lies against its upper inner border rather than on top of it.',
    note: 'Included for orientation. Its internal structure is shown in the kidney explorer.',
  },
  {
    id: 'aorta',
    fma: 'FMA3784',
    name: 'Aorta',
    sourceName: 'descending aorta',
    group: 'Arteries',
    concepts: ['FMA3784'],
    elements: ['FJ3427'],
    color: '#b8564c',
    description:
      'The main artery of the body, running down in front of the spine between the two adrenal glands. The middle suprarenal arteries come straight from it.',
    note: 'Only the part beside the glands is shown. The source mesh is cut just above them, so the chest portion is omitted.',
  },
  {
    id: 'middle-suprarenal-arteries',
    fma: 'FMA14755',
    name: 'Middle suprarenal arteries',
    sourceName: 'right and left middle suprarenal arteries',
    group: 'Arteries',
    concepts: ['FMA14755', 'FMA14756'],
    elements: ['FJ3586', 'FJ3472'],
    color: '#d0836c',
    description: 'Short branches from the side of the aorta that run outward to each gland.',
    note: 'The right and left arteries are grouped as one selectable set.',
  },
  {
    id: 'inferior-suprarenal-arteries',
    fma: 'FMA69265',
    name: 'Inferior suprarenal arteries',
    sourceName: 'right and left inferior suprarenal arteries',
    group: 'Arteries',
    concepts: ['FMA69265', 'FMA69266'],
    elements: ['FJ3584', 'FJ3467'],
    color: '#e3a989',
    description: 'Branches of the renal arteries that climb to the lower part of each gland.',
    note: 'The right and left arteries are grouped as one selectable set. The superior suprarenal arteries, which come from the inferior phrenic arteries, are not separate meshes in the source and are omitted.',
  },
  {
    id: 'renal-arteries',
    fma: 'FMA66363',
    name: 'Renal arteries',
    sourceName: 'trunks of right and left renal arteries',
    group: 'Arteries',
    concepts: ['FMA66363', 'FMA66364'],
    elements: ['FJ3576', 'FJ3476'],
    color: '#c9725f',
    description:
      'Carry blood from the aorta to each kidney and give off the inferior suprarenal arteries.',
    note: 'Only the trunks are included; their branches inside the kidney are omitted.',
  },
  {
    id: 'right-suprarenal-vein',
    fma: 'FMA14343',
    name: 'Right suprarenal vein',
    sourceName: 'right suprarenal vein',
    group: 'Veins',
    concepts: ['FMA14343'],
    elements: ['FJ3580'],
    color: '#5f7fa6',
    description:
      'A short vein that drains the right gland straight into the back of the inferior vena cava.',
    note: 'Best seen from the posterior view, or with the inferior vena cava hidden.',
  },
  {
    id: 'left-suprarenal-vein',
    fma: 'FMA14349',
    name: 'Left suprarenal vein',
    sourceName: 'left suprarenal vein',
    group: 'Veins',
    concepts: ['FMA14349'],
    elements: ['FJ3480'],
    color: '#7f9fbf',
    description:
      'Runs down from the left gland to join the left renal vein, so the two sides drain differently.',
    note: 'Follow it to the left renal vein below the gland.',
  },
  {
    id: 'inferior-vena-cava',
    fma: 'FMA10951',
    name: 'Inferior vena cava',
    sourceName: 'inferior vena cava',
    group: 'Veins',
    concepts: ['FMA10951'],
    elements: ['FJ3659'],
    color: '#4f6f96',
    description:
      'The large vein carrying blood from the lower body to the heart. It runs to the right of the aorta, in front of the right adrenal gland.',
    note: 'Only the abdominal segment below the liver is included.',
  },
  {
    id: 'renal-veins',
    fma: 'FMA14335',
    name: 'Renal veins',
    sourceName: 'right and left renal veins',
    group: 'Veins',
    concepts: ['FMA14335', 'FMA14336'],
    elements: ['FJ3577', 'FJ3477'],
    color: '#93aecb',
    description:
      'Drain each kidney into the inferior vena cava. The longer left renal vein crosses in front of the aorta and receives the left suprarenal vein.',
    note: 'Only the trunks outside the kidneys are included.',
  },
]
export const groups = ['Adrenal glands', 'Neighbouring organs', 'Arteries', 'Veins'] as const
export const byId = Object.fromEntries(structures.map((s) => [s.id, s]))
export type View = 'Anterior' | 'Posterior' | 'Superior'
export const tour: { id: string; title: string; text: string; view: View; isolate?: boolean }[] = [
  {
    id: 'right-adrenal-gland',
    title: 'A cap on each kidney',
    text: 'The adrenal glands sit on top of the kidneys, deep in the back of the abdomen. The right one is a small pyramid resting on the upper pole of the right kidney.',
    view: 'Anterior',
  },
  {
    id: 'left-adrenal-gland',
    title: 'Two different shapes',
    text: 'The left gland is isolated here. It is flatter and crescent-shaped, and lies along the inner border of the left kidney rather than on top of it. Restore all to see its neighbours.',
    view: 'Anterior',
    isolate: true,
  },
  {
    id: 'left-adrenal-gland',
    title: 'Seen from above',
    text: 'From above, both glands lie beside the aorta and inferior vena cava, which run down the middle of the body in front of the spine.',
    view: 'Superior',
  },
  {
    id: 'middle-suprarenal-arteries',
    title: 'A rich blood supply',
    text: 'Each gland gets blood from three sources. The middle suprarenal arteries come straight from the aorta; others come from the renal and inferior phrenic arteries.',
    view: 'Anterior',
  },
  {
    id: 'right-suprarenal-vein',
    title: 'One vein each',
    text: 'Turn to the back. The short right suprarenal vein empties into the inferior vena cava, while the left one drains into the left renal vein.',
    view: 'Posterior',
  },
]

export type Emphasis = 'normal' | 'selected' | 'ghosted'
// With nothing selected every structure keeps its own color. A selection
// keeps its structure solid and ghosts the rest so it stays visible even
// when it sits behind other geometry (right gland behind the vena cava).
export function emphasis(id: string, selected: string | null): Emphasis {
  if (!selected) return 'normal'
  return id === selected ? 'selected' : 'ghosted'
}
