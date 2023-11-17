import './App.css';
// import HeadingCSS from './assets/app.module.css';
function App() {
  const isPass = true;
  return (
    <>
      {isPass === true ? <h2 style={{color: 'green', fontSize :'40px'}}> True </h2 > : <h2 style={{color: 'red', fontSize :'40px'}}>False</h2>}
    </>
  );
}
export default App;