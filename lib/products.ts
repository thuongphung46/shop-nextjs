export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  rating: number;
};

export const products: Product[] = [
  { id: 1, name: 'Gia vị tiêu rừng', description: 'Tiêu rừng xay thơm nồng cho món nướng.', price: 120000, stock: 30, image: 'https://picsum.photos/seed/spice/640/480', category: 'Thực phẩm gia vị', rating: 4.6 },
  { id: 2, name: 'Mật ong rừng', description: 'Mật ong nguyên chất từ rừng tự nhiên.', price: 250000, stock: 12, image: 'https://picsum.photos/seed/honey/640/480', category: 'Mật ong', rating: 4.7 },
  { id: 3, name: 'Thịt bò sấy cay', description: 'Thịt bò sấy vị cay, ăn liền.', price: 180000, stock: 8, image: 'https://picsum.photos/seed/jerky/640/480', category: 'Thịt sấy', rating: 4.4 },
  { id: 4, name: 'Muối ớt xanh', description: 'Muối chấm hải sản vị chua cay đặc trưng.', price: 60000, stock: 50, image: 'https://picsum.photos/seed/salt/640/480', category: 'Thực phẩm gia vị', rating: 4.3 },
  { id: 5, name: 'Mật ong hoa cà phê', description: 'Hương thơm nhẹ, vị ngọt thanh.', price: 220000, stock: 20, image: 'https://picsum.photos/seed/coffeehoney/640/480', category: 'Mật ong', rating: 4.5 }
];
