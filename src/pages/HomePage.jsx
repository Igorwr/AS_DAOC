
import { useState } from "react";
import { data } from "../mock/data";
import { useNavigate } from "react-router-dom";
import'./HomePage.css';

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
    <div className="home-container">
        <h1>Seja Bem-Vindo</h1>
        <p>Cadastre seu produto ou entre em contato com nossos Colaboradores!</p>
    </div>
    </>
}

export default HomePage;