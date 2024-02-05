import { createContext, useState } from "react";

import { getProductData } from "../data/items";
export const CartContext = createContext({
  items: [], // مقدار اولیه
  getProductQuantity: () => {}, // تعداد یک محصول چند تا هست

  addItemToCart: () => {}, // یک تابع برای اضافه کردن محصول به سبد خرید

  removeItemFromCart: () => {}, // برای پاک کردن یک محصول از سبد خرید
  removeFromCart: () => {}, // فرایند خذف کارت
  getTotalAmount: () => {}, // »بلغ سبد خرید رو باید محاصبه کنیم
});

export function CartProvider({ children }) {
  const [cartProducts, SetProducts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    } else {
      return quantity;
    }
  };

  const addItemToCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      SetProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      SetProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    SetProducts((cartProducts) => {
      cartProducts.filter((item) => {
        return item.id != id;
      });
    });
  };
  const removeItemFromCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      SetProducts(
        cartProducts.map((item) => {
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
        })
      );
    }
  };
  const getTotalAmount = () => {
    const totalAmount = 0;
    cartProducts.map((item) => {
      const productData = getProductData(item.id);
      //   productData.price * item.quantity       //       قیمت یک ایتم بر اساس کوانتیتی
      totalAmount += productData.price * item.quantity;
    });
  };
  // ..........................................................
  const ContextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}
