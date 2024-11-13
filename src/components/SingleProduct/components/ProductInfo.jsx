export default function ProductInfo({ product }) {
  return (
    <div>
      <p>Title : {product.body.product.title}</p>
      <p>Price : {product.body.product.price}</p>
      <p>Description : {product.body.product.description}</p>
    </div>
  );
}
