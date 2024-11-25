import { Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from "react-redux";
import { categorySelectors, getAllCategory } from "../features/CategorySlice";
import { useEffect, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCakeSlice } from "react-icons/lu";
import { getProduct, getProductByCategory } from "../features/ProductSlice";

const Category = () => {
   //useSelector digunakan untuk mengambil data dari Redux store, dan useDispatch digunakan untuk mengirimkan aksi Redux (getProduct, getProductByCategory).
  const dispatch = useDispatch(); // pengambilan data category menggunakan dispatch
  const category = useSelector(categorySelectors.selectAll); // mengambil semua data category 
  const [loading, setLoading] = useState(true); 
  
  // Loading data
  useEffect(() => {
    dispatch(getAllCategory()).finally(() => setLoading(false));
  }, [dispatch]);

  // setActive List
  function setActive(elem) {
    let a = document.getElementsByClassName('active'); 
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove('active'); 
    }
    elem.classList.add('active'); 
  }

  // reusahble code setIcon
  // setIcon berdasarkan Id
  const setIcon = (categori) => {
    if(categori === 1) {
      return <FaUtensils />
    } else if (categori === 2) {
      return <CiCoffeeCup />
    } else {
      return <LuCakeSlice />
    }
  }

  // showAll sidebar reload menampilkan gambar pada saat diklik 
  const showAll = () => {
    dispatch(getProduct());
  }

  // show berdasarkan category, menggunakan id
  const categoryClicked = (id) => {
    dispatch(getProductByCategory(id));
  }

return (
    <>
      <Col md={2}>
        <h4>Produk Category</h4>
        <p>{loading ? "loading..." : ""}</p>
        <hr />
        <ListGroup key="all001">
          <ListGroup.Item id={`all001`} className="mb-1 shadow-sm" 
          active action onClick={() => {setActive(document.getElementById('all001')), showAll()}}><MdFastfood /> All Products
          </ListGroup.Item>
        </ListGroup>

        {category && category.map((item) =>  (
          <ListGroup key={item.id}>
            <ListGroup.Item 
              id={`key${item.id}`}
              className="mb-1 shadow-sm"
              action onClick={() => {setActive(document.getElementById(`key${item.id}`)), categoryClicked(item.id);
            }}
            >
            {setIcon(item.id)} {item.name} 
            </ListGroup.Item>
          </ListGroup>
        ))}    
      </Col>
    </>
  );
}

export default Category;
