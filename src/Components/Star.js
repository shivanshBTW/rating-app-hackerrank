import React from 'react';
import StarLogo from './StarLogo';
import classes from './StarColors.module.css';

export default function Star(props) {
  let { status, setRating, starIndex } = props;
  console.log(status, classes);

  let handleClick = () => {
    setRating(starIndex);
  };
  return (
    <div className={classes[status + 'Container']} onClick={handleClick}>
      <StarLogo />
    </div>
  );
}
