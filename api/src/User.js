import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <div className="card border-success mb-4 mx-3" style={{ Width: "18rem" }}>
        <div className="card-header bg-transparent border-success">
          <h2>{user.name}</h2>
        </div>
        <div className="card-body text-success">
          <h5 className="card-title">{user.email}</h5>
          <p className="card-text">
            <span>
              {user.address.street} {user.address.suite}
            </span>
            <br />
            <span>{user.address.city}</span>
            <br />
            <span>{user.address.zipcode}</span>
          </p>
        </div>
        <div className="card-footer bg-transparent border-success">
          Phone: {user.phone}
        </div>
      </div>
    </div>
  );
};

export default User;
