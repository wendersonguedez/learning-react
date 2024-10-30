import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  /**
 * - step: armazena o valor do step atual, inicializado em 1, devido o 'useState(1)'
 * - setStep: função para atualizar o valor de step.
 *    - Quando chamada, setStep atualiza step com o novo valor,
 *      e o componente será re-renderizado com o valor atualizado de step.
 */
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
    return;
  };

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
    return;
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>

      <p className="message">{messages[step - 1]}</p>

      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>
          Previous
        </button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handleNext}>
          Next
        </button>
      </div>

    </div>
  );
}