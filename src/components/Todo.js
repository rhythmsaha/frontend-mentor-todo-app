import React, { useState } from "react";

const Todo = ({ todo, onDelete, onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(todo?.isCompleted);

    return (
        <div className="w-full flex items-center justify-between p-4 lg:p-6 gap-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700 capitalize">
            <span
                onClick={() => {
                    onComplete(todo.id);
                    setIsCompleted((prev) => !prev);
                }}
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
                        className="w-3 h-3 object-contain"
                    />
                )}
            </span>
            <p
                className={`flex-grow text-xs sm:text-base text-gray-800 dark:text-gray-300 ${
                    isCompleted && "line-through opacity-50"
                }`}
            >
                {todo.todo}
            </p>

            <span
                className="cursor-pointer"
                onClick={onDelete.bind(null, todo.id)}
            >
                <img
                    src="/images/icon-cross.svg"
                    alt=""
                    className="w-4 object-contain"
                />
            </span>
        </div>
    );
};

export default Todo;
