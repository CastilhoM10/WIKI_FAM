import './duvidas.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Duvidas() {
    const [showDuvidas, setShowDicas] = useState(false);

    const toggleDicas = () => {
      setShowDicas(!showDuvidas);
    };
  return (
    <div className="guia-container">
        <h1>Duvidas!</h1>
        <div className="duvidas">
          <div className="duvidas-header" onClick={toggleDicas}>
            <h2>Duvidas</h2>
            <FontAwesomeIcon icon={showDuvidas ? faChevronUp : faChevronDown}  id='iconduvidas'/>
          </div>
          {showDuvidas && (
            <div className="duvidas-content">
              <p>
                Aqui estão algumas soluções de duvidas que podem aparecer durante a graduação:
              </p>
              <ul>
                <li>
                    <strong>Manual de como providenciar a Carteirinha QR Code para entrar no campus da faculdade:</strong><br/>
                    1- Realize o login no portal da Fam, <a href="www.famportal.com">www.famportal.com.br</a><br/>

                    2- Seleciona “Login” no Menu Lateral esquerdo<br/>

                    3- Clique no ícone que representa a Carteirinha QR Code
                </li>
                <li><strong>Boleto Financeiro:</strong>O aluno pode contar com o desconto de sua mensalidade até dia 07 de cada mês, vencimento do boleto, após essa data é considerado o valor inteiro do curso. Caso passe da data de vencimento aconselhamos entrar em contato com CFA (Financeiro).
                </li>
                <li>
                    <strong>Localização da Fam:</strong>A Fam é localizada no bairro Jardim Luciane, na Av. Joaquim Boer, e conta com 4 entradas, sendo elas na Av. Joaquim Bôer, na Av. Unitika, na Rua Pedro Perissinoto e outra no estacionamento da Av. Joaquim Bôer
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

