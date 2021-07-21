import React from 'react';
import Card from './Card';

const CardList = ({ animeFriends }) => {
  return (
    <div>
      {
        animeFriends.map((user, i) => {
          return (
            <Card
              key={i}
              id={animeFriends[i].id}
              profile={animeFriends[i].profile}
              name={animeFriends[i].name}
              email={animeFriends[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;