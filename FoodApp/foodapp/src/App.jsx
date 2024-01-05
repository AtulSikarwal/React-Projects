import { useState } from "react";
import Display from "./Components/Display";
import ListItems from "./Components/ListItems";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [show, dataShow] = useState([]);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleShow = () => {
    let data = [...show, inputValue];
    dataShow(data);
  };
  const handleDelete = (el) => {
    const deletebutton = show.filter((item) => item !== el);
    dataShow(deletebutton);
  };
  return (
    <div className="App">
      <div className="container-sm border mt-5 p-5 bg-dark">
        <h1 className="text-white text-center">Food APP</h1>
        <Display
          handleInput={handleInput}
          inputValue={inputValue}
          handleShow={handleShow}
        />
        <ListItems foodList={show} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
