import './App.css';
import ReactDnD from './components/DnD/ReactDnD';
//import ExampleQuery from './components/GRAPHQL/ExampleQuery';
// import { SimpleForm } from './components/useEffect/SimpleForm';

// import CounterApp from './components/useState/CounterApp';
// import CustomHookState from './components/useState/CustomHookState';
// import CustomHookEffect from './components/useEffect/CustomHookEffect';

// import HookApi from './HookApi';
// import MultipleCustomHooks from './components/examples/MultipleCustomHooks';

function App() {
  return (
    <div className="App">
      {/* <HookApi/>
      <CounterApp/>
      <CustomHookState/>
      <SimpleForm/>
      <CustomHookEffect/>
      <MultipleCustomHooks/> 
      <ExampleQuery/>*/}
      <ReactDnD/>
    </div>
  );
}

export default App;
