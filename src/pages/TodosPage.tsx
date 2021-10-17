import React, {useEffect, useState} from 'react';
import {TodoForm} from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved)
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prev => [newTodo, ...prev])
    };

    const toggleHandler =  (id: number) => {
        const toggledTodo = todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
        })
        setTodos(toggledTodo)
    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Please confirm if you want to delete item?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }

    };
    return <React.Fragment>
        <TodoForm onAdd={addHandler}/>
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    </React.Fragment>
}