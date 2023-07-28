import logo from "../../images/icons/logo.svg";


export const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Intersted to woek with our team?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <button type="button">Let’s Talk</button>
            </div>
            <div>
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
            </div>
            <p>
                2019 &#169; Afrianska. All rights reserved.
            </p>
        </footer>
    )
}