

const ManageMedicines = () => {
    return (
        <div>
            <button
        className="btn btn-success mt-10"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Medicine
      </button>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Medicine</h3>
          <input
            type="text"
            placeholder="Item Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Item Generic Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Short Description"
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
          {/* category */}
          <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select defaultValue="default"
                
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="tablet">tablet</option>
                <option value="syrup">syrup</option>
                <option value="capsule">capsule</option>
                <option value="injection">injection</option>
                <option value="ointment">ointment</option>
                <option value="inheler">inheler</option>
              </select>
            </label>
            {/* company */}
          <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Company</span>
              </div>
              <select defaultValue="default"
                
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a Company
                </option>
                <option value="ThyroHealth">ThyroHealth</option>
                <option value="CardioLife">CardioLife</option>
                <option value="RespiraCare">RespiraCare</option>
                <option value="AntiBac">AntiBac</option>
                <option value="ThromboSafe">ThromboSafe</option>
                <option value="MentalWell">MentalWell</option>
              </select>
            </label>
            <input
            type="text"
            placeholder="Item Mass Unit"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="form-control  my-6">
                  <input
                    type="number"
                    placeholder="price per unit"
                    className="input input-bordered  "
                  />
                </label>
          <label className="form-control  my-6">
                  <input
                    type="number"
                    placeholder="discount percentage"
                    className="input input-bordered  "
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
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageMedicines;