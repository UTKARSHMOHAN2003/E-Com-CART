import React from "react";

function Nav() {
  return (
    <>
      <div className="nav1">Admin Table</div>
      <div className="subNav">
      <span style={{ boxShadow: "  rgba(0, 0, 0, 0.2) 0px 20px 30px" ,padding: "20px"}}>
          Home
        </span>
        <span style={{ boxShadow: "  rgba(0, 0, 0, 0.2) 0px 20px 30px" ,padding: "20px" }}> Project </span>
        <span style={{ boxShadow: "  rgba(0, 0, 0, 0.2) 0px 20px 30px" ,padding: "20px" }}> About </span>
        <span style={{ boxShadow: "  rgba(0, 0, 0, 0.2) 0px 20px 30px" ,padding: "20px" }}> Code </span>
        <span style={{boxShadow: "  rgba(0, 0, 0, 0.2) 0px 20px 30px"  ,padding: "20px"}}> Contact</span>
      </div>
    </>
  );
}

export default Nav;
