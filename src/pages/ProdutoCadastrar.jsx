
import { useNavigate } from "react-router-dom";
import './ProdutoCadastrar.css';

function ProdutoCadastrar() {
    const navigate = useNavigate();

    async function saveProduct(product) {
        await fetch("http://localhost:3001/products", { method: "POST", body: JSON.stringify(product) });
        navigate("/produto");
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
                <input name="name" placeholder="Nome" />
                <input name="price" placeholder="Preço" />
                <input name="description" placeholder="Descrição" />
                <input name="photo_url" placeholder="Foto_url" />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default ProdutoCadastrar;
