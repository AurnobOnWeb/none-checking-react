/* eslint-disable react/prop-types */

const SectionHeader = (props) => {
  return (
    <div className="flex justify-center items-center flex-col  ">
    <h1 className="text-4xl font-extrabold mb-4"> {props.title} </h1>
    <p className="text-gray-400 text-center md:w-[70%] font-light">{props.description}</p>
  </div>
  );
};

export default SectionHeader;