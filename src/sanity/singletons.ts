//for sanity scheema types that should only have 1 document value

export const SINGLETONS = [
  { type: 'home', title: 'Homepage' },
  { type: 'about', title: 'About' },
  { type: 'legal', title: 'Legal' },
  { type: 'businessInfo', title: 'Business Info' },
] as const

export const SINGLETON_TYPES: string[] = SINGLETONS.map((s) => s.type)