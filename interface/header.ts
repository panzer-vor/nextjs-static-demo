export interface IHeaderLIst {
  uri: string
  link?: string
  title: string
  children?: IHeaderLIstChildren[]
}

interface IHeaderLIstChildren {
  href: string
  title: string
}