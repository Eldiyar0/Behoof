import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Productse: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  function Product() {
    navigate(`/Pro`); // Use navigate to navigate to /Pro route
  }

  return (
    <div className="btns">
      <button onClick={Product}>add</button>
    </div>
  );
};

export default Productse;
