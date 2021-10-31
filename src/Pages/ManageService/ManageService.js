import axios from 'axios';
import React, { useEffect, useState } from 'react';
const ManageService = () => {
const [allOrder, setAllOrder] = useState([]);
const [special,setSpecial] = useState(true);

// DELETE AN ORDER
const handleDeleteOrder = id => {
  const proceed = window.confirm('Are you sure, you want to delete?');
  if (proceed) {
     axios.delete(`https://shocking-zombie-48437.herokuapp.com/orders/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              alert('deleted successfully');
              const remainingUsers = allOrder.filter(order => order._id !== id);
              setAllOrder(remainingUsers);

          }
          });
  }
}
// DELETE AN ORDER
const handleUpdateOrder = id => {
  const proceed = window.confirm('Are you sure, you want to Approve?');
  if (proceed) {
     axios.put(`https://shocking-zombie-48437.herokuapp.com/orders/${id}`)  
          .then(res => {
              if (res.data.modifiedCount > 0) {
                  alert('Approved successfully');
                  setSpecial(!special);
              }
          });
  }
}
  useEffect(() => {
    axios.get('https://shocking-zombie-48437.herokuapp.com/orders')
      .then(res => {
        setAllOrder(res.data)
      })

  }, [special]);
  return (
    <div className="pb-5">
      <h2 className="my-3 fw-bold">Manage All Services</h2>
      <table className="container table table-light">
        <thead>
          <tr>

            <th scope="col">Service Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">Mobile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allOrder.map(order =>
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td className={ order.orderStatus == "pending" ? "text-danger" : "text-success"}>{order.orderStatus}</td>
                <td>{order.mobile}</td>
                <td>
                <button className={ order.orderStatus == "pending" ? "btn btn-sm btn-success text-white mx-1" : "btn btn-sm btn-success text-white mx-1 disabled"}  onClick={() => handleUpdateOrder(order._id)}>
                  {order.orderStatus === 'pending' ? 'Approve' : 'Approved'}
                </button>
                <button className="btn-danger btn btn-sm"  onClick={() => handleDeleteOrder(order._id)}>X</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageService;