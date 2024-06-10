import { FaEye } from "react-icons/fa6";
import { GrCheckboxSelected } from "react-icons/gr";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const Shop = () => {
  const axiosPublic = useAxiosPublic();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");

  const { data: getData = {} } = useQuery({
    queryKey: ["getData", page, limit, sort, search],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/categories?page=${page}&limit=${limit}&sort=${sort}&search=${search}`);
      return data;
    },
  });

  const { setAddMedicine, addMedicine } = useContext(AuthContext);
  const [currentItem, setCurrentItem] = useState(null);

  const handleOpenModal = (item) => {
    setCurrentItem(item);
    document.getElementById("my_modal_1").showModal();
  };

  const handleAddMedicine = (item) => {
    const isExist = addMedicine.find(i => i._id === item._id);
    if (!isExist) {
      item.quanty = 1;
      item.totalPrice = parseFloat(item.price_per_unit * item.quanty).toFixed(2);
      setAddMedicine([...addMedicine, item]);
    } else {
      isExist.quanty += 1;
      item.totalPrice = parseFloat(item.price_per_unit * isExist.quanty).toFixed(2);
      setAddMedicine([...addMedicine]);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-4">
      <Helmet>
        <title>Medi-Shop|Shop</title>
      </Helmet>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">Shop</h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between my-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          className="input input-bordered"
        />
        <select value={sort} onChange={handleSortChange} className="select select-bordered">
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </select>
        <select value={limit} onChange={handleLimitChange} className="select select-bordered">
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="20">20 per page</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Action 1</th>
              <th>Action 2</th>
            </tr>
          </thead>
          <tbody>
            {getData?.categories?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.medicine_name}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={() => handleAddMedicine(item)} className="btn bg-orange-500 btn-lg">
                    <h2 className="text-white text-2xl">
                      <GrCheckboxSelected />
                    </h2>
                  </button>
                </td>
                <td>
                  <button
                    className="btn bg-orange-500 btn-ghost btn-lg"
                    onClick={() => handleOpenModal(item)}
                  >
                    <h2 className="text-white text-2xl">
                      <FaEye />
                    </h2>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between my-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="btn btn-secondary"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={getData?.categories?.length < limit}
          className="btn btn-secondary"
        >
          Next
        </button>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {currentItem && (
            <>
              <h3 className="font-bold text-lg">{currentItem.medicine_name}</h3>
              <p className="py-4">Category: {currentItem.category}</p>
              <p className="py-4">Company: {currentItem.company_name}</p>
              <p className="py-4">Price: ${currentItem.price_per_unit}</p>
              <p className="py-4">Description: {currentItem.description}</p>
              <p className="py-4">Discount: {currentItem.discount}%</p>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Shop;