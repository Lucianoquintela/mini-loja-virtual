
import "./ProductCard.css";

const ProductCard = ({ product }) => {

    return (
        <div className="product-card">

            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                />
            </div>

            <div className="product-info">

                <h3 className="product-title">
                    {product.title}
                </h3>

                <p className="product-description">
                    {product.description}
                </p>

                <div className="product-footer">

                    <span className="product-price">
                        {Number(product.price).toLocaleString(
                            "pt-BR",
                            {
                                style: "currency",
                                currency: "BRL"
                            }
                        )}
                    </span>

                    <button className="product-button">
                        <i className="pi pi-shopping-cart"></i>
                        Ver produto
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ProductCard;
