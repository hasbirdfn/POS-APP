import { Card, Col } from "react-bootstrap";
import PropTypes  from "prop-types";

// product ini untuk menampung data produk
// ({product}) diambil dari produkdetail => product={item}
const CardComponent = ({product,setCart}) => {
  return (
    <Col md={4} xs={12} className="mb-4">
        <Card className="shadow" onClick={() => setCart(product)}>
            <Card.Img variant="top" src={"/img/" + product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Rp. {product.price.toLocaleString("id-ID")}</Card.Text>
            </Card.Body>
            
        </Card>
    </Col>
  )
}
// definisikan gambar sebagai object, agar bisa dipanggil hanya 1 kali
CardComponent.propTypes = {
    product: PropTypes.object,
    setCart: PropTypes.func,
}
export default CardComponent

