import './App.css';

//Components
import Window from './Components/Window'

function App() {
  useEffect(() => {
    document.title = "Bernard Muller"
  }, []);
  return (
    <div className="app">
      <Window />
      
    </div>
  );
}

export default App;
