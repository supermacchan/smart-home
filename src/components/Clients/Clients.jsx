import { Container } from "components/Container/Container";
import { 
    Section,
    TextArea,
    Title,
    Text,
    Border,
    ClientList,
    Client,
    Button
} from "./Clients.styled";
import logo from "../../images/client-logo.png";

export const Clients = () => {
    return (
        <Section id="clients">
            <Container>
                <TextArea>
                    <Title>Our Beloved Clients</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Text>
                </TextArea>
                
                <Border>
                    <ClientList>
                        <Client>
                            <img src={logo} alt="client logo" />
                        </Client>
                        <Client>
                            <img src={logo} alt="client logo" />
                        </Client>
                        <Client>
                            <img src={logo} alt="client logo" />
                        </Client>
                        <Client>
                            <img src={logo} alt="client logo" />
                        </Client>
                        <Client>
                            <img src={logo} alt="client logo" />
                        </Client>
                        <Client>
                            <img src={logo} alt="client logo" />
                        </Client>
                        <Client>
                            <img src={logo} alt="client logo" />
                        </Client>
                        <Client>
                            <Button type="button">More Clients</Button>
                        </Client>
                    </ClientList>
                </Border>
            </Container>
        </Section>
    )
}