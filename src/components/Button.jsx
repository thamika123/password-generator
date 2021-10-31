function Button(props) {
    return (
        <button
            className="bg-purple-500 rounded-lg w-80 h-16 text-white text-lg font-sans mt-16 font-bold focus:ring-4 ring-purple-300"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;
