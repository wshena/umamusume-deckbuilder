interface DefaultContainerProps {
  children: React.ReactNode,
  style?: string
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

interface LinkProps {
  label: string,
  link: string
}

interface FooterNavigationProps {
  label:string,
  links: LinkProps[]
}

interface BreadcrumbItemProps {
  label: string,
  url?: string
}