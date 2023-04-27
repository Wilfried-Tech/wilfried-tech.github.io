export type Skill = {
  name: string
  icon?: string
  strength: number
  primary?: boolean
}

export type SkillSection = {
  name: string
  items: Skill[]
}

export type Project = {
  name: string,
  code: string,
  picture: string,
  description: string,
  github?: string,
  previews: string[]
}
