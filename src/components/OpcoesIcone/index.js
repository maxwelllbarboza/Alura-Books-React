import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const IconeContainer = styled.ul`
  display: flex;
  align-items: center;
`
const IconeItem = styled.li`
  margin-right: 40px;
  width: 25px;
`

const icones = [perfil, sacola ]

function OpcoesIcone() {
    return(
        <IconeContainer>          
          {icones.map((icone) => (
            <IconeItem ><img src={icone}/></IconeItem>
          ))}
        </IconeContainer>
    )
}
export default OpcoesIcone;