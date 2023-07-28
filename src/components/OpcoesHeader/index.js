import  './style.css';

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function OpcoesHeader()  {
    return(
        <ul className='opcoes'>          
          {textoOpcoes.map((texto) => (
            <li className='opcoes-item'><p>{texto}</p></li>
          ))}
        </ul>
    )
}
export default OpcoesHeader;