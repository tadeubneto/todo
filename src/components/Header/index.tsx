import { HeaderContainer } from "./style";
import logoImg from '../../assets/Logo.svg'
export function Header(){
    return (
        <HeaderContainer>           
                <img src={logoImg} alt="" />
        </HeaderContainer>    
    )
}