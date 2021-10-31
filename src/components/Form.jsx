import Length from "./Length";
import Checkbox from "./Checkbox";

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

export default Form;