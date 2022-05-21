import Todo from "./Todo";

const Todos = ({
    todos,
    onDelete,
    onClear,
    onComplete,
    changeModeHandler,
    mode,
}) => {
    const calculatedLeft = () => {
        const tempTodos = [...todos];
        const filter = tempTodos.filter((todo) => todo.isCompleted !== true);
        return filter.length;
    };

    return (
        <div className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 ">
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onComplete={onComplete}
                />
            ))}

            <div className="flex justify-between p-4 lg:p-6 text-gray-500 text-sm">
                <p className="cursor-default">{calculatedLeft()} items left</p>

                <div className="hidden lg:flex items-center justify-center gap-4">
                    <button
                        onClick={changeModeHandler}
                        value="all"
                        className={`font-semibold ${
                            mode === "all" ? "text-blue-500" : "text-gray-500"
                        }`}
                    >
                        All
                    </button>
                    <button
                        className={`font-semibold ${
                            mode === "active"
                                ? "text-blue-500"
                                : "text-gray-500"
                        }`}
                        onClick={changeModeHandler}
                        value="active"
                    >
                        Active
                    </button>
                    <button
                        onClick={changeModeHandler}
                        value="completed"
                        className={`font-semibold ${
                            mode === "completed"
                                ? "text-blue-500"
                                : "text-gray-500"
                        }`}
                    >
                        Completed
                    </button>
                </div>

                <button className="cursor-pointer" onClick={onClear}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default Todos;
