import ClickCounter from "./assets/ClickCounter"
function App() {
  const handleCounterChange = (value) => {
    console.log('Counter changed:', value);
  };
  return (
    <ClickCounter counterChange={handleCounterChange}/>
  )
}

export default App
