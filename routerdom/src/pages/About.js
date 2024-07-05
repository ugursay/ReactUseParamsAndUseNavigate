import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <div>
        <h1>About</h1>
      </div>
      <div>
        <Link style={{ marginRight: "10px" }} to="employee">
          Çalışanlar Hakkında
        </Link>
        <Link to="company">Şirket Hakkında</Link>

        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default About;
