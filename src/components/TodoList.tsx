import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className='todos'>
            {todos.map((todo) => (
                <SingleTodo
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                />
            ))}
        </div>
    );
};

export default TodoList;
