import './styles.css';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    return (
        <form className='todos-single'>
            <span className='todos-single-text'>{todo.todo}</span>
            <div className='todos-icons'>
                <span className='todos-single-icon'>
                    <AiFillEdit />
                </span>
                <span className='todos-single-icon'>
                    <AiFillDelete />
                </span>
                <span
                    className='todos-single-icon'
                    onClick={() => handleDone(todo.id)}
                >
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
