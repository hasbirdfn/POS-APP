// component ini untuk menampungn order
import React, { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { getCart, setDetail } from "../features/CartSlice";
import TotalCart from "./TotalCart";
import CartModal from "./CartModal";

const Order = () => {
  const carts = useSelector((state) => state.cart.data);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();
  // inisialisasi modal
  const [modalShow,setModalShow] = React.useState(false);
// untuk loading
useEffect(() => {
  dispatch(getCart())
}, [dispatch]);

  return (
    <>
    <Col md={3} className="mb-5 pb-10">
      <h4>Order List</h4>
      {error ? error : ""} 
      <hr />
     <ListGroup variant="flush">
        {carts ? (
          carts.map((item) => (
            <ListGroup.Item
             variant="flush" 
             key={item.id} 
             style={{cursor: "pointer"}} 
             onClick={() =>{ 
              dispatch(setDetail(item)), setModalShow(true)
              }}>
              <div className="fw-bold">{item.name }</div>
              <div className="d-flex justify-content-between align-item-start">
                <div className="me-auto">
                <small>
                  Rp. {parseInt(item.price).toLocaleString("id-ID")} x{" "}
                  {item.qty}
                </small>
               <p>{item.note}</p>
                </div>
                
                <div>
                <strong>
                <small>
                  Rp. {parseInt(item.price * item.qty).toLocaleString("id-ID")}
                </small>
                </strong>
                </div>
              </div>
            </ListGroup.Item>
           ))
        ): loading ? (
          <p>Loading...</p>
        ) : (
          <p>Silahkan Memilih Menu</p>
        )}
     </ListGroup>
     <TotalCart carts={carts} />
  </Col>
  <CartModal show={modalShow} onHide={() => setModalShow(false)} />
  </>
  )
}

export default Order;