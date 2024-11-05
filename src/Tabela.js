function Tabela({ vetor }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Part Number</th>
                    <th>Peso</th>
                    <th>NCM</th>
                    <th>estado</th>
                    <th>Modelo do Carro</th>
                    <th>Subsistema</th>
                    <th>fabricante</th>
                    <th>qtdmin</th>
                    <th>qtdmed</th>
                    <th>qtdmax</th>
                    <th>Preço</th>
                    <th>ptnumberSimilar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((peca, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{peca.nome}</td>
                            <td>{peca.partNumber}</td>
                            <td>{peca.peso}</td>
                            <td>{peca.ncm}</td>
                            <td>{peca.estado}</td>
                            <td>{peca.modelocarro}</td>
                            <td>{peca.subsistema}</td>
                            <td>{peca.fabricante}</td>
                            <td>{peca.qtdmin}</td>
                            <td>{peca.qtdmed}</td>
                            <td>{peca.qtdmax}</td>
                            <td>{peca.preco}</td>
                            <td>{peca.ptnumberSimilar}</td>
                            <td><button className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )
}

export default Tabela;