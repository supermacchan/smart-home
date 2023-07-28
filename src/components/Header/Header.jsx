import logo from "../../images/icons/logo.svg";
import menu from "../../images/icons/menu.svg";

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="company logo" />
            <button type="button">
                <img src={menu} alt="menu" />
            </button>
        </header>
    );
}