import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "./CardComponent";
import { getProduct } from "../features/ProductSlice";
import { useEffect } from "react";
import { inputCart, updateCart } from "../features/CartSlice";
import axios from "axios";

const ProductDetail = () => {
  // ambil produk menggunakan redux state management
  const products = useSelector((state) => state.product.data);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();

  // pertama kali load
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // process inputCart, melakukakan pengecekan data
  const setCart = async(product) => {
  const response = await axios.get(`/carts?productId=${product.id}`);
  if (response.data && response.data.length > 0 ) {
    //maka lakukan updateCart
   const orderItem = response.data[0];
     orderItem.qty = parseInt(orderItem.qty) + 1;
    orderItem.totalPrice = parseInt(orderItem.price) * parseInt(orderItem.qty);
    dispatch(updateCart(orderItem));
  } else {
    //maka tambahkan cart, adalah object
    const orderItem = {
      qty:1,
      price: product.price,
      name: product.name,
      description: product.description,
      totalPrice:product.price,
      note:"",
      productId: product.id
    }
    dispatch(inputCart(orderItem));
  }
  }
  
  return (
    <>
    <Col md={7}>
      <h4>Product Detail</h4>
      {error ? error : ""} 
      <hr />
      <Row>
        {products ? (
          products.map((item) => (
            <CardComponent key={item.id} product={item} setCart={setCart}/>
          ))
        ): loading ? <p>Loading...</p>: <p>No Data</p>}
      </Row>
  </Col>
  </>
  )
}

export default ProductDetail


//Menurut aturan React Hooks, semua nilai yang digunakan di dalam useEffect dan berasal dari luar scope harus dimasukkan ke dalam dependency array. Dalam kasus ini, dispatch adalah fungsi dari useDispatch yang dihasilkan oleh Redux dan dianggap sebagai nilai eksternal. Secara teknis, dispatch tidak akan berubah, tetapi untuk menjaga konsistensi dan mengikuti aturan hook, Anda tetap harus mencantumkannya.