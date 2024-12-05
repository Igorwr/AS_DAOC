import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProdutoPage() {
    const navigation = useNavigate()
    const [produtos, setProdutos] = useState([])

    async function getAllProducts() {
        const resposta = await fetch("http://localhost:3001/products");
        const respostaProdutos = await resposta.json()
        setProdutos(respostaProdutos)
    }

    useEffect(() => { getAllProducts() }, [])
    async function deleteProduto(id) {
        await fetch(`http://localhost:3001/products/${id}`, { method: "DELETE" })
        getAllProducts()
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-around" }}>
            {produtos.map((item) => {
                return (
                    <div>
                        <div >
                            <h1>{item.name}</h1>
                            <img onClick={() => { navigation(`/produto/${item.id}`) }} src={item.photo_url} />

                        </div>
                        <button onClick={() => deleteProduto(item.id)}>Excluir</button>
                        <button onClick={() => navigation(`/produto/edit/${item.id}`)}>
                            Editar
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
export default ProdutoPage;