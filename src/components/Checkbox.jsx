function Checkbox(props) {
    return (
        <div className="mt-4" onChange={props.onChange}>
            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="rounded bg-gray-200 border-none"
                    defaultChecked={props.checked}
                />
                <span className="ml-2 text-lg text-gray-700">
                    {props.label}
                </span>
            </label>
        </div>
    );
}

export default Checkbox;
