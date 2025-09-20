export type DemoKind = 'three' | 'web'

export interface DemoItem {
  slug: string
  title: string
  summary: string
  cover: string // path imagen
  kind: DemoKind
  route: string
  tech: string[]
}

export interface Canvas3DProps {
  children?: React.ReactNode
  className?: string
}
