import'./Contato.css';
function SobrePage() {
    
    return <>
        
        <button onClick={() => navigation("/home")}>Home</button>

    <div className="cards-container">
        <div className="card">
            <img src="https://tse4.mm.bing.net/th?id=OIG4.dilOAg0b0Qs11lBX_nSV&pid=ImgGn" alt="João Silva" />
            <h2>Igor Witt da Rocha</h2>
            <p>Telefone: (51) 91234-5678</p>
            <p>Email: joao.silva@example.com</p>
        </div>
        <div className="card">
            <img src="https://tse3.mm.bing.net/th?id=OIG2.Md2_29zvz1Wzw5MnzwGC&pid=ImgGn" alt="Maria Oliveira" />
            <h2>Eder Casagranda</h2>
            <p>Telefone: (51) 92345-6789</p>
            <p>Email: maria.oliveira@example.com</p>
        </div>
    </div>
    </>

  
        
    
}

export default SobrePage;



       



