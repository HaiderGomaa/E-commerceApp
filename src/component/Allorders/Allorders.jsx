import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Form, Row, Col, Spinner, Badge } from "react-bootstrap";

export default function Allorders() {
  const [orders, setOrders] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch all orders
  useEffect(() => {
    const token = localStorage.getItem("userToken");

    axios
      .get("https://ecommerce.routemisr.com/api/v1/orders", {
        headers: { token },
      })
      .then((res) => {
        // ✅ تحقق إن الاستجابة Array فعلًا
        const data = Array.isArray(res.data) ? res.data : res.data.orders || [];
        setOrders(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setOrders([]);
        setFiltered([]);
        setLoading(false);
      });
  }, []);

  // 🔹 Handle search or filter
  useEffect(() => {
    let result = Array.isArray(orders) ? [...orders] : [];

    if (search.trim() !== "") {
      result = result.filter((o) =>
        o.id?.toString().toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== "All") {
      result = result.filter((o) => o.status === status);
    }

    setFiltered(result);
  }, [search, status, orders]);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-primary">All Orders</h2>

      {/* 🔹 Filters */}
      <Form className="mb-4">
        <Row className="g-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search by Order ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Canceled">Canceled</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      {/* 🔹 Orders Table */}
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : !Array.isArray(filtered) || filtered.length === 0 ? (
        <div className="text-center mt-5 text-muted fs-5">
          No orders found.
        </div>
      ) : (
        <div className="table-responsive shadow-sm rounded">
          <Table bordered hover striped className="align-middle">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order, index) => (
                <tr
                  key={order.id || index}
                  style={{ cursor: "pointer" }}
                  onClick={() => (window.location.href = `/order/${order.id}`)}
                >
                  <td>{index + 1}</td>
                  <td>{order.id}</td>
                  <td>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "—"}
                  </td>
                  <td>
                    <Badge
                      bg={
                        order.status === "Delivered"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {order.status || "Unknown"}
                    </Badge>
                  </td>
                  <td>${order.totalPrice || 0}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}
