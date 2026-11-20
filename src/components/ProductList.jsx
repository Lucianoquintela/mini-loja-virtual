
import { useState, useEffect } from "react";
import api from "../services/api";

import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

import "./ProductList.css";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProducts = async () => {

            try {
                const response = await api.get("/products");

                setProducts(response.data);

            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
                setError("Não foi possível carregar os produtos.");

            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, []);

    const handleAddProduct = (newProduct) => {

        setProducts((prevProducts) => [
            newProduct,
            ...prevProducts
        ]);

    };

    return (
        <div className="product-list">


            <ProductForm onAddProduct={handleAddProduct} />

            {loading && (
                <p className="status-message">
                    Carregando produtos...
                </p>
            )}

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            {!loading && !error && (
                <div className="grid product-grid">

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="col-12 sm:col-6 lg:col-4 xl:col-3"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
};

export default ProductList;
