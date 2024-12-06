
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './ProdutoPage.css';

function ProdutoPage() {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);

    async function getAllProducts() {
        const resposta = await fetch("http://localhost:3001/products");
        const respostaProdutos = await resposta.json();
        setProdutos(respostaProdutos);
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    async function deleteProduto(id) {
        await fetch(`http://localhost:3001/products/${id}`, { method: "DELETE" });
        getAllProducts();
    }

    return (
        <div className="produto-page-container">
            {produtos.map((item) => (
                <div className="card" key={item.id}>
                    <h1>{item.name}</h1>
                    <img
                        onClick={() => { navigate(`/produto/${item.id}`); }}
                        src={item.photo_url}
                        alt={item.name}
                    />
                    <p>{item.description}</p> 
                    <p>R$ {item.price}</p> 
                    <div className="button-container">
                        <button className="button excluir" onClick={() => deleteProduto(item.id)}>Excluir</button>
                        <button className="button editar" onClick={() => navigate(`/produto/edit/${item.id}`)}>Editar</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProdutoPage;

