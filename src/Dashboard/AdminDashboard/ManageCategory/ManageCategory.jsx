const ManageCategory = () => {
  const handleUpdate = () => {
    console.log("update");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div>
      <button
        className="btn btn-success mt-10"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Category
      </button>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Category</h3>
          <input
            type="text"
            placeholder="Category Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick a image</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Add</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Action 1</th>
              <th>Action 2</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>name</td>
              <td>
                <button
                  onClick={handleUpdate}
                  className="btn btn-outline btn-success"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={handleDelete}
                  className="btn btn-outline btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCategory;
