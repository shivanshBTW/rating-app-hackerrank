import React from 'react';
import Star from '../Star/Star';
import { useState } from 'react';

function Rating(props) {
  let { starCount, rating, setRating } = props;
  let [hoveringStar, setHoveringStar] = useState(null);
  return (
    <div className={'flexContainer'}>
      {Array.from(new Array(starCount)).map((_, index) => {
        let evaluatedStatus = 'emptyStar'; //emptyStar
        if (hoveringStar || hoveringStar === 0) {
          evaluatedStatus = index <= hoveringStar ? 'fullStar' : 'emptyStar';
        } else if (rating || rating === 0) {
          evaluatedStatus = index <= rating ? 'fullStar' : 'emptyStar';
        }
        return (
          <div>
            <Star
              status={evaluatedStatus}
              starIndex={index}
              setHoveringStar={setHoveringStar}
              setRating={setRating}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Rating;
