import RegisterForm from "./RegisterForm";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<RegisterForm/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
