import { useState } from 'react';
import './App.css';

export default function App() {
  const [off, setOff] = useState(true);

  const toggleBulb = () => {
    setOff(prev => !prev);
  };

  return (
    <div>
    <header className={off ? 'header-off' : 'header-on'}>
  <h1>Button App</h1>
</header>
    <div className={`main-container ${off ? 'off' : 'on'}`}>
      <div className="bulb-box">
        <img
          className="bulb-image"
          src={
            off
              ? 'https://i.postimg.cc/tCXhLZTm/off.png'
              : 'https://i.postimg.cc/5yrkkBVT/on.png'
          }
          alt="Bulb"
        />

        <button className="bulb-toggle" onClick={toggleBulb}>
          {off ? 'Turn On' : 'Turn Off'}
        </button>
      </div>
    </div>
  </div>  
  );
}