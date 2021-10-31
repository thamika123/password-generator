function Password(props) {
    return (
        <div className="bg-gray-50 md:w-144 min-w-80 rounded-2xl shadow-lg px-8 py-8 mb-12">
            <h2 className="text-lg text-gray-700">Generated password:</h2>
            <div className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-2">
                <h2 className="text-gray-600">
                    {props.password
                        ? props.password
                        : "Choose your options and click generate password."}
                </h2>
            </div>
        </div>
    );
}

export default Password;
