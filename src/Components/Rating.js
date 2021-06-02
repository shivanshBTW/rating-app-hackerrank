import React from 'react';
import Star from './Star';

function Rating(props) {
  let { starCount, setRating } = props;
  return (
    <div className={'flexContainer'}>
      {Array.from(new Array(starCount)).map((_, index) => {
        let evaluatedStatus = 'fullStar'; //emptyStar
        return <Star status={evaluatedStatus} setRating={setRating} />;
      })}
    </div>
  );
}

export default Rating;
