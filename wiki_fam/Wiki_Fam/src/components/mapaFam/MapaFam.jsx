// MapaFam.jsx
import { useState, useEffect } from "react";
import './mapaFam.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function MapaFam() {
  const [blocos, setBlocos] = useState([]);
  const [selectedBloco, setSelectedBloco] = useState("");
  const [inputSala, setInputSala] = useState("");
  const [salas, setSalas] = useState([]);
  const [salaEncontrada, setSalaEncontrada] = useState(null);
  const [showDica, setShowDica] = useState(false);
  const [dicaSala, setDicaSala] = useState("");
  const [referenciaSala, setReferenciaSala] = useState("");

  useEffect(() => {
    fetchBlocos();
  }, []);

  const fetchBlocos = async () => {
    try {
      const response = await fetch("http://localhost:3003/auth/blocos");
      const data = await response.json();
      console.log("Blocos recebidos:", data);
      setBlocos(data);
    } catch (error) {
      console.error("Erro ao buscar os blocos:", error);
    }
  };

  const handleBlocoChange = async (e) => {
    setSelectedBloco(e.target.value);
    if (e.target.value) {
      try {
        const response = await fetch(`http://localhost:3003/auth/salas_de_aula/${e.target.value}`);
        const data = await response.json();
        console.log("Salas recebidas:", data);
        setSalas(data);
      } catch (error) {
        console.error("Erro ao buscar as salas de aula:", error);
      }
    } else {
      setSalas([]);
    }
    setSalaEncontrada(null); // Reinicia a sala encontrada ao trocar de bloco
  };

  const handleInputChange = (e) => {
    setInputSala(e.target.value);
  };

  const handleBuscarClick = () => {
    const salaEncontrada = salas.find(sala => sala.nome_sala === inputSala);
    if (salaEncontrada) {
      console.log("Sala encontrada:", inputSala);
      setSalaEncontrada(salaEncontrada);
      setDicaSala(salaEncontrada.dica);
      setReferenciaSala(salaEncontrada.referencia);
    } else {
      console.log("Sala não encontrada:", inputSala);
      setSalaEncontrada(null);
      setDicaSala("");
      setReferenciaSala("");
    }
  };

  const handleMarkerClick = () => {
    setShowDica(true);
  };

  const handleDicaClose = () => {
    setShowDica(false);
  };

  return (
    <div className='mapa-container'>
      <div className='blocos-container'>
        <h2>Blocos</h2>
        <ul>
          {blocos.map((bloco, index) => (
            <li key={`bloco-${index}`}>{bloco.nome_bloco}</li>
          ))}
        </ul>
      </div>
      <div className='info'>
        <h2>Escolha seu bloco:</h2>
        <select onChange={handleBlocoChange}>
          <option value="">Selecione um bloco</option>
          {blocos.map((bloco, index) => (
            <option key={`bloco-${index}`} value={bloco.id}>{bloco.nome_bloco}</option>
          ))}
        </select>
      </div>
      {selectedBloco && (
        <div className='info'>
          <h2>Digite o número da sala:</h2>
          <input type="text" value={inputSala} onChange={handleInputChange} placeholder="Digite o numero da sala.."/>
          <button onClick={handleBuscarClick} className="btn btn-primary">Buscar</button>
        </div>
      )}
        <div className='mapa-bloco'>
  <div className='bloco'>
    {salas.map((sala, index) => (
      <div
        className={`sala ${salaEncontrada && salaEncontrada.nome_sala === sala.nome_sala ? "encontrada" : ""}`}
        key={index}
        style={{
          left: `${(index % 5) * 100}px`, // Define a posição horizontal com base no índice e no número de colunas
          top: `${Math.floor(index / 5) * 100}px`, // Define a posição vertical com base no índice e no número de colunas
        }}
        onClick={() => handleMarkerClick(sala)}
      >
        {sala.nome_sala}
        {salaEncontrada && salaEncontrada.nome_sala === sala.nome_sala && (
          <div className='marcacao'><FontAwesomeIcon icon={faLocationDot} id="iconMapa"/></div>
        )}
      </div>
    ))}
  </div>
</div>
      {showDica && (
        <div className='dica-sala'>
          <p onClick={handleDicaClose}>Dica: {dicaSala}</p>
          <p onClick={handleDicaClose}>Referência: {referenciaSala}</p>
        </div>
      )}
    </div>
  );
}
