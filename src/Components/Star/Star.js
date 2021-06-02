import React from 'react';
import StarLogo from '../StarLogo/StarLogo';
import classes from './Star.module.css';

export default function Star(props) {
  let { status, setRating, starIndex, setHoveringStar } = props;

  let handleClick = () => {
    setRating(starIndex);
  };

  let handleHoverIn = () => {
    setHoveringStar(starIndex);
  };

  let handleHoverOut = () => {
    setHoveringStar(null);
  };

  return (
    <div
      className={classes[status + 'Container']}
      onClick={handleClick}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <StarLogo />
    </div>
  );
}
