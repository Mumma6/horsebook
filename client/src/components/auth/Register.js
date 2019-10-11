import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const [errors, setErrors] = useState({});

  const onChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      password2: user.password2
    };

    console.log(newUser);
  };

  return (
    <div className="container register-main">
      <h2>Registrera dig här</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Namn</label>
          <input
            error={errors.name}
            id="name"
            value={user.name}
            onChange={onChange}
            type="text"
            className="form-control"
            placeholder="Namn"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            error={errors.email}
            id="email"
            value={user.email}
            onChange={onChange}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Lösenord</label>
          <input
            error={errors.password}
            id="password"
            value={user.password}
            onChange={onChange}
            type="password"
            className="form-control"
            placeholder="Lösenord"
          />
        </div>

        <div className="form-group">
          <label>Bekräfta lösenord</label>
          <input
            error={errors.password2}
            id="password2"
            value={user.password2}
            onChange={onChange}
            type="password"
            className="form-control"
            placeholder="Lösenord"
          />
        </div>

        <button type="submit" className=" btn btn-primary">
          Skicka
        </button>
      </form>
      <button type="submit" className="btn btn-back  btn-primary">
      <Link className="btn-back" to="/">Tillbaka</Link>
      </button>
    </div>
  );
};

export default Register;
