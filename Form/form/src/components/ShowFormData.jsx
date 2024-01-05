const ShowData = ({ displayData, handleDelete }) => {
  return (
    <>
      {displayData.length === 0 ? (
        <h1>Please Enter Name and Password</h1>
      ) : (
        displayData.map((el) => (
          <div className="d-flex justify-content-center gap-4">
            <h3>
              Name:{el.name} Password:{el.pass}
            </h3>
            <button onClick={() => handleDelete(el)} className="btn btn-danger">
              Delete
            </button>
          </div>
        ))
      )}
    </>
  );
};
export default ShowData;
