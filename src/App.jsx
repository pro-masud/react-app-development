import './App.css';
// import HeadingCSS from './assets/app.module.css';
function App() {
  const  handleButton = () => {
    alert('Hello World');
  };

  return (
    <>
      <button onClick={() => handleButton()} style={{padding: "20px", backgroundColor:'#000', color:'red', border:"none"}}>Click Me</button>
    </>
  );
}
export default App;