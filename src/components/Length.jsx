function Length(props) {
    return (
        <div className="mb-10 text-gray-700">
            <label className="mr-8 block">
                <span className="text-lg">{props.label}</span>
                <input
                    type="number"
                    min={props.min}
                    max={props.max}
                    defaultValue={props.default}
                    className="rounded-md mr-8 w-full bg-gray-100 border-none mt-2"
                />
            </label>
        </div>
    );
}

export default Length;
