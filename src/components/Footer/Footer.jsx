import { useLocation } from "react-router-dom";
import logo from "../../images/icons/logo.svg";
import { 
    FooterSection,
    FooterContainer,
    TextArea,
    Title,
    Text,
    Button,
    FooterContent
} from "./Footer.styled";

export const Footer = () => {
    const location = useLocation();

    return (
        <FooterSection style={{
            backgroundColor: location.pathname === "/" ? "#5A98D0" : "#FFF"
        }}>
            <FooterContainer>

                <TextArea>
                    <Title>Interested to woek with our team?</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Text>
                    <Button type="button">Let’s Talk</Button>
                </TextArea>

                <FooterContent>
                    <div>
                        <img src={logo} alt="company logo" />
                        <h3>Afrianska</h3>
                        <ul>
                            <li>
                                {/* replace with icons? */}
                                <span>A.</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </li>
                            <li>
                                <span>T.</span>
                                <p>
                                    +62-812-7313-4321
                                </p>
                            </li>
                            <li>
                                <span>E.</span>
                                <p>
                                    hello.afrian@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>About US</h3>
                        <ul>
                            <li>
                                <a href="/">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    What We Do
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Project
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    How It Work With Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Follow US</h3>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/">
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </FooterContent>
                <p>
                    2019 &#169; Afrianska. All rights reserved.
                </p>
            </FooterContainer>
        </FooterSection>
    )
}