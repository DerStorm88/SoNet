import { Link } from "react-router-dom";

const TopicList = ({ topics}) => {
  return (
    <div className="topic-list">
      {topics.map((topic) => (
        <div className="topic-preview" key={topic.id}>
          <Link to={`/topics/${topic.id}`}>
            <h2>{topic.title}</h2>
            <p className="topic-preview-author">Written by {topic.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
