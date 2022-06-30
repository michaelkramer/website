export interface MenuItemProps {
  url: string;
  title: string;
  exact?: boolean;
  icon?: string;
  onClick?: any;
  component?: (...props: any) => JSX.Element,
  subItems?: MenuItemProps[]


}

export enum MenuAppMode {
  vertical,
  horizontal
}

export interface IMenuAppProps extends React.HTMLAttributes<HTMLBaseElement> {
  mode?: MenuAppMode;
  omitHome?: boolean;
}
