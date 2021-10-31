import Length from "./Length";
import Checkbox from "./Checkbox";

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*();/.,\\`<>[]{}'\"?";

function Form(props) {
    return (
        <div>
            <div className="bg-gray-50 md:w-144 min-w-80 rounded-2xl shadow-lg px-8 py-8">
                <Length
                    label="Password length:"
                    min="6"
                    max="20"
                    default="15"
                    onChange={props.onLengthChange}
                />
                <Checkbox
                    label="Include uppercase letters"
                    checked={true}
                    onChange={() => props.onOptionChange(upper)}
                />
                <Checkbox
                    label="Include lowercase letters"
                    checked={true}
                    onChange={() => props.onOptionChange(lower)}
                />
                <Checkbox
                    label="Include numbers"
                    onChange={() => props.onOptionChange(numbers)}
                />
                <Checkbox
                    label="Include symbols"
                    onChange={() => props.onOptionChange(symbols)}
                />
            </div>
        </div>
    );
}

export default Form;
