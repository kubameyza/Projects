import { Result } from '../components/result/Result';
import { Summary } from '../components/summary/Summary';
import './App.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="result">
          <Result></Result>
        </div>
        <div className="summary">
          <Summary></Summary>
        </div>
      </div>
    </>
  );
}

export default App;
