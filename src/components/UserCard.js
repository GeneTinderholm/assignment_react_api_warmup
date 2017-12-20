import React from 'react';
import Button from './elements/Button';
import Alert from './elements/Alert'
import Showable from './elements/Showable'

const UserCard = ({ user, onDelete}) => {
  console.log(user);
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
      <form className="container" onSubmit={onDelete}>
        <input name='id' type="hidden" value={user.id} />
        <Button type="submit" color="danger">
          Delete User
        </Button>
      </form>
    </div>
  );
};

export default UserCard;
