interface Work {
  link: string;
  logo: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  slides?: string[][];
}

export const works: Work[] = [
  {
    link: "https://emcash.com.br/",
    logo: "/works/emcash/logo.jpeg",
    title: "Emcash",
    description: "Uma fintech que conecta investidores e tomadores de crédito de forma ágil, simples, segura e 100% digital.",
    startDate: "01 Agosto 2023",
    endDate: "Atualmente",
    slides: [
      ["/works/emcash/image-1.jpeg", "Visão da página inicial da Emcash"],
      ["/works/emcash/image-2.jpeg", "Visão da página do pro-soluto da Emcash"],
    ],
  },
  {
    link: "https://letalk.com.br/",
    logo: "/works/letalk/logo.jpeg",
    title: "Letalk",
    description: "Empresa voltada para automação do Whatsapp",
    startDate: "01 Set 2022",
    endDate: "01 Jan 2023",
    slides: [
      ["/works/letalk/image-1.jpeg", "Visão da página inicial da Letalk"],
      // ["/works/erensibot/slide2.png", "ErensiBot features"],
      // ["/works/erensibot/slide3.png", "ErensiBot reaction role"],
    ],
  },
];
