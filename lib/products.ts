/** @format */

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number; // Giá cho 1 đơn vị chuẩn
  stock: number;
  image: string;
  category: string;
  rating: number;
  tags?: string[];
  slug?: string;
  shortDescription?: string;
  shopeeLink?: string;
  tiktokShopLink?: string;
  unit?: string; // Đơn vị tính: "gói", "kg", "lít"
  unitOptions?: Array<{
    value: number; // Số lượng (0.5, 1, 2, ...)
    label: string; // Nhãn hiển thị ("0.5kg", "1kg", "1 gói")
    price: number; // Giá cho lượng này
  }>;
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
    shopeeLink:
      "https://shopee.vn/Gia-vị-tiêu-rừng-Tây-Nguyên-i.123456789.987654321",
    tiktokShopLink:
      "https://vn.shop.tiktok.com/view/product/1234567890123456789",
    unit: "gói",
    unitOptions: [{ value: 1, label: "1 gói", price: 120000 }],
  },
  {
    id: 2,
    name: "Mật ong rừng",
    description:
      "Mật ong nguyên chất 100% từ rừng tự nhiên, không qua chế biến hóa học. Được khai thác từ những tổ ong rừng hoang dã, giữ nguyên các enzyme và chất dinh dưỡng tự nhiên có lợi cho sức khỏe.",
    shortDescription: "Mật ong nguyên chất từ rừng tự nhiên.",
    price: 500000, // Giá gốc cho 1 lít
    stock: 12,
    image: "https://picsum.photos/seed/honey/640/480",
    category: "Mật ong",
    rating: 4.7,
    tags: ["mật ong", "nguyên chất", "rừng tự nhiên", "dinh dưỡng"],
    slug: "mat-ong-rung",
    shopeeLink:
      "https://shopee.vn/Mật-ong-rừng-nguyên-chất-i.234567890.876543210",
    tiktokShopLink:
      "https://vn.shop.tiktok.com/view/product/2345678901234567890",
    unit: "lít",
    unitOptions: [
      { value: 0.5, label: "0.5 lít", price: 280000 },
      { value: 1, label: "1 lít", price: 500000 },
    ],
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
    stock: 0,
    image: "https://picsum.photos/seed/coffeehoney/640/480",
    category: "Mật ong",
    rating: 4.5,
    tags: ["mật ong", "hoa cà phê", "đà lạt", "thơm ngọt"],
    slug: "mat-ong-hoa-ca-phe",
    shopeeLink:
      "https://shopee.vn/Mật-ong-hoa-cà-phê-Đà-Lạt-i.345678901.765432109",
    tiktokShopLink:
      "https://vn.shop.tiktok.com/view/product/3456789012345678901",
  },
  // Thêm các loại mật ong khác
  {
    id: 6,
    name: "Mật ong khoái",
    description:
      "Mật ong khoái có hương vị đặc trưng, hơi đắng nhẹ và có tính mát. Được khai thác từ hoa cây khoái rừng, có tác dụng thanh nhiệt, giải độc và tốt cho hệ tiêu hóa.",
    shortDescription: "Mật ong khoái thanh nhiệt, giải độc tự nhiên.",
    price: 280000,
    stock: 15,
    image: "https://picsum.photos/seed/khoai-honey/640/480",
    category: "Mật ong",
    rating: 4.6,
    tags: ["mật ong", "khoái", "thanh nhiệt", "giải độc"],
    slug: "mat-ong-khoai",
  },
  {
    id: 7,
    name: "Mật ong đá",
    description:
      "Mật ong đá có độ đặc quánh tự nhiên, màu vàng đậm và hương vị thơm ngọt đặc trưng. Được khai thác từ những tổ ong xây trong khe đá núi, rất quý hiếm và có giá trị dinh dưỡng cao.",
    shortDescription: "Mật ong đá quý hiếm từ khe núi đá.",
    price: 450000,
    stock: 5,
    image: "https://picsum.photos/seed/stone-honey/640/480",
    category: "Mật ong",
    rating: 4.9,
    tags: ["mật ong", "đá", "quý hiếm", "khe núi"],
    slug: "mat-ong-da",
  },
  {
    id: 8,
    name: "Mật ong ruồi",
    description:
      "Mật ong ruồi có kích thước nhỏ hơn ong mật thường, tạo ra mật ong có vị ngọt đậm đà và hương thơm đặc biệt. Ong ruồi thường xây tổ trong thân cây hoặc hang đá, sản lượng ít nên rất quý.",
    shortDescription: "Mật ong ruồi ngọt đậm, hương thơm đặc biệt.",
    price: 380000,
    stock: 8,
    image: "https://picsum.photos/seed/fly-honey/640/480",
    category: "Mật ong",
    rating: 4.8,
    tags: ["mật ong", "ong ruồi", "ngọt đậm", "quý hiếm"],
    slug: "mat-ong-ruoi",
  },
  // Thêm các loại thịt sấy khác
  {
    id: 9,
    name: "Thịt lợn sấy",
    description:
      "Thịt lợn sấy được chế biến từ thịt lợn rừng tươi ngon, ướp gia vị đậm đà theo công thức truyền thống. Thịt có vị ngọt tự nhiên, dai dai và thơm nức mũi.",
    shortDescription: "Thịt lợn sấy ngọt tự nhiên, dai thơm.",
    price: 160000,
    stock: 25,
    image: "https://picsum.photos/seed/pork-jerky/640/480",
    category: "Thịt sấy",
    rating: 4.3,
    tags: ["thịt lợn", "sấy khô", "lợn rừng", "ngọt tự nhiên"],
    slug: "thit-lon-say",
  },
  {
    id: 10,
    name: "Thịt trâu sấy",
    description:
      "Thịt trâu sấy từ trâu rừng có thớ thịt chắc, ít mỡ và giàu protein. Được sấy khô tự nhiên và ướp gia vị vùng cao, tạo nên hương vị đậm đà đặc trưng của vùng núi.",
    shortDescription: "Thịt trâu rừng sấy chắc thịt, ít mỡ.",
    price: 850000, // Giá gốc cho 1kg
    stock: 15,
    image: "https://picsum.photos/seed/buffalo-jerky/640/480",
    category: "Thịt sấy",
    rating: 4.5,
    tags: ["thịt trâu", "trâu rừng", "chắc thịt", "vùng cao"],
    slug: "thit-trau-say",
    unit: "kg",
    unitOptions: [
      { value: 0.5, label: "0.5kg", price: 470000 },
      { value: 1, label: "1kg", price: 850000 },
      { value: 2, label: "2kg", price: 1600000 },
    ],
  },
  {
    id: 11,
    name: "Cá sấy khô",
    description:
      "Cá sấy khô từ cá suối miền núi, thịt cá săn chắc và thơm ngon. Được sấy khô bằng phương pháp truyền thống, giữ nguyên độ tươi ngon và hương vị đặc trưng của cá rừng.",
    shortDescription: "Cá suối miền núi sấy khô thơm ngon.",
    price: 140000,
    stock: 20,
    image: "https://picsum.photos/seed/fish-jerky/640/480",
    category: "Thịt sấy",
    rating: 4.2,
    tags: ["cá sấy", "cá suối", "miền núi", "thơm ngon"],
    slug: "ca-say-kho",
  },
  // Thêm các loại gia vị khác
  {
    id: 12,
    name: "Chẳm chéo rừng",
    description:
      "Chẳm chéo rừng là loại gia vị đặc trưng của vùng Tây Bắc, có vị chua nhẹ và hương thơm đặc biệt. Thường dùng để nấu canh chua, làm nước chấm hoặc ướp thịt nướng.",
    shortDescription: "Gia vị đặc trưng Tây Bắc, vị chua thơm.",
    price: 80000,
    stock: 35,
    image: "https://picsum.photos/seed/cham-cheo/640/480",
    category: "Thực phẩm gia vị",
    rating: 4.4,
    tags: ["chẳm chéo", "tây bắc", "chua", "gia vị rừng"],
    slug: "cham-cheo-rung",
  },
  {
    id: 13,
    name: "Mắc khén sấy",
    description:
      "Mắc khén sấy khô có vị cay nồng đặc trưng, được thu hái từ cây mắc khén rừng. Gia vị này tạo cảm giác tê tê trên lưỡi và thường dùng trong món thịt nướng, chả cá của người Thái.",
    shortDescription: "Gia vị cay nồng, tê lưỡi đặc biệt.",
    price: 150000,
    stock: 18,
    image: "https://picsum.photos/seed/mac-khen/640/480",
    category: "Thực phẩm gia vị",
    rating: 4.7,
    tags: ["mắc khén", "cay nồng", "tê lưỡi", "người thái"],
    slug: "mac-khen-say",
  },
  {
    id: 14,
    name: "Hạt dổi nướng",
    description:
      "Hạt dổi nướng thơm bùi, có vị béo ngậy tự nhiên. Được rang nướng vừa tới, giữ nguyên hương vị đặc trưng. Có thể ăn trực tiếp hoặc dùng làm gia vị cho các món ăn truyền thống.",
    shortDescription: "Hạt dổi nướng thơm bùi, béo ngậy.",
    price: 120000,
    stock: 28,
    image: "https://picsum.photos/seed/hat-doi/640/480",
    category: "Thực phẩm gia vị",
    rating: 4.5,
    tags: ["hạt dổi", "nướng", "thơm bùi", "béo ngậy"],
    slug: "hat-doi-nuong",
  },
  // Thêm các sản phẩm khác
  {
    id: 15,
    name: "Măng khô miền núi",
    description:
      "Măng khô được phơi sấy từ măng tươi rừng miền núi Bắc. Măng có vị ngọt tự nhiên, giòn dai và rất thơm. Dùng để nấu canh, xào thịt hoặc làm nhân bánh chưng truyền thống.",
    shortDescription: "Măng rừng phơi khô ngọt tự nhiên.",
    price: 90000,
    stock: 40,
    image: "https://picsum.photos/seed/mang-kho/640/480",
    category: "Thực phẩm khô",
    rating: 4.3,
    tags: ["măng khô", "miền núi", "ngọt tự nhiên", "giòn dai"],
    slug: "mang-kho-mien-nui",
  },
  {
    id: 16,
    name: "Nụ hoa tam thất",
    description:
      "Nụ hoa tam thất sấy khô có tác dụng thanh nhiệt, giải độc và tốt cho sức khỏe. Được hái từ cây tam thất rừng cao cấp, có thể dùng pha trà hoặc nấu nước uống hàng ngày.",
    shortDescription: "Nụ hoa tam thất thanh nhiệt, giải độc.",
    price: 320000,
    stock: 12,
    image: "https://picsum.photos/seed/tam-that/640/480",
    category: "Thực phẩm chức năng",
    rating: 4.8,
    tags: ["tam thất", "nụ hoa", "thanh nhiệt", "giải độc"],
    slug: "nu-hoa-tam-that",
  },
  {
    id: 17,
    name: "Gạo nếp nương",
    description:
      "Gạo nếp nương được trồng trên ruộng bậc thang vùng cao, tưới bằng nước mưa tự nhiên. Hạt gạo dẻo thơm, có màu tím tự nhiên và giá trị dinh dưỡng cao, thích hợp nấu xôi và làm bánh.",
    shortDescription: "Gạo nếp nương tím tự nhiên thơm dẻo.",
    price: 120000, // Giá gốc cho 1kg
    stock: 60,
    image: "https://picsum.photos/seed/nep-nuong/640/480",
    category: "Gạo đặc sản",
    rating: 4.6,
    tags: ["gạo nếp", "nương", "tím tự nhiên", "vùng cao"],
    slug: "gao-nep-nuong",
    unit: "kg",
    unitOptions: [
      { value: 0.5, label: "0.5kg", price: 65000 },
      { value: 1, label: "1kg", price: 120000 },
      { value: 2, label: "2kg", price: 220000 },
      { value: 5, label: "5kg", price: 500000 },
    ],
  },
];
