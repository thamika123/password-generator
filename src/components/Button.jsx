function Button(props) {
    return (
        <button className="bg-purple-500 rounded-lg w-80 h-16 text-white text-lg font-sans mt-16">
            {props.text}
        </button>
    );
}

export default Button;
