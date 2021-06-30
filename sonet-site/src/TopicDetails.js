import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TopicDetails = () => {
  const { id } = useParams();
  const {
    data: topic,
    error,
    loading,
  } = useFetch("http://localhost:8000/topics/" + id);

  return (
    <div className="topic-details">
      {loading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {topic && (
        <div>
          <h2>{topic.title}</h2>
          <p>Written by {topic.author}</p>
          <div>{topic.body}</div>
        </div>
      )}
    </div>
  );
};

export default TopicDetails;
