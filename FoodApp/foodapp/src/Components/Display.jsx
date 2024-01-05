const Display = ({ inputValue, handleInput, handleShow }) => {
  return (
    <>
      <div className="d-flex justify-content-center gap-5">
        <input
          className="p-2 mb-1 w-90"
          type="text"
          name=""
          id=""
          placeholder="Enter the Food Items."
          onChange={handleInput}
          value={inputValue}
        />
        <button
          className="btn btn-info text-bg-dark border"
          onClick={handleShow}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Display;
