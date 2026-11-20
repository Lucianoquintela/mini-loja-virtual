
import { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ onAddProduct }) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            title,
            price: Number(price),
            description,
            image
        };

        onAddProduct(newProduct);

        setTitle("");
        setPrice("");
        setDescription("");
        setImage("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="product-form"
        >

            <h2>Adicionar Produto</h2>

            <div className="form-group">
                <label htmlFor="title">Nome do produto</label>

                <input
                    id="title"
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="price">Preço</label>

                <input
                    id="price"
                    type="number"
                    min="0.01"
                    step="0.01"
                    placeholder="Digite o preço"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descrição</label>

                <textarea
                    id="description"
                    placeholder="Descreva o produto"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="image">URL da imagem</label>

                <input
                    id="image"
                    type="url"
                    placeholder="https://exemplo.com/imagem.jpg"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="form-button">
                <i className="pi pi-plus"></i>
                Cadastrar Produto
            </button>

        </form>
    );
};

export default ProductForm;
