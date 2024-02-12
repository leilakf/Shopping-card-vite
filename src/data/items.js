const productList = [
  {
    id: "101",
    title: "Product1",
    price: "120",
    image: "./image/m1.jpg",
  },
  {
    id: "102",
    title: "Product2",
    price: "140",
    image: "./image/2.jpg",
  },
  {
    id: "103",
    title: "Product3",
    price: "180",
    image: "./image/3.jpg",
  },
  {
    id: "104",
    title: "Product4",
    price: "100",
    image: "./image/4.jpg",
  },
  {
    id: "105",
    title: "Product1",
    price: "270",
    image: "./image/5.jpg",
  },
  {
    id: "106",
    title: "Product2",
    price: "120",
    image: "./image/6.jpg",
  },
  {
    id: "107",
    title: "Product3",
    price: "290",
    image: "./image/7.jpg",
  },
  {
    id: "108",
    title: "Product4",
    price: "190",
    image: "./image/8.jpg",
  },
];

function getProductData(id) {
  let productData = productList.find((item) => item.id === id);
  return productData;
}
export { productList, getProductData };
