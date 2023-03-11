import './App.css';
import Result from './components/Result/Result.jsx';
import Navbar from './components/Navbar/Navbar';
import ImageForm from './components/ImageForm/ImageForm';
import { useState } from 'react';

const App = () => {

  const [bwImg, setBwImg] = useState(null);
  const [cImg, setCImg] = useState(null);

  return (
    <div className="App">
      <Navbar/>
      <Result state = {{bwImg, cImg}} />
      <ImageForm state = {{setBwImg, setCImg}}/>
    </div>
  );
}

export default App;
