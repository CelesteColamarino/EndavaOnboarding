import React from "react";



export default () => (

  <div className="card bg-light">
    <div className="card-body mx-auto" style={{ maxWidth: "400px" }}>
      <h4 className="card-title mt-3 text-center">Add a New Recruit</h4>
      <p className="text-center">Add a new member to your organization!</p>

      <form >

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
          </div>
          <input name="name" className="form-control" placeholder="Name" type="text" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
          </div>
          <input name="lastName" className="form-control" placeholder="Lastname" type="text" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
          </div>
          <input name="email" className="form-control" placeholder="Email address" type="email" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i class="fa fa-phone"></i> </span>
          </div>
          <input name="phone" className="form-control" placeholder="Phone number" type="text" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i class="fa fa-id-card"></i> </span>
          </div>
          <input name="DNI" className="form-control" placeholder="DNI" type="text" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-user-clock"></i> </span>
          </div>
            <input type="date" name="entryDate" max="2050-12-31" min="2020-03-01" className="form-control"
              placeholder="Starting on" />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text"> <i className="fa fa-building"></i> </span>
          </div>
          <select selected="" name="discipline" className="form-control">
            <option> Select Discipline</option>
            <option>Development</option>
            <option>Project Manager</option>
            <option>Testing</option>
            <option>Pdrc</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block"> Create Recruit  </button>
        </div>

      </form>
    </div>
  </div>
);
