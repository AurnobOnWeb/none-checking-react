// eslint-disable-next-line react/prop-types
const InfoHeader = ({ title }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-5">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <hr className="border  w-[70%] mt-4 " />
      </div>
    </>
  );
};

export default InfoHeader;
