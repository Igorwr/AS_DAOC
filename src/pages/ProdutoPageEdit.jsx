
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ProdutoPageEdit() {
    const [product, setProduct] = useState(null); 
    const { id } = useParams(); 
    const navigate = useNavigate(); 

    
    async function getProductById() {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
    }

    
    useEffect(() => {
        getProductById();
    }, [id]); 

    
    async function editProduct(product) {
        await fetch(`http://localhost:3001/products/${id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        navigate("/produto"); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const updatedProduct = {
            name: formData.get("name"),
            price: formData.get("price"),
            description: formData.get("description"),
            photo_url: [formData.get("photo_url")], 
        };

        editProduct(updatedProduct); 
    }

    if (!product) {
        return <p>Carregando...</p>;
    }

    return (
        <>
        <div className="card">
            <h1>Editar Produto</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" defaultValue={product.name} placeholder="Nome" required/>
                <input name="price" defaultValue={product.price} placeholder="Preço" required />
                <input
                    name="description"
                    defaultValue={product.description}
                    placeholder="Descrição"
                    required
                />
                <input
                    name="photo_url"
                    defaultValue={product.photo_url}
                    placeholder="Foto (URL)"
                    required
                />
                <button type="submit">Salvar Alterações</button>
            </form>
            </div>
        </>
    );
}

export default ProdutoPageEdit;
