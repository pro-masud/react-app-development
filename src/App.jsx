import './App.css';
// import HeadingCSS from './assets/app.module.css';
function App() {
  return (
    <>
      <button onClick={() => alert("One Click")} style={{padding: "20px", backgroundColor:'#000', color:'red', border:"none"}}>Click Me</button>
      <button onDoubleClick={() => alert("double Click")} style={{padding: "20px", backgroundColor:'#000', color:'red', border:"none"}}>Click Me</button>
    </>
  );
}
export default App;