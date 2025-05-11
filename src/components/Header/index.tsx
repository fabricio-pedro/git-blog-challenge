import { HeaderContainer, HeaderContent } from "./styles";

import Logo from "../../assets/images/Logo.svg";

export function Header(){

    return (

     <HeaderContainer>
       <HeaderContent>
        <span/>
        <img src={Logo} alt="Github Logo" />
        <span/>
       </HeaderContent>
      </HeaderContainer>  



    );
}