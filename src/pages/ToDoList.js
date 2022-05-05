import { useCollection } from '../hooks/useCollection';
import Navbar from '../components/Navbar';
import TodoListContainer from '../components/TodoListContainer';

export default function ToDoList() {
  return (
    <>
      <Navbar />
      <TodoListContainer></TodoListContainer>
    </>
  );
}
