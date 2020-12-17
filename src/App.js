import { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumber] = useState({ first: '', second: '' });

  function handleChange(e) {
    const { value, name } = e.target;
    setNumber(numbers => ({ ...numbers, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="app">
      <header className="app-header">ITSAPARK Challenge</header>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="first">First number:</label>
          <input
            type="number"
            name="first"
            id="first"
            required
            value={numbers.first}
            onChange={handleChange}
          />
          <label htmlFor="second">Second number:</label>
          <input
            type="number"
            name="second"
            id="second"
            required
            value={numbers.second}
            onChange={handleChange}
          />
          <input type="submit" value="PROCESS" />
        </form>
      </div>
    </div>
  );
}

export default App;
