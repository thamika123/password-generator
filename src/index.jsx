import React from "react";
import ReactDOM from "react-dom";

import Password from "./components/Password";
import Form from "./components/Form";
import Button from "./components/Button";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: undefined };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        let allowedChars = "abcdefghijklmnopqrstuvwxyz";
        allowedChars += allowedChars.toUpperCase();

        this.setState({ password: this.generatePassword(15, allowedChars) });
    }

    generatePassword(length, allowedChars) {
        // This code is based on https://stackoverflow.com/a/51540480/16027708
        let array = new Uint32Array(length);
        let randomNumbers = Array.from(crypto.getRandomValues(array));

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
                        onClick={this.handleButtonClick}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
