import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  // DELETE AN ORDER
  const handleDeleteOrder = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
       axios.delete(`https://shocking-zombie-48437.herokuapp.com/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUsers = orders.filter(order => order._id !== id);
                    setOrders(remainingUsers);
                }
            });
    }
}
  useEffect(() => {
    axios.get(`https://shocking-zombie-48437.herokuapp.com/myOrders/${user.uid}`)
      .then(res => {
        setOrders(res.data)
      })

  }, []);
  return (
    <div className="p-5">
      <h2 className="text-warning my-5">My Orders</h2>
      <table className="container table table-light">
        <thead>
          <tr>

            <th scope="col">Service Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {
            orders.map( order =>
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.orderStatus}</td>
                <td><button className="btn-danger btn btn-sm" onClick={() => handleDeleteOrder(order._id)}>X</button></td>
              </tr>
              
            )
          }
        </tbody>


      </table>
    </div>


  );
};

export default MyOrders;