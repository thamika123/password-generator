function Checkbox(props) {
    return (
        <div className="mt-4">
            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="rounded bg-gray-200 border-none text-purple-500 focus:ring-purple-500"
                    defaultChecked={props.checked}
                    onChange={props.onChange}
                />
                <span className="ml-2 text-lg text-gray-700">
                    {props.label}
                </span>
            </label>
        </div>
    );
}

export default Checkbox;
