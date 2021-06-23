const TermList = ({ terms, title, handleDelete }) => {
    return (
      <div className="term-list">
        <h2>{ title }</h2>
        {terms.map(term => (
          <div className="term-preview" key={term.id} >
            <h2>{ term.title }</h2>
            <p className="term-preview-author">Written by { term.author }</p>
            <button className="term-preview-delete" onClick={() => handleDelete(term.id)}>delete term</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default TermList;