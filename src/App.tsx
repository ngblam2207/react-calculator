import './App.css';
import './theme/global.css'
import Header from './Header';
import Footer from './Footer';
import Body from './Body';




function App() {

  /* All handle functions in utils are defined within a React custom hook
  starting with 'use'. This is required because:
  1. The handle functions require state and dispatch
  2. State and dispatch can be passed by props drilling or by context (currently using this)
  3. By using app context, React Hook "useAppState" and "useAppDispatch" have to be called inside
  a React function component or a custom React Hook function. 
  React component names must start with an uppercase letter. 
  React Hook names must start with the word "use".
  react-hooks/rules-of-hooks
  */
  
  
  return (
    <div className="App">
      <Header />
      
      <Body />

      <Footer />
    </div>
  );
}

export default App;