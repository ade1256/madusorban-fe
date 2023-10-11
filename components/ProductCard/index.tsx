import "./style.scss"
const ProductCard = ({ title = "", price = 0, image = '' }: any) => {
  return (
    <div className="product-card">
      <div className="image">
        <img src={image} alt="produk" />
      </div>
      <div className="desc">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="price">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
