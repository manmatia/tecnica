import './NavBar.css';

function NavBar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-white mt20">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img style={{ height: '50px', width: '50px' }} src="https://logopond.com/logos/7e0167b70fffba2638bc6f5984af1646.png"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text" href="#">Pages⬇
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text" href="#">Packages</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text" href="#">Cart[0]</a>
                </li>
              </ul>
              <div className="d-flex">
              <button className="custom-button text" type="submit">Free Consultation ➡️</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default NavBar;
  