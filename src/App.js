import './App.css';
import Logo from './components/Logo';
import OpcoesHeader from './components/OpcoesHeader';
import OpcoesIcone from './components/OpcoesIcone';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader> 
        <OpcoesIcone></OpcoesIcone>            
      </header>
    </div>
  );
}
export default App;
