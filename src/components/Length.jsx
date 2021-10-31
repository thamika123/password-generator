function Length(props) {
    return (
        <div className="mb-10 text-gray-700">
            <label className="block">
                <span className="text-lg">{props.label}</span>
                <input
                    type="number"
                    min={props.min}
                    max={props.max}
                    defaultValue={props.default}
                    onChange={props.onChange}
                    className="rounded-md w-full bg-gray-100 border-none mt-2"
                />
            </label>
        </div>
    );
}

export default Length;
