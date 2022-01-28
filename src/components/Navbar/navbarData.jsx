import Grid from "../Shopping/Products/Grid";

export const data = {
  catalog: [
    {
      id: "1",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/originals/1b/5a/51/1b5a51859c3c928f7d3fafa96b1b93b1.jpg",
        },
        {
          name: "Shoes",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/474x/95/d4/86/95d4863f81b13bd31b00c7fd95e09060.jpg",
        },
      ],
      categories: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Shirt", href: "/Grid" },
            { name: "Jeans", href: "/" },
            { name: "Jackets", href: "/" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "ZARA", href: "#" },
            { name: "GUCCI", href: "#" },
            { name: "OUTFITTERS", href: "#" },
            { name: "LOUIS VUITTON", href: "#" },
          ],
        },
        {
          id: "3",
          name: "Accessories",
          items: [
            { name: "Watch", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://assets.vogue.com/photos/5fdbb0bf0545513cfcbc17ad/master/pass/VO0121_Collections_01.jpg",
        },
        {
          name: "Shoes",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/564x/d1/ff/d9/d1ffd96e596e61b4a47cc829a84ce92f.jpg",
        },
      ],
      categories: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Shirt", href: "/" },
            { name: "Jeans", href: "/" },
            { name: "Jackets", href: "/" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "ZARA", href: "#" },
            { name: "GUCCI", href: "#" },
            { name: "OUTFITTERS", href: "#" },
            { name: "LOUIS VUITTON", href: "#" },
          ],
        },
        {
          id: "3",
          name: "Accessories",
          items: [
            { name: "Watch", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "Art of Living",
      categories: [],
      featured: [],
    },
    {
      id: "4",
      name: "New",
      categories: [],
      featured: [],
    },
  ],
};
