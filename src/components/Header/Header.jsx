import logo from "../../images/icons/logo.svg";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useLocation } from "react-router-dom";
import { HeaderContainer, HeaderContent, Logo, MenuButton } from "./Header.styled";

export const Header = () => {
    const location = useLocation();

    return (
        <HeaderContainer>
            <HeaderContent
                style={{
                    paddingBottom: location.pathname === "/" ? 0 : 48
                }}
            >
                <Logo src={logo} alt="company logo" />
                <MenuButton type="button">
                    <GiHamburgerMenu 
                        style={{width: "32px", height: "32px"}}
                    />
                </MenuButton>
            </HeaderContent>
        </HeaderContainer>
    );
}