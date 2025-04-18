import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; // or free-solid-svg-icons
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Customer = () => {
  return (
   <>
        <div className="row header">
  <div className="col-md-8">
    <h2>User List</h2>
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faHouse} className="me-2" />
      <span>- Contact - User List</span>
    </div>
  </div>
  
  <div className="col-md-4 d-flex justify-content-cent">
    <form className="search-form" role="search">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  </div>
</div>

      <div className="container-fluid">
      <div className="row">
  <div className="col-md-8">
    <div className="media d-flex align-items-center flex-wrap">
    <div class="col-1 col-auto d-flex align-items-center justify-content-center"><i class="bi bi-circle-fill text-danger"></i></div>
      <a className="avatar avatar-lg" href="#">
      <img
  src="https://randomuser.me/api/portraits/men/32.jpg"
  alt="Male Avatar"
  className="rounded-circle mb-2"
  width="60"
  height="60"
/>
      </a>

      <div className="media-body ms-3 flex-grow-1">
        <p>
          <a href="#"><strong>Aaron</strong></a>
          <small className="sidetitle ms-2">Online</small>
        </p>
        <p>Designer</p>
        <nav className="nav mt-2">
          <a className="nav-link" href="#"><i className="bi bi-facebook"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-twitter-x"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-github"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-linkedin"></i></a>
        </nav>
      </div>
      <div className="media-right d-flex gap-3 align-items-center ms-auto">
        <a className="media-action lead" href="#" title="Orders">
          <i className="bi bi-cart"></i>
        </a>
        <a className="media-action lead" href="#" title="Receipts">
          <i className="bi bi-receipt"></i>
        </a>
<div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="media d-flex align-items-center flex-wrap">
    <div class="col-1 col-auto d-flex align-items-center justify-content-center"><i class="bi bi-circle-fill text-warning"></i></div>
      <a className="avatar avatar-lg" href="#">
        <img
          src="https://etikto-admin-dashboard.multipurposethemes.com/bs5/images/avatar/1.jpg"
          alt="Avatar"
          className="rounded-circle mb-2"
          width="60"
          height="60"
        />
      </a>
      <div className="media-body ms-3 flex-grow-1">
        <p>
          <a href="#"><strong>Isaiah</strong></a>
          <small className="sidetitle ms-2">Last seen: 2 hours ago</small>
        </p>
        <p>Full Stack Developer</p>
        <nav className="nav mt-2">
          <a className="nav-link" href="#"><i className="bi bi-facebook"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-twitter-x"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-github"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-linkedin"></i></a>
        </nav>
      </div>
      <div className="media-right d-flex gap-3 align-items-center ms-auto">
        <a className="media-action lead" href="#" title="Orders">
          <i className="bi bi-cart"></i>
        </a>
        <a className="media-action lead" href="#" title="Receipts">
          <i className="bi bi-receipt"></i>
        </a>
        <div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="media d-flex align-items-center flex-wrap">
      <div class="col-1 col-auto d-flex align-items-center justify-content-center"><i class="bi bi-circle-fill text-success"></i></div>
      <a className="avatar avatar-lg" href="#">
      <img
  src="https://etikto-admin-dashboard.multipurposethemes.com/bs5/images/avatar/3.jpg"
  alt="Avatar 3"
  className="rounded-circle mb-2"
  width="60"
  height="60"
/>
      </a>

      <div className="media-body ms-3 flex-grow-1">
        <p>
          <a href="#"><strong>Cameron</strong></a>
          <small className="sidetitle ms-2">Last seen: 12 min ago</small>
        </p>
        <p>Support Agent</p>
        <nav className="nav mt-2">
          <a className="nav-link" href="#"><i className="bi bi-facebook"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-twitter-x"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-github"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-linkedin"></i></a>
        </nav>
      </div>
      <div className="media-right d-flex gap-3 align-items-center ms-auto">
        <a className="media-action lead" href="#" title="Orders">
          <i className="bi bi-cart"></i>
        </a>
        <a className="media-action lead" href="#" title="Receipts">
          <i className="bi bi-receipt"></i>
        </a>
        <div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="media d-flex align-items-center flex-wrap">
      <div class="col-1 col-auto d-flex align-items-center justify-content-center"><i class="bi bi-circle-fill text-danger"></i></div>
      <a className="avatar avatar-lg" href="#">
      <img
  src="https://etikto-admin-dashboard.multipurposethemes.com/bs5/images/avatar/2.jpg"
  alt="Avatar 2"
  className="rounded-circle mb-2"
  width="60"
  height="60"
/>
      </a>
      <div className="media-body ms-3 flex-grow-1">
        <p>
          <a href="#"><strong>Eli</strong></a>
          <small className="sidetitle ms-2">Online</small>
        </p>
        <p>Support Agent</p>
        <nav className="nav mt-2">
          <a className="nav-link" href="#"><i className="bi bi-facebook"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-twitter-x"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-github"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-linkedin"></i></a>
        </nav>
      </div>
      <div className="media-right d-flex gap-3 align-items-center ms-auto">
        <a className="media-action lead" href="#" title="Orders">
          <i className="bi bi-cart"></i>
        </a>
        <a className="media-action lead" href="#" title="Receipts">
          <i className="bi bi-receipt"></i>
        </a>
        <div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="media d-flex align-items-center flex-wrap">
      <div class="col-1 col-auto d-flex align-items-center justify-content-center"><i class="bi bi-circle-fill text-success"></i></div>
      <a className="avatar avatar-lg" href="#">
      <img
  src="https://etikto-admin-dashboard.multipurposethemes.com/bs5/images/avatar/4.jpg"
  alt="Avatar 4"
  className="rounded-circle mb-2"
  width="60"
  height="60"
/>
      </a>
      <div className="media-body ms-3 flex-grow-1">
        <p>
          <a href="#">
          <strong>Charles</strong>
          </a>
          <small className="sidetitle ms-2">Last seen: yesterday</small>
        </p>
        <p>Marketing Department</p>
        <nav className="nav mt-2">
          <a className="nav-link" href="#"><i className="bi bi-facebook"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-twitter-x"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-github"></i></a>
          <a className="nav-link" href="#"><i className="bi bi-linkedin"></i></a>
        </nav>
      </div>
      <div className="media-right d-flex gap-3 align-items-center ms-auto">
        <a className="media-action lead" href="#" title="Orders">
          <i className="bi bi-cart"></i>
        </a>
        <a className="media-action lead" href="#" title="Receipts">
          <i className="bi bi-receipt"></i>
        </a>
        <div className="dropdown">
          <a className="media-action lead" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
        </div>
      </div>
      </div>
  </div>
  <div className="col-4">
  <button type="button" className="btn-custom success">Offline</button>
<button type="button" className="btn-custom danger">Online</button>
<button type="button" className="btn-custom primary">Available</button>
<button type="button" className="btn-custom info">Private</button>
  <button type="button" className="btn btn-warning">All Contact</button>
  <button type="button" className="btn btn-success">Add New Contact</button>
    </div>
  </div> 
</div>
   </>
  );
};

export default Customer;
