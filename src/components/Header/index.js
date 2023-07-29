import Logo from '../Logo/';
import OpcoesHeader from '../OpcoesHeader';
import OpcoesIcone from '../OpcoesIcone';
import styled from 'styled-components';

const HeaderContainer = styled.header`  
    background-color: #FFF;
    display: flex;
    justify-content: center;
  
`
function Header() {
    return(
      <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <OpcoesIcone/>                   
      </HeaderContainer>      
    )
}

export default Header;