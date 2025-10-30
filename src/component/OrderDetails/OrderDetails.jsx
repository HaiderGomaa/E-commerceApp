import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner, Card, Row, Col, Badge } from "react-bootstrap";

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/${id}`, {
        headers: { token },
      })
      .then((res) => {
        setOrder(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  if (!order)
    return (
      <div className="text-center py-5 text-muted fs-5">
        Order not found.
      </div>
    );

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4 fw-bold">
        Order Details #{order.id}
      </h2>

      <div className="mb-4">
        <h5>
          Status:{" "}
          <Badge
            bg={
              order.status === "Delivered"
                ? "success"
                : order.status === "Pending"
                ? "warning"
                : "danger"
            }
          >
            {order.status}
          </Badge>
        </h5>
        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
        <p>Total Price: <strong>${order.totalPrice}</strong></p>
      </div>

      <h4 className="mb-3">Products</h4>
      <Row className="g-3">
        {order.cartItems?.map((item) => (
          <Col md={6} lg={4} key={item._id}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={item.product?.imageCover}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.product?.title}</Card.Title>
                <Card.Text>
                  Quantity: {item.count} <br />
                  Price: ${item.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
