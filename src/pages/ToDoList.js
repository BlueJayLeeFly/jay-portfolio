import { useCollection } from '../hooks/useCollection';
import Navbar from '../components/Navbar';

export default function ToDoList() {
  const { documents: todos } = useCollection('todolist');
  console.log(todos);
  return (
    <>
      <Navbar />
      {todos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
