import { useLocation, Link } from "react-router-dom";
import logo from "../../images/icons/footer-logo.svg";
import { MdOutlineHomeWork, MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import { 
    FooterSection,
    FooterContainer,
    TextArea,
    Title,
    Text,
    Button,
    FooterContent,
    FooterLink,
    FooterLogo,
    FooterTitle,
    FooterContact,
    ContactList,
    ContactItem,
    Subtitle,
    List,
    ListLink,
    ListItem,
    FooterNav,
    Copyright
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
                    <FooterContact>
                        <Link to={"/"}>
                            <FooterLink>
                                <FooterLogo src={logo} alt="company logo" />
                                <FooterTitle>Afrianska</FooterTitle>
                            </FooterLink>
                        </Link>
                        <ContactList>
                            <ContactItem>
                                <MdOutlineHomeWork style={{width: 32, height: 32}} />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </ContactItem>
                            <ContactItem>
                                <MdLocalPhone style={{width: 20, height: 20}} />
                                <p>
                                    +62-812-7313-4321
                                </p>
                            </ContactItem>
                            <ContactItem>
                                <MdOutlineEmail style={{width: 20, height: 20}} />
                                <p>
                                    hello.afrian@gmail.com
                                </p>
                            </ContactItem>
                        </ContactList>
                    </FooterContact>

                    <FooterNav>
                        <Subtitle>About US</Subtitle>
                        <List>
                            <Link to={"/"}>
                                <ListItem>
                                    About
                                </ListItem>
                            </Link>
                            <Link to={"/"}>
                                <ListItem>
                                    What We Do
                                </ListItem>
                            </Link>
                            <Link to={"/"}>
                                <ListItem>
                                    Project
                                </ListItem>
                            </Link>
                            <Link to={"/"}>
                                <ListItem>
                                    How It Work With Us
                                </ListItem>
                            </Link>  
                        </List>
                    </FooterNav>

                    <div>
                        <Subtitle>Follow US</Subtitle>
                        <List>
                            <li>
                                <ListLink 
                                    href="https://www.instagram.com/" 
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                >
                                    Instagram
                                </ListLink>
                            </li>
                            <li>
                                <ListLink 
                                    href="https://www.facebook.com/"
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                >
                                    Facebook
                                </ListLink>
                            </li>
                            <li>
                                <ListLink 
                                    href="https://www.linkedin.com/"
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                >
                                    LinkedIn
                                </ListLink>
                            </li>
                            <li>
                                <ListLink 
                                    href="https://www.youtube.com/"
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                >
                                    Youtube
                                </ListLink>
                            </li>
                        </List>
                    </div>
                </FooterContent>
                <Copyright>
                    2019 &#169; Afrianska. All rights reserved.
                </Copyright>
            </FooterContainer>
        </FooterSection>
    )
}