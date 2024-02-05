const productList = [
  {
    id: "101",
    title: "Product1",
    price: "120$",
    image: "./image/Untitled1212.png",
  },
  {
    id: "102",
    title: "Product2",
    price: "140$",
    image: "./image/Untitled1212.png",
  },
  {
    id: "103",
    title: "Product3",
    price: "180$",
    image: "./image/Untitled1212.png",
  },
  {
    id: "104",
    title: "Product4",
    price: "100$",
    image: "./image/Untitled1212.png",
  },
];

function getProductData(id) {
  let productData = productList.find((item) => item.id === id);
  return productData;
}
export { productList, getProductData };
