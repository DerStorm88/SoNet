import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewTopic = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const [loading, setLoading] = useState(false);

  const backHome = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const topic = { title, body, author };

    setLoading(true);

    fetch("http://localhost:8000/topics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(topic),
    }).then(() => {
      setLoading(false);
      backHome.push('/');
    });
  }

  return (
    <div className="create">
      <h2>Add a New Topic</h2>
      <form onSubmit={handleSubmit}>
        <label>Topic title:</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Topic body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Topic author:</label>
        <input
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {loading ? (
          <button disabled>Adding Topic</button>
        ) : (
          <button>Add Topic</button>
        )}
      </form>
    </div>
  );
};

export default NewTopic;
