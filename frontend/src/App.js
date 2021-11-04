import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="http://localhost:8000/pdf" method="POST">
        <input type='text' name='name' placeholder='Your name' />
        <textarea placeholder='Tell me about yourself' name='about'> </textarea>
        <input type='submit' value='Create PDF' />
      </form>
    </div>
  );
}

export default App;
