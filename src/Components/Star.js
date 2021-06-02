import React from 'react';
import StarLogo from './StarLogo';
import classes from './StarColors.module.css';

export default function Star(props) {
  let { status } = props;
  console.log(status,classes);
  return (
    <div className={classes[status + 'Container']}>
      <StarLogo />
    </div>
  );
}
