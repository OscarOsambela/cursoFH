import Counter from './components/Counter';
import TimerFather from './components/TimerFather';
import Usuario from './components/Usuario';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React - Typescript</h1>
        <hr/>
        <h3>useState</h3>
        <Counter/>
        <Usuario/>
        <hr/>
        <h3>useEffect - useRef</h3>
        <TimerFather/>
      </header>
    </div>
  );
}

export default App;
