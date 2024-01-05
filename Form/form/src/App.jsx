import { useRef, useState } from "react";
import FormEntry from "./components/Forms";
import ShowData from "./components/ShowFormData";
function App() {
  let inputName = useRef();
  let passwordValue = useRef();
  const [displayData, setDisplayData] = useState([]);
  const onSubmitValue = (e) => {
    e.preventDefault();

    const result = {
      name: inputName.current.value,
      pass: passwordValue.current.value,
    };

    setDisplayData([...displayData, result]);

    inputName.current.value = "";
    passwordValue.current.value = "";
  };
  const handleDelete = (el) => {
    const final = displayData.filter((item) => el !== item);
    setDisplayData(final);
  };

  return (
    <div className="App">
      <div className="container-sm w-50 border p-5 mt-5 bg-dark text-white">
        <h1>FORM USING useRef</h1>
        <FormEntry
          inputName={inputName}
          passwordValue={passwordValue}
          onSubmitValue={onSubmitValue}
        />
      </div>
      <div className="container-sm w-50 border p-5 mt-2 bg-dark text-white">
        <ShowData displayData={displayData} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
