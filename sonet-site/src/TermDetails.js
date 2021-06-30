import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TermDetails = () => {
  const { id } = useParams();
  const {
    data: term,
    error,
    loading,
  } = useFetch("http://localhost:8000/terms/" + id);

  return (
    <div className="term-details">
      {loading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {term && (
        <div>
          <h2>{term.title}</h2>
          <p>Written by {term.author}</p>
          <div>{term.body}</div>
        </div>
      )}
    </div>
  );
};

export default TermDetails;
