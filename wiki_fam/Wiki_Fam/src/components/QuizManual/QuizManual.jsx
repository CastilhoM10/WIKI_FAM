import './quizmanual.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

export default function QuizManual() {
  const [mostrarQuiz, setMostrarQuiz] = useState(false);
  const [respostasQuiz, setRespostasQuiz] = useState({});
  const respostasCorretas = {
    pergunta1: 'Americana',
    pergunta2: 'Uma instituição de ensino superior',
    pergunta3: 'falso',
    pergunta4: 'Carteirinha QR Code',
    pergunta5: 'Jardim Luciane',
    pergunta6: 'Dia 07'
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
            <FontAwesomeIcon icon={faCircleXmark} id='iconquiz'/>
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
                <p className={respostasQuiz.pergunta1 === respostasCorretas.pergunta1 ? "resposta-correta" : "resposta-incorreta"}>
                  {respostasQuiz.pergunta1 === respostasCorretas.pergunta1 ? "Você acertou!" : `Resposta correta: ${respostasCorretas.pergunta1}`}
                </p>
              )}
            </div>
            <div className="pergunta">
              <p>2. O que é uma universidade?</p>
              <div className="quiz-buttons">
                <button onClick={() => handleRespostaQuiz('pergunta2', 'escola')}>Uma escola</button>
                <button onClick={() => handleRespostaQuiz('pergunta2', 'empresa')}>Uma empresa</button>
                <button onClick={() => handleRespostaQuiz('pergunta2', 'Uma instituição de ensino superior')}>Uma instituição de ensino superior</button>
              </div>
              {respostasQuiz.pergunta2 && (
                <p className={respostasQuiz.pergunta2 === respostasCorretas.pergunta2 ? "resposta-correta" : "resposta-incorreta"}>
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
                <p className={respostasQuiz.pergunta3 === respostasCorretas.pergunta3 ? "resposta-correta" : "resposta-incorreta"}>
                  {respostasQuiz.pergunta3 === respostasCorretas.pergunta3 ? "Você acertou!" : `Resposta correta: ${respostasCorretas.pergunta3}`}
                </p>
              )}
            </div>

            <div className="pergunta">
              <p>4. O que é necessário para entrar no campus da Faculdade?</p>
              <div className="quiz-buttons">
                <button onClick={() => handleRespostaQuiz('pergunta4', 'RG')}>RG</button>
                <button onClick={() => handleRespostaQuiz('pergunta4', 'Comprovante de estudo')}>Comprovante de estudo</button>
                <button onClick={() => handleRespostaQuiz('pergunta4', 'Carteirinha QR Code')}>Carteirinha QR Code</button>
              </div>
              {respostasQuiz.pergunta4 && (
                <p className={respostasQuiz.pergunta4 === respostasCorretas.pergunta4 ? "resposta-correta" : "resposta-incorreta"}>
                  {respostasQuiz.pergunta4 === respostasCorretas.pergunta4 ? "Você acertou!" : `Resposta correta: ${respostasCorretas.pergunta4}`}
                </p>
              )}
            </div>

            <div className="pergunta">
              <p>5. Em qual bairro de Americana se localiza a Fam?</p>
              <div className="quiz-buttons">
                <button onClick={() => handleRespostaQuiz('pergunta5', 'Bôer')}>Bôer</button>
                <button onClick={() => handleRespostaQuiz('pergunta5', 'São Vito')}>São Vito</button>
                <button onClick={() => handleRespostaQuiz('pergunta5', 'Jardim Luciane')}>Jardim Luciane</button>
              </div>
              {respostasQuiz.pergunta5 && (
                <p className={respostasQuiz.pergunta5 === respostasCorretas.pergunta5 ? "resposta-correta" : "resposta-incorreta"}>
                  {respostasQuiz.pergunta5 === respostasCorretas.pergunta5 ? "Você acertou!" : `Resposta correta: ${respostasCorretas.pergunta5}`}
                </p>
              )}
            </div>

            <div className="pergunta">
              <p>6. Até qual dia o aluno pode estar pagando a faculdade com o bônus de desconto?</p>
              <div className="quiz-buttons">
                <button onClick={() => handleRespostaQuiz('pergunta6', 'Dia 07')}>Dia 07</button>
                <button onClick={() => handleRespostaQuiz('pergunta6', 'Dia 10')}>Dia 10</button>
                <button onClick={() => handleRespostaQuiz('pergunta6', 'Dia 17')}>Dia 17</button>
              </div>
              {respostasQuiz.pergunta6 && (
                <p className={respostasQuiz.pergunta6 === respostasCorretas.pergunta6 ? "resposta-correta" : "resposta-incorreta"}>
                  {respostasQuiz.pergunta6 === respostasCorretas.pergunta6 ? "Você acertou!" : `Resposta correta: ${respostasCorretas.pergunta6}`}
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