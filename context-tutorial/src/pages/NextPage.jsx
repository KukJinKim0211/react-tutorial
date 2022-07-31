import ColorContext from "../contexts/color";
import { useContext } from "react";

const NextPage = () => {
  const { state } = useContext(ColorContext);
  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "400px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "600px",
          height: "600px",
          background: state.subcolor,
        }}
      />
    </div>
  );
};

export default NextPage;
