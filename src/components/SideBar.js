import React from 'react';

const SideBar = () => {
  return(
    <div className="sidebar">
      <div className="illustration" style={{backgroundImage: "url('/assets/images/mechanic.jpg')"}}></div>
      <img className="logo" src="/assets/images/logo.svg" alt="le wagon wagon"/>
      <h2>Dave's Cars</h2>
      <p></p>

    </div>
    )
}

export default SideBar;
