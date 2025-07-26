import '../css/App.css';  
import Login from './components/load Form/Login';
import MessagePopup from './components/MessagePopup';
import { useState } from 'react';
function App() {
    const [showPopup, setShowPopup] = useState({
                                                className: '',
                                                visible: false,
                                                message: ''
                                              });

  return (
    <div className="App">
      {showPopup.visible && <MessagePopup showPopup={showPopup} setShowPopup={setShowPopup} />}
      <Login showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}
export default App;
