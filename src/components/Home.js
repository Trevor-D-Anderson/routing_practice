import React from "react";

const Home = (props) => {
  if (isNaN(props.input)) {
    if (!props.input) {
      return <p className="text-lg font-bold">Welcome</p>;
    } else {
      return (
        <p
          className="text-lg font-bold"
          style={
            props.color
              ? {
                  color: props.color,
                  backgroundColor: props.backgroundColor,
                }
              : null
          }
        >
          The Word is: {props.input}
        </p>
      );
    }
  } else {
    return <p className="text-lg font-bold">The Number is: {props.input}</p>;
  }
};

export default Home;
