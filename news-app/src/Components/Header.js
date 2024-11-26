import React from 'react';

const Header = ({setCategory}) => {
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NEWS APP</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <div class="nav-link" onClick={() => setCategory ("technology")}>technology</div> 
      <div class="nav-link">Indonesia</div>  
    </div>
  </div>
</nav>
    )
}

export default Header