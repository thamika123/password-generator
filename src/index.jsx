import React from "react";
import ReactDOM from "react-dom";

import Checkbox from "./components/Checkbox";
import Length from "./components/Length";

function Form() {
    return (
        <div className="bg-gray-50 md:w-144 min-w-80 rounded-2xl shadow-lg px-8 py-8">
            <Length label="Password length:" min="6" max="20" default="15" />
            <Checkbox label="Include uppercase characters" checked={true} />
            <Checkbox label="Include lowercase characters" checked={true} />
            <Checkbox label="Include numbers" />
            <Checkbox label="Include symbols" />
        </div>
    );
}

function Password(props) {
    return (
        <div className="bg-gray-50 md:w-144 min-w-80 rounded-2xl shadow-lg px-8 py-8 mb-12">
            <h2 className="text-lg text-gray-700">Generated password:</h2>
            <div className="width-full bg-gray-100 px-4 py-2 rounded-lg mt-2">
                <h2 className="text-gray-500">
                    {props.password
                        ? props.password
                        : "Choose your options and click generate password."}
                </h2>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1 className="md:mt-56 mt-40 text-4xl font-sans font-extrabold text-gray-700 text-center">
                Password Generator
            </h1>
            <div className="flex flex-col items-center justify-center mt-16 mb-12">
                <Password />
                <Form />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
