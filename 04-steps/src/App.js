const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  let step = 1;

  const handlePreviousValue = (step) => {
    console.log(step)
    step++;
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">{messages[step - 1]}</p>

      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={() => handlePreviousValue(step)}>
          Previous
        </button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Next
        </button>
      </div>

    </div>
  );
}