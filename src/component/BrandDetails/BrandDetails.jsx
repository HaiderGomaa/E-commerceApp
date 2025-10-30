import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function BrandDetails() {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getBrandDetails() {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
      setBrand(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading brand details:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getBrandDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!brand) {
    return (
      <div className="text-center py-5 text-muted">
        <h4>Brand not found.</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={brand.image}
            alt={brand.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "250px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-7 mt-4 mt-md-0">
          <h2 className="fw-bold text-primary">{brand.name}</h2>
          <p className="text-muted mt-3">
            {brand.description ||
              "This brand is one of our trusted partners known for high-quality products."}
          </p>
          <p className="text-secondary mt-2">
            ID: <span className="fw-semibold">{brand._id}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
