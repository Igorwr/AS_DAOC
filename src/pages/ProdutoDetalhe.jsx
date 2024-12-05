import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProdutoDetalhe() {
    const parametros = useParametros()

    const [produto, setProduto] = useState({});

    async function getProduto() {
        const resposta = await fetch(`http://localhost:3001/products/${parametros.id}`);
        const respostaProdutos = await resposta.json()
        setProduto(respostaProdutos)
    }

    useEffect(() => { getProduto(); }, []);

    return (

        <div>
            <h1>{produto.name}</h1>
            <h2>{produto.description}</h2>
            <h3>{produto.price}</h3>
            <img src={produto.photo_url} />
        </div>

    );
}
export default ProdutoDetalhe;