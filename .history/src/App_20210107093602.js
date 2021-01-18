import './App.css';

function App() {
  const [globalTimer, setGlobalTimer] = useState(0);

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
