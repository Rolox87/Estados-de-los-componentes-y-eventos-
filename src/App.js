import "./Styles.css";
import MyLogin from "./components/Login";
import { Alert } from "./components/Alert";
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState({
    mensaje: "",
    status: ""
  });

  return (
    <div className="App">
      <MyLogin setMessage={setMessage} />
      <Alert mensaje={message.mensaje} status={message.status} />
    </div>
  );
}
