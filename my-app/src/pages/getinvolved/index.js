import Navbar from "../../comps/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const GetInvolved = () => {
  return (
    <div className="container">
    <div className="subcontainerbg">
      <Navbar />
      <h1>Get Involved</h1>
      <div className="accentedtext">
              <div className="redaccent" />
              <h2>Black-Led Organizations</h2>
      </div>
      <div className={"btncontainer"}>
              <Link to="https://baji.org/">
                <button className={"draw"}>Black Alliance for Just Immigration
</button>
              </Link>
              <Link to="https://colorofchange.org/">
                <button className={"draw"}>Color Of Change
</button>
              </Link>
            </div>
    </div>
  </div>
  );
};

export default GetInvolved;