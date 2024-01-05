const ListItems = ({ foodList, handleDelete }) => {
  return (
    <>
      <ul class="list-group">
        {foodList.length === 0 ? (
          <h1 className="text-bg-dark m-1  text-center">
            Please Enter the Order Items
          </h1>
        ) : (
          foodList.map((el) => (
            <li class="list-group-item  d-flex justify-content-between align-items-center text-bg-dark m-1 border ">
              {el}{" "}
              <button
                onClick={() => handleDelete(el)}
                className="btn btn-danger "
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
export default ListItems;
