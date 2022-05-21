import React, { useState } from "react";

const CreateTodo = ({ onSubmit }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [text, setText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const todo = {
            id: "id" + Math.random().toString(16).slice(2),
            isCompleted: isCompleted,
            todo: text,
            order: new Date(),
        };
        onSubmit(todo);
        setText("");
    };

    const changeTextHandler = (e) => {
        setText(e.target.value);
    };

    return (
        <form
            className="bg-white w-full flex p-4 gap-4 rounded-lg dark:bg-gray-800"
            onSubmit={submitHandler}
        >
            <span
                onClick={() => setIsCompleted((prev) => !prev)}
                className={`w-6 h-6 rounded-full flex items-center justify-center overflow-hidden ${
                    isCompleted
                        ? "bg-gradient-to-br from-sky-500 to-violet-500"
                        : "border dark:border-gray-700"
                }`}
            >
                {isCompleted && (
                    <img
                        src="./images/icon-check.svg"
                        alt=""
                        className="w-3 h-3 object-contain "
                    />
                )}
            </span>
            <input
                type="text"
                className="border-none outline-none bg-transparent text-black dark:text-white flex-grow"
                placeholder="Create a new todo..."
                value={text}
                onChange={changeTextHandler}
            />
        </form>
    );
};

export default CreateTodo;
