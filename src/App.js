import './App.css';
import ProgressBar from './component/ProgressBar';
import { useEffect, useState } from 'react';

function App() {

  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? <img src="https://img.freepik.com/premium-vector/checkmark-green-loading-complete_79145-705.jpg"></img> : "Loading..."}</span>
    </div>
  );
}

export default App;
