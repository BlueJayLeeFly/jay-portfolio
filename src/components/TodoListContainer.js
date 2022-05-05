import { useState } from 'react';
import { useCollection } from '../hooks/useCollection';
import styles from './TodoListContainer.module.css';
import CheckIcon from '../assets/progress-2';
import { ReactComponent as TodoImage } from '../assets/todo.svg';
import Cadd from '../assets/c-add';
import ClearData from '../assets/clear-data';

//firebase imports
import { db } from '../firebase/config';
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore';

export default function TodoListContainer() {
  const { documents: todos } = useCollection('todolist');
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ref = collection(db, 'todolist');

    await addDoc(ref, {
      title: newTodo,
    });

    setNewTodo('');
  };

  const handleRemoveClick = async (id) => {
    const docRef = doc(db, 'todolist', id);
    await deleteDoc(docRef);
  };

  return (
    <div className={styles['todo-app-container']}>
      <div className={styles['todo-top-bar']}>
        <CheckIcon />
        <span>To Do List</span>
      </div>
      <div className={styles['todo-list-container']}>
        <div className={styles['todo-left']}>
          <TodoImage />
          <h4>
            {todos &&
              `You have ${todos.length} ${todos.length > 1 ? 'tasks' : 'task'}`}
          </h4>
        </div>
        <div className={styles['todo-center']}>
          <h3>Hello Jay!</h3>
          {todos && (
            <ul>
              {todos.map((todo) => (
                <li key={todo.id} onClick={() => handleRemoveClick(todo.id)}>
                  {todo.title}
                </li>
              ))}
            </ul>
          )}
          <form onSubmit={handleSubmit}>
            <label>
              <input
                required
                type="text"
                placeholder="+ Add task"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
                className={styles['add-task-input']}
              />
            </label>
            {newTodo && (
              <>
                <button type="submit" className={styles['task-form-btn']}>
                  <Cadd />
                </button>
                <button
                  className={styles['task-form-btn']}
                  onClick={() => setNewTodo('')}
                >
                  <ClearData />
                </button>
              </>
            )}
          </form>
        </div>
        <div className={styles['todo-right']}>1</div>
      </div>
    </div>
  );
}
