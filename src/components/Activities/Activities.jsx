import arrow from "../../images/icons/forward-arrow.svg";

export const Activities = () => {
    return (
        <section>
            <h2>
                What we do to help our client grow in digital era
            </h2>
            <ul> 
                <li>
                    <img src="" alt="" />
                    <h3>
                        Make Your business To Be Better Famous In Internet
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <button type="button">
                        Learn more
                        <img src={arrow} alt="forward arrow" />
                    </button>
                </li>

                <li>
                    <img src="" alt="" />
                    <h3>
                        Bring Technology To Your Comfrotable Home
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <button type="button">
                        Learn more
                        <img src={arrow} alt="forward arrow" />
                    </button>
                </li>

                <li>
                    <img src="" alt="" />
                    <h3>
                        Build Your Digital Product That Suitable For Your Need
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <button type="button">
                        Learn more
                        <img src={arrow} alt="forward arrow" />
                    </button>
                </li>
            </ul>
        </section>
    );
}