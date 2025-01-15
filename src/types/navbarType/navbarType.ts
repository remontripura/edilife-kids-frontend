export interface INavbar {
  id: number;
  name: string;
  link: string;
}

export interface INavItem {
  success: boolean;
  data: {
    logo: string;
    navbar: INavbar[];
  };
}
