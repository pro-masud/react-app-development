import './App.css';
// import HeadingCSS from './assets/app.module.css';
function App() {
  const foods = ['alo', 'potol', 'lao', 'kumra', 'apple'];
  return (
    <>
      <ul>
        {foods.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;