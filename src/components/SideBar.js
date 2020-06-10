import React from 'react';
import logo from '../images/logo.svg'
import illustration from '../images/mechanic.jpg'

const SideBar = () => {
  return(
    <div className="sidebar">
      <div className="illustration" style={{backgroundImage: `url(${illustration})`}}></div>
      <div className="solid"><img className="logo" src={logo} alt="le wagon wagon"/></div>
      <h2>Dave's Cars</h2>
      <p>Boom, best cars made better at Dave's Cars. We'll get under the hood of your problems and fix them right up.</p>

    </div>
    )
}

export default SideBar;
