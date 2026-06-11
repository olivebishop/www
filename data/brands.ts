export interface Brand {
  name: string;
  logo: string;
  href: string;
}

export const brands: Brand[] = [
  { name: "Payd", logo: "/images/brands/payd.jpg", href: "https://www.payd.money/" },
  { name: "Voley", logo: "/images/brands/voley.jpeg", href: "https://www.letsvoley.com/home" },
  { name: "WDC", logo: "/images/brands/wdc.png", href: "https://worlddisastercenter.org/" },
  { name: "Sol Of African", logo: "/images/brands/sol.jpg", href: "https://www.thesolofafrican.com/" },
  { name: "Xapitol", logo: "/images/brands/xapital.jpg", href: "https://www.xapitol.com/" },
  { name: "Crow Studios", logo: "/images/brands/crow.png", href: "https://crow-studios.vercel.app/" },
];
