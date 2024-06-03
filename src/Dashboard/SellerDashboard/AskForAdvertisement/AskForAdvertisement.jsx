const AskForAdvertisement = () => {
  return (
    <div>
      <button
        className="btn btn-success mt-10"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        add advertise
      </button>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Description</h3>
          <input
            type="text"
            placeholder="description"
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

      {/* table */}

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>image</th>
        <th>Description</th>
        <th>Status</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          index
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        
        <td>Purple</td>
        <th>
        <button className="btn btn-success">selected/not selected</button>
        </th>
      </tr>
     
    </tbody>
    
    
  </table>
</div>
    </div>
  );
};

export default AskForAdvertisement;
