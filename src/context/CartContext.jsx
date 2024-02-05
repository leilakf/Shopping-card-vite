import {createContext  } from "react";


 export default CartContext=  createContext({
      items: [], // مقدار اولیه
      getProductQuantity: () => {}, // تعداد یک محصول چند تا هست
  
      addItemToCart: () => {}, // یک تابع برای اضافه کردن محصول به سبد خرید
  
      removeItemFromCart: () => {}, // برای پاک کردن یک محصول از سبد خرید
      removeFromCart: () => {}, // فرایند خذف کارت
      getTotalMount: () => {}, // »بلغ سبد خرید رو باید محاصبه کنیم

})

