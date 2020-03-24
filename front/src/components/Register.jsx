import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"

export default ({ handleSubmit, handleChange, state }) => (

  <div className="form-container">
    <div className="card-body mx-auto">
      <h4 className="card-title mt-3 text-center title">Sign Up</h4>
      <p className="text-center subtitle">Use your corporate email to create an account</p>

      <form onSubmit={handleSubmit} >

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text icon1"> <i className="fa fa-user"></i> </span>
          </div>
          <input onChange={handleChange} name="name" value={state.name} className="form-control" placeholder="Name" type="text" />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text icon1"> <i className="fa fa-user"></i> </span>
          </div>
          <input onChange={handleChange} name="lastName" value={state.lastName} className="form-control" placeholder="Lastname" type="text" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text icon1"> <i className="fa fa-envelope"></i> </span>
          </div>
          <input onChange={handleChange} name="email" value={state.email} className="form-control" placeholder="Email address" type="email" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text icon1"> <i className="fa fa-building"></i> </span>
          </div>

          <select onChange={handleChange} value={state.discipline} selected="" name="discipline" className="form-control border1">
            <option className="border1">Select Discipline</option>
            <option className="border1">Development</option>
            <option className="border1">Project Manager</option>
            <option className="border1">Testing</option>
            <option className="border1">Pdrc</option>
          </select>
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text icon1"> <i className="fa fa-lock"></i> </span>
          </div>
          <input onChange={handleChange} name="password1" value={state.password1} className="form-control" placeholder="Create password" type="password" />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text icon1"> <i className="fa fa-lock"></i> </span>
          </div>
          <input onChange={handleChange} name="password2" value={state.password2} className="form-control" placeholder="Repeat password" type="password" />
        </div>
        {state.errorMail ? (
          <div
            className="alert alert-danger"
            style={{
              borderRadius: "5px",
              marginTop: "17px"
            }}
            role="alert"
          >
            The selected email is invalid
                  </div>
        ) : null}
        {state.errorPass ? (
          <div
            className="alert alert-danger"
            style={{
              borderRadius: "5px",
              marginTop: "17px"
            }}
            role="alert"
          >
            The two passwords have to be the same!
                  </div>
        ) : null}
        {state.errorInc ? (
          <div
            className="alert alert-danger"
            style={{
              borderRadius: "5px",
              marginTop: "17px"
            }}
            role="alert"
          >
            Fill in all the fields
                  </div>
        ) : null}

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block button1"> Create Account  </button>
        </div>

        <p className="text-center">Already have an account? <Link to={"/login"}> Log In</Link></p>

      </form>
    </div>
  </div>
);
