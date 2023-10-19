import "./style.scss"
const ProductCard = ({ title = "", originalPrice = 0, price = 0, image = '', onClick = () => null }: any) => {
  const rupiah = (number: number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(number)
  }
  return (
    <div className="product-card" onClick={onClick}>
      <div className="image">
        <img src={image} alt="produk" />
      </div>
      <div className="desc">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="price">
          <p className="strike">{rupiah(originalPrice)}</p>
          <p>{rupiah(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
