import React, { useEffect, useLayoutEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [mode, setMode] = useState("all");

    useEffect(() => {
        window.localStorage.setItem(
            "todos",
            JSON.stringify([
                {
                    id: "iddad95f396428e",
                    isCompleted: true,
                    todo: "complete online javascript course",
                    order: "2022-05-21T19:39:05.479Z",
                },
                {
                    id: "id99ab11c546497",
                    isCompleted: false,
                    todo: "jog around the park 3x",
                    order: "2022-05-21T19:35:08.577Z",
                },
                {
                    id: "idd9150e2f9f5f6",
                    isCompleted: false,
                    todo: "10 minutes meditation",
                    order: "2022-05-21T19:35:15.717Z",
                },
                {
                    id: "id94c875a8ec945",
                    isCompleted: false,
                    todo: "read for 1 hour",
                    order: "2022-05-21T19:35:22.299Z",
                },
                {
                    id: "ide1ae2558e6f02",
                    isCompleted: false,
                    todo: "pick up groceries",
                    order: "2022-05-21T19:35:27.155Z",
                },
                {
                    id: "id686b023a1ad08",
                    isCompleted: false,
                    todo: "complete todo app on frontend mentor",
                    order: "2022-05-21T19:35:36.978Z",
                },
            ])
        );
    }, []);

    useEffect(() => {
        if (mode === "all") {
            getAllTodos();
        }

        if (mode === "completed") {
            getCompletedTodos();
        }

        if (mode === "active") {
            getActiveTodos();
        }

        return;
    }, [mode]);

    const changeModeHandler = (e) => {
        setMode(e.target.value);
    };

    const getAllTodos = () => {
        const getTodos = window.localStorage.getItem("todos");
        if (!getTodos) return;
        const allTodos = JSON.parse(getTodos);
        setTodos([...allTodos]);
    };

    const getCompletedTodos = () => {
        const getTodos = window.localStorage.getItem("todos");
        if (!getTodos) return;
        const allTodos = JSON.parse(getTodos);
        const completedTodos = allTodos.filter(
            (todo) => todo.isCompleted === true
        );
        setTodos([...completedTodos]);
    };

    const getActiveTodos = () => {
        const getTodos = window.localStorage.getItem("todos");
        if (!getTodos) return;
        const allTodos = JSON.parse(getTodos);
        const activeTodos = allTodos.filter(
            (todo) => todo.isCompleted !== true
        );
        setTodos([...activeTodos]);
    };

    const addTodo = (todo) => {
        const newTodos = [...todos, todo];
        window.localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos([...newTodos]);
    };

    const removeTodo = (id) => {
        const tempTodos = [...todos];
        const deletedTodo = tempTodos.filter((todo) => todo.id !== id);
        window.localStorage.setItem("todos", JSON.stringify(deletedTodo));
        setTodos([...deletedTodo]);
    };

    const clearCompleted = () => {
        const tempTodos = [...todos];
        const filtered = tempTodos.filter((todo) => todo.isCompleted !== true);
        window.localStorage.setItem("todos", JSON.stringify(filtered));
        setTodos([...filtered]);
    };

    const toggleCompleteHandler = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        if (todoIndex < 0) return;

        const tempTodos = [...todos];
        tempTodos[todoIndex].isCompleted = !tempTodos[todoIndex].isCompleted;
        window.localStorage.setItem("todos", JSON.stringify(tempTodos));

        setTodos([...tempTodos]);
    };

    return (
        <main className="select-none min-h-screen bg-gray-50 bg-bg-light-mobile lg:bg-bg-light dark:bg-bg-dark-mobile sm:dark:bg-bg-dark dark:bg-gray-900 bg-no-repeat bg-contain">
            <div className="max-w-2xl mx-auto w-11/12">
                <Header />

                <div className="mt-4 space-y-4">
                    <CreateTodo onSubmit={addTodo} />

                    <Todos
                        mode={mode}
                        todos={todos}
                        onDelete={removeTodo}
                        onClear={clearCompleted}
                        onComplete={toggleCompleteHandler}
                        changeModeHandler={changeModeHandler}
                    />

                    <div className="bg-white dark:bg-gray-800 text-sm shadow-2xl flex items-center justify-center p-4 gap-4 rounded-lg lg:hidden">
                        <button
                            onClick={changeModeHandler}
                            value="all"
                            className={`font-semibold ${
                                mode === "all"
                                    ? "text-blue-500"
                                    : "text-gray-500"
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
                </div>
            </div>

            <p className="text-gray-500 font-medium text-center text-sm lg:text-base mt-10">
                Drag and drop to reorder list
            </p>
        </main>
    );
};

export default App;
