import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function getBrands() {
    try {
      const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
      setBrands(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading brands:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Explore Our Brands</h2>

      {/* Search Bar */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Search brand by name..."
            className="form-control form-control-lg shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : filteredBrands.length > 0 ? (
        <div className="row g-4">
          {filteredBrands.map((brand) => (
            <div key={brand._id} className="col-6 col-md-4 col-lg-3">
              <Link
                to={`/brand/${brand._id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card border-0 shadow-sm text-center h-100">
                  <div className="card-body">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="img-fluid mb-3 rounded"
                      style={{ height: "120px", objectFit: "contain" }}
                    />
                    <h6 className="fw-semibold text-secondary">{brand.name}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted py-5">
          <p>No brands found for `{search}`</p>
        </div>
      )}
    </div>
  );
}
