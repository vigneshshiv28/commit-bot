import logo from './logo.svg';
import CommitForm from './components/CommitForm';
import AutomatedCommitPage from './components/AutomatedCommitPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CommitForm/>} />
          <Route path="/automated-commit" element={<AutomatedCommitPage/>} />
        </Routes>
      </Router>
    );
  
}

export default App;
