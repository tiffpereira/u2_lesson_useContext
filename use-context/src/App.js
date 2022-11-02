import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC'
import { DataContext } from './DataContext';

function App() {
  const [userInfo, setUserInfo] = useState({
    name: 'Tiffany',
    favColor: 'blue',
    favFood: 'Acai bowls',
    favMovie: 'Mean girls'
  })

  return (
    <div className="App">
      <DataContext.Provider value={{userInfo, setUserInfo}}>
        <ComponentA />                
        <ComponentC />
      </DataContext.Provider>
    </div>
    //we have two consumers wrapped in our provider. 
  );
}

export default App;
