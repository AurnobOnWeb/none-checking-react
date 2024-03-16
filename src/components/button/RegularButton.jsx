/* eslint-disable react/prop-types */
const RegularButton = (props) => {
  return (
    <>
      <button
        className={"btn outline-none rounded-3xl " + props.className}
        onClick={props.onClick ?? null}
      >
        {props.title}
      </button>
    </>
  );
};

export default RegularButton;
