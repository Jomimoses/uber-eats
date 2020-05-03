import React, { Fragment } from "react";

export default function Circle(props) {
  const className = `${props.className}`;
  return (
    <Fragment>
      <div className="circle">
        <p className={`view ${className}`}>{props.value}</p>
        <p>{props.title}</p>
      </div>
    </Fragment>
  );
}
