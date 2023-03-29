import PopD from "./PopD";

const PopDrill = function (props) {
  return (
    <div>
      <h1>{props.message}</h1>
      <h1>header here</h1>
      <PopD msg={props.msg} />
    </div>
  );
};

export default PopDrill;
