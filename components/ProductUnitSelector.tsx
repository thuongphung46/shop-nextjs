/** @format */

"use client";
import { useState } from "react";
import { Product } from "@/lib/products";
import { currency } from "@/utils/format";

type Props = {
  product: Product;
  onUnitChange: (value: number, price: number, label: string) => void;
};

export default function ProductUnitSelector({ product, onUnitChange }: Props) {
  // Nếu không có unitOptions, tạo default
  const defaultOptions = [
    {
      value: 1,
      label: `1 ${product.unit || "sản phẩm"}`,
      price: product.price,
    },
  ];

  const options = product.unitOptions || defaultOptions;
  const [selectedUnit, setSelectedUnit] = useState(options[0]);

  const handleChange = (option: typeof selectedUnit) => {
    setSelectedUnit(option);
    onUnitChange(option.value, option.price, option.label);
  };

  // Nếu chỉ có 1 option thì không hiển thị selector
  if (options.length <= 1) {
    return (
      <div className="text-sm text-muted-foreground">
        Đơn vị: {selectedUnit.label}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Chọn đơn vị:</label>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center justify-between p-2 border border-border rounded-lg cursor-pointer hover:bg-muted/20"
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="unit"
                checked={selectedUnit.value === option.value}
                onChange={() => handleChange(option)}
                className="text-primary"
              />
              <span className="font-medium">{option.label}</span>
            </div>
            <span className="text-primary font-bold">
              {currency(option.price)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
