import './App.css';

function App() {
  const [globalTimer, setGlobalTimer] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setGlobalTimer(globalTimer => globalTimer = globalTimer + 1);
    }, 1000);
    return () => window.clearInterval(id);
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
