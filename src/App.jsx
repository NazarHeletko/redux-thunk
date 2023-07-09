
import './App.css';
import CounterClass from './components/CounterClass/CounterClass';
import CounterFunc from './components/CounterFunc/CounterFunc';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <CounterFunc/>
      <CounterClass/>
      <Users/>
    </div>
  );
}

export default App;
