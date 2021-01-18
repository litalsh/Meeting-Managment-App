import './App.css';

function App() {

  useEffect(() => {
    const id = window.setInterval(() => {
      setTimer(timer => timer = stack[stack.length - 1].duration);
    }, 1000);
    return () => window.clearInterval(id);
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
