import {useState, useCallback} from "react";
import "../src/styles/App.css";
import Welcome from "../src/components/Welcome";
import Outputbox from "./components/Outputbox";
import InputForm from "./components/InputForm";
import { useFetch } from "./custom_hooks/useFetch";

function App() {
  const [seed, setSeed] = useState(null);
  const url = `https://randomuser.me/api/?seed=${seed}`;
  const data = useFetch(url);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setSeed(event.target[0].value);
    },
    [],
  )
  //TYPESCRIPT
  //NODEJS EXPRESS JS
  //HIDE API
  return (
    <div className="container">
      <InputForm handleSubmit={handleSubmit}/>
      {seed === null ? <Welcome /> : <Outputbox usersData={data} />}
    </div>
  );
}
export default App;
