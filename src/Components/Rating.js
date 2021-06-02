import React from 'react';
import Star from './Star';

function Rating(props) {
  let { starCount, setRating } = props;
  return (
    <div>
      {Array.from(new Array(starCount)).map((_, index) => {
        let evaluatedStatus = 'full';
        return <Star status={evaluatedStatus} setRating={setRating} />;
      })}
    </div>
  );
}

export default Rating;
