export interface INavItem {
  title: string;
  to: string;
}

export const NavItems: INavItem[] = [
  {
    title: "우체통",
    to: "/mailbox",
  },
  {
    title: "지도",
    to: "/map",
  },
];
