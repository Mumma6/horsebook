import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing container">
      <div className="jumbotron">
        <h1 className="display-4">Horsebook!</h1>
        <p className="lead">
          Horsebook är sidan för dig som gillar allt som har med hästar att göra. Håll koll på dina träningspass.
        </p>
        <hr className="my-4" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus deleniti reiciendis, fugiat numquam, nihil deserunt minima itaque non officia sapiente ducimus quidem quaerat ab! Facere accusamus laboriosam cupiditate sapiente enim?
        </p>
        <div className="landing-btn">
          <Link className="btn btn-success btn-lg" to="/register" role="button">
            Registrera
          </Link>
          <Link className="btn btn-success btn-lg" to="/login" role="button">
            Logga in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
