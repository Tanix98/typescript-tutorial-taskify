/*
// Define variable types
let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let personName: unknown;

let printName: (name: string) => never;

//function printName(name: string) {
  //console.log(name);
//}

//printName("heysdsa");

//type Person = {
  //name: string;
  //age?: number;
//};

//let person: Person = {
  //name: "sda",
//};

//let lotsOfPeople: Person[];


// type & interface

type XX = {
  a: string;
  b: number;
}

interface Persona extends XX {
  name: string;
  age?: number;
}

interface Person {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

type X = {
  a: string;
  b: number;
};

type Y = {
  c: string;
  d: number;
};

let y: Y = {
  c: "sdaasd",
  d: 3,
};*/

import './App.css';
import { useState } from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo('');
        }
    };

    console.log(todos);

    return (
        <div className='App'>
            <span className='heading'>Taskify</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
