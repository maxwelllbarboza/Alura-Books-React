import styled from 'styled-components';

const HeaderContainer = styled.ul`  
    display: flex;  
`
const HeaderItem = styled.li`  
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;    
`
const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function OpcoesHeader()  {
    return(
        <HeaderContainer>          
          {textoOpcoes.map((texto) => (
            <HeaderItem><p>{texto}</p></HeaderItem>
          ))}
        </HeaderContainer>
    )
}
export default OpcoesHeader;