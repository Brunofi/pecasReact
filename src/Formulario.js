

function Formulario({ botao, eventoTeclado, dados, cadastrar, obj }) {
    return (
      <form>
        <input
          type="text"
          onChange={eventoTeclado}
          name="nome"
          placeholder="Nome"
          value={dados.nome}
          className="form-control"
        />
        <input
          type="text"
          name="partnumber"
          placeholder="Part Number"
          value={dados.partnumber}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="text"
          name="peso"
          placeholder="Peso"
          value={dados.peso}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="text"
          name="ncm"
          placeholder="NCM"
          value={dados.ncm}
          onChange={eventoTeclado}
          className="form-control"
        />
        <select
          name="estado"
          value={dados.estado}
          onChange={eventoTeclado}
          className="form-control"
        >
          <option value="NOVA">NOVA</option>
          <option value="REC">REC</option>
        </select>
        <input
          type="text"
          name="modelocarro"
          placeholder="Modelo do Carro"
          value={dados.modelocarro}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="text"
          name="subsistema"
          placeholder="Subsistema"
          value={dados.subsistema}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="text"
          name="fabricante"
          placeholder="Fabricante"
          value={dados.fabricante}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="number"
          name="qtdmin"
          placeholder="Quantidade Mínima"
          value={dados.qtdmin}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="number"
          name="qtdmed"
          placeholder="Quantidade Média"
          value={dados.qtdmed}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="number"
          name="qtdmax"
          placeholder="Quantidade Máxima"
          value={dados.qtdmax}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={dados.preco}
          onChange={eventoTeclado}
          className="form-control"
        />
        <input
          type="text"
          name="ptnumberSimilar"
          placeholder="Part Number Similar"
          value={dados.ptnumberSimilar}
          onChange={eventoTeclado}
          className="form-control"
        />
  
        {botao ? (
          <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
        ) : (
          <div>
            <input type="button" value="Alterar" className="btn btn-warning" />
            <input type="button" value="Remover" className="btn btn-danger" />
            <input type="button" value="Cancelar" className="btn btn-secondary" />
          </div>
        )}
      </form>
    );
  }
  
  export default Formulario;
  