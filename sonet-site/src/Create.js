import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewTerm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const [loading, setLoading] = useState(false);

  const backHome = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const term = { title, body, author };

    setLoading(true);

    fetch("http://localhost:8000/terms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(term),
    }).then(() => {
      setLoading(false);
      backHome.push('/');
    });
  }

  return (
    <div className="create">
      <h2>Add a New Term</h2>
      <form onSubmit={handleSubmit}>
        <label>Term title:</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Term body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Term author:</label>
        <input
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {loading ? (
          <button disabled>Adding Term</button>
        ) : (
          <button>Add Term</button>
        )}
      </form>
    </div>
  );
};

export default NewTerm;
