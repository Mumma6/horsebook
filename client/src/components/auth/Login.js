import React, { useState } from "react";
import "./login.css"

const Login = () => {


  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({});

  const onChange = e => {
    setData({ ...data, [e.target.id]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault();

    const formData = {
      email: data.email,
      password: data.password
    }

    console.log(formData)
  }

  return (
    <div className="container login-main">
      <h2>Logga in</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            error={errors.email}
            id="email"
            value={data.email}
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
            value={data.password}
            onChange={onChange}
            type="password"
            className="form-control"
            placeholder="Lösenord"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Skicka
        </button>
      </form>
    </div>
  );
};

export default Login;
