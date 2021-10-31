function Checkbox(props) {
    return (
        <div className="mt-4">
            <label class="inline-flex items-center">
                <input
                    type="checkbox"
                    className="rounded bg-gray-200 border-none"
                    checked={props.checked}
                />
                <span class="ml-2 text-lg text-gray-700">{props.label}</span>
            </label>
        </div>
    );
}

export default Checkbox;
