export default function ShopInfo({ product }) {
  return (
    <div>
      <p>Title : {product.body.product.shop.shopName}</p>
      <p>Phone : {product.body.product.shop.phone}</p>
      <p>Description : {product.body.product.shop.description}</p>
    </div>
  );
}
