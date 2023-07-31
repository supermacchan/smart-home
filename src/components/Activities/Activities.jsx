import arrow from "../../images/icons/forward-arrow.svg";
import { Container } from "components/Container/Container";
import { 
    Section,
    Title,
    CardList,
    Card,
    CardTitle,
    CardText,
    Button
} from "./Activities.styled";
import background1 from "../../images/activities-1.png";
import background2 from "../../images/activities-2.png";
import background3 from "../../images/activities-3.png";

export const Activities = () => {
    return (
        <Section>
            <Container>
            <Title>
                What we do to help our clients grow in digital era?
            </Title>
            <CardList> 
                <Card
                    style={{
                        backgroundImage: `url(${background1})`,
                        backgroundPositionX: "74px",
                        backgroundPositionY: "48px",
                        marginTop: 158,
                    }}
                >
                    <CardTitle>
                        Make Your business To Be Better Famous In Internet
                    </CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </CardText>
                    <Button type="button">
                        Learn more
                        <img src={arrow} alt="forward arrow" />
                    </Button>
                </Card>

                <Card
                    style={{
                        backgroundImage: `url(${background2})`,
                        marginTop: -130,
                    }}
                >
                    <CardTitle>
                        Bring Technology To Your Comfrotable Home
                    </CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </CardText>
                    <Button type="button">
                        Learn more
                        <img src={arrow} alt="forward arrow" />
                    </Button>
                </Card>

                <Card
                    style={{
                        backgroundImage: `url(${background3})`,
                        backgroundPositionX: "100px",
                        backgroundPositionY: "49px",
                    }}
                >
                    <CardTitle>
                        Build Your Digital Product That Suitable For Your Need
                    </CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </CardText>
                    <Button type="button">
                        Learn more
                        <img src={arrow} alt="forward arrow" />
                    </Button>
                </Card>
            </CardList>
            </Container>
        </Section>
    );
}