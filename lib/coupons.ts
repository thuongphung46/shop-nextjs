export type Coupon = { code: string; type: 'percent' | 'fixed'; value: number; minSubtotal?: number; description?: string; };
export const coupons: Coupon[] = [
  { code: 'HELLO10', type: 'percent', value: 10, minSubtotal: 200000, description: 'Giảm 10% cho đơn từ 200K' },
  { code: 'FREESHIP', type: 'fixed', value: 30000, description: 'Giảm 30.000đ' },
  { code: 'VIP50', type: 'fixed', value: 50000, minSubtotal: 400000, description: 'Giảm 50.000đ cho đơn từ 400K' },
];
