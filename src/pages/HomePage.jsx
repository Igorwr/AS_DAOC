import { useState } from "react";
import { data } from "../mock/data";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigation = useNavigate()
    const [pessoas, setPessoas] = useState(data)

    function handleSubmit() {
        const objPessoa = {name: "Teste"}
        setPessoas([...pessoas, objPessoa])
        data.push(objPessoa);
        navigation("/home")
    }

    return <>
    
        <button onClick={handleSubmit}>Salvar Dados</button>
        {pessoas.map(item => <h1>{item.name}</h1>)}
    </>
}

export default HomePage;