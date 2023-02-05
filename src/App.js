import './App.css';
import { useState, useEffect } from 'react';
import Supportive from './components/supportive';
import NotSupportive from './components/notSupportive';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {width > 1000 ? <Supportive /> : <NotSupportive />}
    </div>
  );
}

export default App;
