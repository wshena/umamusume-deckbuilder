interface DefaultContainerProps {
  children: React.ReactNode
}

interface IconProps {
  size: number,
  classname: string
}

interface NavLinkProps {
  id: string | number,
  label: string,
  link: string,
  sublink?: SubLinkProps[]
}

interface SubLinkProps {
  id: string | number,
  label: string,
  link: string
}