import './quizmanual.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function QuizManual() {
  const [mostrarQuiz, setMostrarQuiz] = useState(false);
  const [respostasQuiz, setRespostasQuiz] = useState({});
  const respostasCorretas = {
    pergunta1: 'Americana',
    pergunta2: 'universidade',
    pergunta3: 'falso'
  };

  const handleRespostaQuiz = (pergunta, resposta) => {
    setRespostasQuiz({ ...respostasQuiz, [pergunta]: resposta });
  }

  const fecharQuiz = () => {
    setRespostasQuiz({});
    setMostrarQuiz(false);
  }

  return (
    <div className="guia-container">
      <h1>Quiz de Boa Vindas!</h1>
      {!mostrarQuiz && (
        <div className="iconQuiz" onClick={() => setMostrarQuiz(true)}>
          <FontAwesomeIcon icon={faCircleExclamation} id='iconquiz'/>
        </div>
      )}
      {mostrarQuiz && (
        <div className="quiz">
          <div className="fecharQuiz" onClick={fecharQuiz}>
            <FontAwesomeIcon icon={faTimes} id='iconquiz'/>
          </div>
          <div className="perguntas">
            <div className="pergunta">
              <p>1. Em qual cidade fica a Fam?</p>
              <div className="quiz-buttons">
                <button onClick={() => handleRespostaQuiz('pergunta1', 'Americana')}>Americana</button>
                <button onClick={() => handleRespostaQuiz('pergunta1', 'rio')}>Rio de Janeiro</button>
                <button onClick={() => handleRespostaQuiz('pergunta1', 'Acre')}>Acre</button>
              </div>
              {respostasQuiz.pergunta1 && (
                <p className="resposta-correta">
                  {respostasQuiz.pergunta1 === respostasCorretas.pergunta1 ? "Você acertou!" : `Resposta correta: ${respostasCorretas.pergunta1}`}
                </p>
              )}
            </div>
            <div className="pergunta">
              <p>2. O que é uma universidade?</p>
              <div className="quiz-buttons">
                <button onClick={() => handleRespostaQuiz('pergunta2', 'escola')}>Uma escola</button>
                <button onClick={() => handleRespostaQuiz('pergunta2', 'empresa')}>Uma empresa</button>
                <button onClick={() => handleRespostaQuiz('pergunta2', 'universidade')}>Uma instituição de ensino superior</button>
              </div>
              {respostasQuiz.pergunta2 && (
                <p className="resposta-correta">
                  {respostasQuiz.pergunta2 === respostasCorretas.pergunta2 ? "Você acertou!" : `Resposta correta: ${respostasCorretas.pergunta2}`}
                </p>
              )}
            </div>
            <div className="pergunta">
              <p>3. Faculdade de Americana é uma Universidade?</p>
              <div className="quiz-buttons">
                <button onClick={() => handleRespostaQuiz('pergunta3', 'verdadeiro')}>Verdadeiro</button>
                <button onClick={() => handleRespostaQuiz('pergunta3', 'falso')}>Falso</button>
              </div>
              {respostasQuiz.pergunta3 && (
                <p className="resposta-correta">
                  {respostasQuiz.pergunta3 === respostasCorretas.pergunta3 ? "Você acertou!" : `Resposta correta: ${respostasCorretas.pergunta3}`}
                </p>
              )}
            </div>
            {Object.keys(respostasQuiz).length === Object.keys(respostasCorretas).length && (
              <div className="resposta-feedback">
                <h2>Resultado do Quiz</h2>
                <p>Você acertou {Object.keys(respostasQuiz).filter(pergunta => respostasQuiz[pergunta] === respostasCorretas[pergunta]).length} de {Object.keys(respostasCorretas).length} perguntas!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
