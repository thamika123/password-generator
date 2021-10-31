function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 float-right text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
        </svg>
    );
}

function Password(props) {
    return (
        <div
            className="bg-gray-50 md:w-144 min-w-80 rounded-2xl shadow-lg px-8 py-8 mb-12"
            onClick={props.onClick}
        >
            <h2 className="text-lg text-gray-700">Generated password:</h2>
            <div className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-2">
                <h2 className="text-gray-600">
                    {props.password
                        ? props.password
                        : "Choose your options and click generate password."}
                    <Icon />
                </h2>
            </div>
        </div>
    );
}

export default Password;
