import React from 'react';

const Navbar = (props) => {

  return (
    <header className='position-sticky top-0 z-1'>
      {/* <!-- Fixed navbar --> */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">My Movies</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">About</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.inputHandler} />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );



  // return (
  //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow position-sticky top-0 z-1">
  //     <div className="container-fluid">
  //       <i className="bi bi-film fs-4 text-light me-3"></i>
  //       <a className="navbar-brand text-light fw-bold" href="/">MyMovie</a>
  //       <button
  //         className="navbar-toggler collapsed"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#burger"
  //         type="button"
  //         aria-expanded="false">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="navbar-collapse d-flex justify-content-between collapse show flex-md-column flex-sm-column flex-column flex-lg-row gap-lg-0 gap-md-2 gap-sm-2 gap-2" id="burger">
  //         <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-md-row justify-content-md-around flex-sm-row justify-content-sm-around flex-row justify-content-around gap-2">
  //           <li className="nav-item">
  //             <a className="nav-link text-light" href="/">Home</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link text-light" href="#!">About</a>
  //           </li>
  //           {/* <li className="nav-item">
  //             <a className="nav-link text-light" href="#!">Git</a>
  //           </li> */}
  //         </ul>

  //         <form className="row col-12 col-lg-4 col-md-10 col-sm-8 me-lg-1" action="#!" role="search">
  //           <input className="form-control  mb-lg-0 mb-md-2 mb-sm-2 mb-2" type="search" placeholder="Search here..." />
  //         </form>
  //       </div>
  //       {/* <button className="btn btn-outline-success me-2" type="submit" onclick="getUser()">Search</button>
  //         <button className="btn btn-outline-primary" type="submit" onclick="getRepo()">Repo</button> */}
  //     </div>

  //   </nav>
  // );
};

export default Navbar;