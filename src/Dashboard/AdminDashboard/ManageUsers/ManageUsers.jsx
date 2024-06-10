import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ManageUsers = () => {
  const { refetch, data: userData = [] } = useQuery({
    queryKey: ['users',],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/users`, {
        headers: { Authorization: localStorage.getItem('accessToken') }
      });
      return res.data;
    },

  })
  console.log(userData);


  const handeRoleChange = async (data) => {
    const updateData = {
      role: data.role
    }
    const res = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/users/${data.id}`, updateData, {
      headers: { Authorization: localStorage.getItem('accessToken') }
    })
    console.log(res);
    if (res) {
      refetch()
    }
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
              <th>Status</th>
              <th>Make Admin</th>
              <th>Make user</th>
              <th>Make Seller</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              userData?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{item.email}</th>
                  <th>{item.role}</th>
                  <td>
                    {
                      item.role !== 'admin' ? <button onClick={() => handeRoleChange({ id: item._id, role: 'admin' })} className={`btn btn-outline btn-success `}

                      >
                        Make Admin

                      </button>
                        :
                        <button disabled className="btn btn-outline ">Make Admin</button>
                    }
                  </td>
                  <td>
                    {
                      item.role !== 'user' ? <button onClick={() => handeRoleChange({ id: item._id, role: 'user' })} className="btn btn-outline btn-warning">
                        Make User
                      </button>
                        :
                        <button disabled className="btn btn-outline ">Make user</button>
                    }
                  </td>
                  <td>
                    {
                      item.role !== 'seller' ? <button onClick={() => handeRoleChange({ id: item._id, role: 'seller' })} className="btn btn-outline btn-warning">
                        Make Seller
                      </button>
                        :
                        <button disabled className="btn btn-outline ">Make user</button>
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;