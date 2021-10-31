import React from "react";
import ReactDOM from "react-dom";

import Password from "./components/Password";
import Form from "./components/Form";

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
