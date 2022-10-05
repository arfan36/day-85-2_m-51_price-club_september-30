import './App.css';
import AssignmentMark from './components/AssignmentMark/AssignmentMark';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold underline'>This is a big big header</h1>
      <p>This is just a paragraph</p>
      <Pricing></Pricing>
      <AssignmentMark></AssignmentMark>
    </div>
  );
}

export default App;
