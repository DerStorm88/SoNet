const TermList = ({ terms, title}) => {
  return (
    <div className="term-list">
      <h2>{title}</h2>
      {terms.map((term) => (
        <div className="term-preview" key={term.id}>
          <h2>{term.title}</h2>
          <p className="term-preview-author">Written by {term.author}</p>
        </div>
      ))}
    </div>
  );
};

export default TermList;
