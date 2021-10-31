import React from "react";
import ReactDOM from "react-dom";

import Password from "./components/Password";
import Form from "./components/Form";
import Button from "./components/Button";

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*();/.,\\`<>[]{}'\"?";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: undefined,
            length: 15,
            allowedChars: `${lower}${upper}`,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ password: this.generatePassword() });
    }

    generatePassword() {
        // This code is based on https://stackoverflow.com/a/51540480/16027708
        let array = new Uint32Array(this.state.length);
        let randomNumbers = Array.from(crypto.getRandomValues(array));
        let allowedChars = this.state.allowedChars;

        return randomNumbers
            .map(x => allowedChars[x % allowedChars.length])
            .join("");
    }

    render() {
        return (
            <div>
                <h1 className="md:mt-40 mt-40 text-4xl font-sans font-extrabold text-gray-700 text-center">
                    Password Generator
                </h1>
                <div className="flex flex-col items-center justify-center mt-16 mb-12">
                    <Password password={this.state.password} />
                    <Form />
                    <Button
                        text="Generate password"
                        onClick={this.handleClick}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
