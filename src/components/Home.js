import React from "react";

const Home = (props) => {
  if (isNaN(props.input)) {
    if (!props.input) {
      return <p>Welcome</p>;
    } else {
      return (
        <p
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
    return <p>The Number is: {props.input}</p>;
  }
};

export default Home;
