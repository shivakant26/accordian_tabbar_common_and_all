import { useEffect, useState } from "react";

const Contact = () => {
  const [state, setState] = useState(0);

  // behave like componentDidMount
  useEffect(() => {
    console.log("function component Did mount");
  }, []);

  // behave like component Did Update
  useEffect(() => {
    console.log("function component Did Update");
  }, [state]);

  // behave like component unMount
  useEffect(() => {
    return () => {
      console.log("compnoentWillMount");
    };
  }, []);

  const update = () => {
    setState(state + 1);
  };

  return (
    <>
      {console.log("return")}
          <h4>functional component</h4>
      <p>{state}</p>
      <button onClick={update}>click</button>
    </>
  );
};

export default Contact;
