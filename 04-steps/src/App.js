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
  // let [step, setStep] = useState(1);
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: 'wend' });

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);

      // má prática!! tendo em vista que em situações mais complexas, isso não irá funcionar.
      // test.name = 'wenderson';

      // caso realmente queira atualizar uma propriedade dentro de um objeto, basta passar o nome da propriedade
      // e o novo valor, chamando a função setTest.
      setTest({ name: 'vanderson' });
    }
    return;

    // step = step + 1; maneira errada de se atualizar o valor de step.

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

      <p className="message">
        {messages[step - 1]} { test.name }
      </p>

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