import React from "react";
import ReactDOM from "react-dom";

import Checkbox from "./components/Checkbox";
import Length from "./components/Length";

function App() {
    return (
        <div>
            <h1 className="mt-56 text-4xl font-sans font-extrabold text-gray-700 text-center">
                Password Generator
            </h1>
            <div className="flex items-center justify-center mt-16 mb-12">
                <div className="bg-gray-50 w-144 min-w-80 rounded-2xl shadow-lg pl-8 py-8">
                    <Length
                        label="Password length:"
                        min="6"
                        max="20"
                        default="15"
                    />
                    <Checkbox
                        label="Include uppercase characters"
                        checked={true}
                    />
                    <Checkbox
                        label="Include lowercase characters"
                        checked={true}
                    />
                    <Checkbox label="Include numbers" />
                    <Checkbox label="Include symbols" />
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
