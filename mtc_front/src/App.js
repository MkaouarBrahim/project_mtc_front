import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './composents/SignIn';
import SignUp from './composents/SignUp';

function App() {
 /* return (
    <div className="App">
      {/* <Signup/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}*/

export default App;

