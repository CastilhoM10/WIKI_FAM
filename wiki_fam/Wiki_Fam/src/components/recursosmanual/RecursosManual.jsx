import './recursosManual.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default function RecursosManual() {
    const [showRecursos, setShowRecursos] = useState(false);

    const toggleRecursos = () => {
      setShowRecursos(!showRecursos);
    };
  
    return (
        <div className="recursos-container">
            <h1>Recursos da Instituição</h1>
            <div className="recursos">
                <div className="section-header" onClick={toggleRecursos}>
                <h2>Recursos de Suporte</h2>
                <FontAwesomeIcon icon={showRecursos ? faChevronUp : faChevronDown} id='iconrecursos'/>
                </div>
                {showRecursos && (
                <div className="section-content">
          <p>
            Aqui estão alguns recursos de suporte que você pode utilizar durante seus estudos:
          </p>
          <ul>
            <li>
              <strong>Centro de Ajuda:</strong> Entre em contato com nosso centro de ajuda 24 horas por dia, 7 dias por semana.
            </li>
            <li>
              <strong>Tutoriais Online:</strong> Acesse nossa biblioteca de tutoriais online para obter ajuda com uma variedade de tópicos.
            </li>
            <li>
              <strong>Grupos de Estudo:</strong> Junte-se a grupos de estudo para colaborar com outros alunos e compartilhar recursos.
            </li>
          </ul>
          
                 </div>
            
      )}
      </div>
        </div>
    );
  }