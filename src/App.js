import React, { useState } from 'react';
import './App.css';

function App() {
  const [loanAmount, setLoanAmount] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principal = loanAmount - downPayment;
    const monthlyInterest = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyInterest === 0) {
      setMonthlyPayment((principal / numberOfPayments).toFixed(2));
    } else {
      const monthly =
        (principal * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
      setMonthlyPayment(monthly.toFixed(2));
    }
  };

  return (
    <div className="calculator-container">
      <h2>Mortgage Calculator</h2>
      <input
        type="number"
        placeholder="Loan Amount (₹)"
        value={loanAmount}
        onChange={(e) => setLoanAmount(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Down Payment (₹)"
        value={downPayment}
        onChange={(e) => setDownPayment(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Annual Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Loan Term (years)"
        value={loanTerm}
        onChange={(e) => setLoanTerm(Number(e.target.value))}
      />
      <button onClick={calculateMortgage}>Calculate</button>
      {monthlyPayment !== null && (
        <div className="result">
          <h3>Monthly Payment: ₹{monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
}

export default App;