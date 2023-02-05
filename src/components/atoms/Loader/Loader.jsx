import { FiCommand } from "react-icons/fi";

export default function Loader() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <FiCommand className="loading-icon" />
    </div>
  );
}
