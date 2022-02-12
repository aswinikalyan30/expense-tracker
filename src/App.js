import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [showForm, setShowForm] = useState(false);
  return (
    <main>
      <div id="balance">
        <h3>Available Balance</h3>
        <span>{balance}</span>
        <button onClick={() => setShowForm(!showForm)}>{showForm ? 'cancel' : 'new record'}</button>
      </div>
      {
        showForm ? <Form setBalance={setBalance} /> : null
      }
    </main>
  );
}

export default App;
