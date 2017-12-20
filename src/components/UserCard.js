import React from 'react';
import Button from './elements/Button';

const UserCard = ({ user }) => {
  const { first_name, last_name, avatar } = user;

  return (
    <div className="UserCard card" style={{ maxWidth: `128px` }}>
      <img
        className="card-img-top img-fluid"
        src={user.avatar}
        alt="user avatar"
      />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
      </div>
      <form>
        <Button type="submit" color="danger">
          Delete User
        </Button>
      </form>
    </div>
  );
};

export default UserCard;
