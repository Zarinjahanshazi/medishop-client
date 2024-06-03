const ManageUsers = () => {
    const handleMakeAdmin =() =>{
        console.log('make admin')
    }

    const handleMakeUser =() =>{
        console.log('make user')
    }
    
    const handleMakeSeller =() =>{
        console.log('make seller')
    }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Make Admin</th>
              <th>Make user</th>
              <th>Make Seller</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th></th>
              <th></th>
              <td>
                <button onClick={handleMakeAdmin} className="btn btn-outline btn-success ">
                  Make Admin
                </button>
              </td>
              <td>
                <button onClick={handleMakeUser} className="btn btn-outline btn-warning">
                  Make User
                </button>
              </td>
              <td>
              <button onClick={handleMakeSeller} className="btn btn-outline btn-warning">
                 Make Seller
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
