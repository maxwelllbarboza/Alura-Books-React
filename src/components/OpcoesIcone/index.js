import './style.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [perfil, sacola ]

function OpcoesIcone() {
    return(
        <ul className='icones'>          
          {icones.map((icone) => (
            <li className='icones-item'><img src={icone}/></li>
          ))}
        </ul>
    )
}

export default OpcoesIcone;