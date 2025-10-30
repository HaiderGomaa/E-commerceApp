
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 text-info">About Us</h5>
            <p className="small text-secondary">
              Welcome to <strong>Haider Store</strong> — your trusted destination
              for quality electronics and gadgets at the best prices.
              Delivering innovation and reliability right to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 text-info">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-secondary text-decoration-none d-block mb-2">Home</a></li>
              <li><a href="/shop" className="text-secondary text-decoration-none d-block mb-2">Shop</a></li>
              <li><a href="/categories" className="text-secondary text-decoration-none d-block mb-2">Categories</a></li>
              <li><a href="/contact" className="text-secondary text-decoration-none d-block mb-2">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 text-info">Customer Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">FAQ</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Shipping & Returns</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary text-decoration-none d-block mb-2">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 text-info">Follow Me</h5>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/hidar.gomaa" target="_blank" className="text-light fs-4"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" className="text-light fs-4"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" className="text-light fs-4"><i className="fab fa-instagram"></i></a>
              <a href="https://github.com/HaiderGomaa" target="_blank" className="text-light fs-4"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} <span className="text-info">Haider Gomaa</span> — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
