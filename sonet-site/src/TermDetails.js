import { useParams } from "react-router-dom";

const TermDetails = () => {
  const { id } = useParams();

  return (
    <div className="term-details">
      <h2>Term Details -{id}</h2>
    </div>
  );
};

export default TermDetails;
