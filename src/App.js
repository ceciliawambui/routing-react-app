import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Button from './components/Button';
import DaysList from './components/DaysList';
import List from './components/List';
import TaskList from './components/TaskList';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import Services from './components/Services';

function App() {
  return (
    <div className="App">
      {/* <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/" className="hover:text-gray-300">MyApp</Link>
          </div>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:bg-blue-500 px-3 py-2 rounded">Home</Link>
            <Link to="/about" className="text-white hover:bg-blue-500 px-3 py-2 rounded">About</Link>
            <Link to="/contact" className="text-white hover:bg-blue-500 px-3 py-2 rounded">Contact</Link>
            <Link to="/projects" className="text-white hover:bg-blue-500 px-3 py-2 rounded">Projects</Link>
            <Link to="/services" className="text-white hover:bg-blue-500 px-3 py-2 rounded">Services</Link>


          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services/*' element={<Services/>} />

      </Routes> */}
      {/* <Button/> */}
      {/* <List/> */}
      {/* <DaysList/> */}
      {/* <TodoList/> */}
      {/* <UserList/> */}
      {/* <TaskList/> */}
      <Todo/>


    </div>
  );
}

export default App;
