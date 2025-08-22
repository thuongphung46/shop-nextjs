/** @format */

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  rating: number;
  tags?: string[];
  slug?: string;
  shortDescription?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Gia vị tiêu rừng",
    description:
      "Tiêu rừng xay thơm nồng cho món nướng, được thu hái từ những vùng rừng nguyên sinh Tây Nguyên. Sản phẩm giữ được hương vị đặc trưng của tiêu rừng tự nhiên, mang lại vị cay nồng đậm đà cho các món ăn.",
    shortDescription: "Tiêu rừng xay thơm nồng cho món nướng.",
    price: 120000,
    stock: 30,
    image: "https://picsum.photos/seed/spice/640/480",
    category: "Thực phẩm gia vị",
    rating: 4.6,
    tags: ["tiêu rừng", "gia vị", "tây nguyên", "tự nhiên"],
    slug: "gia-vi-tieu-rung",
  },
  {
    id: 2,
    name: "Mật ong rừng",
    description:
      "Mật ong nguyên chất 100% từ rừng tự nhiên, không qua chế biến hóa học. Được khai thác từ những tổ ong rừng hoang dã, giữ nguyên các enzyme và chất dinh dưỡng tự nhiên có lợi cho sức khỏe.",
    shortDescription: "Mật ong nguyên chất từ rừng tự nhiên.",
    price: 250000,
    stock: 12,
    image: "https://picsum.photos/seed/honey/640/480",
    category: "Mật ong",
    rating: 4.7,
    tags: ["mật ong", "nguyên chất", "rừng tự nhiên", "dinh dưỡng"],
    slug: "mat-ong-rung",
  },
  {
    id: 3,
    name: "Thịt bò sấy cay",
    description:
      "Thịt bò sấy vị cay thơm ngon, được chế biến từ thịt bò tươi ngon theo công thức gia truyền. Sản phẩm giàu protein, tiện lợi mang theo và bảo quản dài hạn.",
    shortDescription: "Thịt bò sấy vị cay, ăn liền.",
    price: 180000,
    stock: 8,
    image: "https://picsum.photos/seed/jerky/640/480",
    category: "Thịt sấy",
    rating: 4.4,
    tags: ["thịt bò", "sấy khô", "cay", "protein", "ăn vặt"],
    slug: "thit-bo-say-cay",
  },
  {
    id: 4,
    name: "Muối ớt xanh",
    description:
      "Muối chấm hải sản vị chua cay đặc trưng của vùng biển miền Trung. Được chế biến từ muối biển tự nhiên và ớt xanh tươi, tạo nên hương vị độc đáo cho các món hải sản.",
    shortDescription: "Muối chấm hải sản vị chua cay đặc trưng.",
    price: 60000,
    stock: 50,
    image: "https://picsum.photos/seed/salt/640/480",
    category: "Thực phẩm gia vị",
    rating: 4.3,
    tags: ["muối ớt", "hải sản", "miền trung", "chua cay"],
    slug: "muoi-ot-xanh",
  },
  {
    id: 5,
    name: "Mật ong hoa cà phê",
    description:
      "Mật ong từ hoa cà phê có hương thơm nhẹ nhàng và vị ngọt thanh mát. Được thu hái từ những vườn cà phê cao cấp Đà Lạt, sản phẩm mang trong mình hương vị đặc trưng của hoa cà phê.",
    shortDescription: "Hương thơm nhẹ, vị ngọt thanh.",
    price: 220000,
    stock: 20,
    image: "https://picsum.photos/seed/coffeehoney/640/480",
    category: "Mật ong",
    rating: 4.5,
    tags: ["mật ong", "hoa cà phê", "đà lạt", "thơm ngọt"],
    slug: "mat-ong-hoa-ca-phe",
  },
];
