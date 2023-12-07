export const CustomButton = ({ title, buttonColor = "#543EE8", textColor = "white" }) => {
  const customStyle = {
    backgroundColor: buttonColor,
    color: textColor,
  };

  return (
    <button className='rounded-full px-14 py-4 text-s' style={customStyle}>
      {title}
    </button>
  );
};
