import './discasManual.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function DicasManual() {
    const [showDicas, setShowDicas] = useState(false);

    const toggleDicas = () => {
      setShowDicas(!showDicas);
    };
  
    return (
      <div className="guia-container">
        <h1>Dicas!</h1>
        <div className="dicas">
          <div className="dicas-header" onClick={toggleDicas}>
            <h2>Dicas e Truques</h2>
            <FontAwesomeIcon icon={showDicas ? faChevronUp : faChevronDown}  id='icondicas'/>
          </div>
          {showDicas && (
            <div className="dicas-content">
              <p>
                Aqui estão algumas dicas e truques úteis para aproveitar ao máximo sua graduação:
              </p>
              <ul>
                <li>
                  <strong>Dica 1:</strong> Sempre verifique os horários de aula e as datas de entrega de trabalhos.
                </li>
                <li>
                  <strong>Dica 2:</strong> Mantenha-se organizado com um calendário ou agenda.
                </li>
                <li>
                  <strong>Dica 3:</strong> Participe de atividades extracurriculares para conhecer novas pessoas e expandir seus interesses.
                </li>
                <li>
                  <strong>Dica 4:</strong> Não tenha medo de pedir ajuda a professores, tutores ou colegas de classe.
                </li>
                <li>
                  <strong>Dica 5:</strong> Reserve tempo para relaxar e cuidar de si mesmo.
                </li>
                <li>
                  <strong>Dica 6:</strong> Explore recursos online, como fóruns de discussão e tutoriais, para complementar sua aprendizagem.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }