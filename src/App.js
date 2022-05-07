import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './pages/Home';
import WhoAmI from './pages/WhoAmI';
import Showcases from './pages/Showcases';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ToDoList from './pages/ToDoList';

// AuthContext
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user, authIsReady } = useAuthContext();

  if (authIsReady) {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="whoami" element={<WhoAmI />} />
          <Route path="showcases" element={<Showcases />} />
          <Route path="todolist" element={user ? <ToDoList /> : <SignIn />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          {/* Redirect */}
          <Route path="/redirect" element={<Navigate to="/signin" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
