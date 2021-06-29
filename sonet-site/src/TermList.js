import { Link } from "react-router-dom";

const TermList = ({ terms}) => {
  return (
    <div className="term-list">
      {terms.map((term) => (
        <div className="term-preview" key={term.id}>
          <Link to={`/terms/${term.id}`}>
            <h2>{term.title}</h2>
            <p className="term-preview-author">Written by {term.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TermList;
