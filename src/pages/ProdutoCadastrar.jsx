import { useNavigate } from "react-router-dom";
import './ProdutoCadastrar.css';

function ProdutoCadastrar() {
    const navigate = useNavigate();

    async function saveProduct(product) {
        const response = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            navigate("/produto");
        } else {
            console.error("Failed to save product:", response.statusText);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const produto = {
            name: formData.get("name"),
            price: formData.get("price"),
            description: formData.get("description"),
            photo_url: formData.get("photo_url")
        };
        saveProduct(produto);
    }
    

    return (
        <div className="card">
            <h1>Cadastrar Produto</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Nome" required />
                <input name="price" placeholder="Preço" required />
                <input name="description" placeholder="Descrição" required />
                <input name="photo_url" placeholder="Foto URL" required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default ProdutoCadastrar;

