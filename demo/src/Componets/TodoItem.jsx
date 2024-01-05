const TodoItem = ({ input, date, ButtonDeleteClick }) => {
  return (
    <>
      <div>
        <div class="container text-center pt-2 pb-2">
          <div class="row">
            <div class="col">{input}</div>
            <div class="col">{date}</div>
            <div class="col">
              <button className="btn btn-danger " onClick={ButtonDeleteClick}>
                Delete
              </button>
              <button>update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
