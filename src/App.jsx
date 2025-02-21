import { useState } from "react";
import { Header, LoginForm } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
