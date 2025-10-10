export interface Projects {
  projects: Project[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  image: string
}
