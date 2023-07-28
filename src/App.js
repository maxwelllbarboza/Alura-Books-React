import './App.css';
import Logo from './components/Logo';

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>  
        <ul className='opcoes'>
          
          {textoOpcoes.map((texto) => (

            <li className='opcoes-item'><p>{texto}</p></li>

          ))}
                           
        </ul>            
           
      </header>
    </div>
  );
}
export default App;
