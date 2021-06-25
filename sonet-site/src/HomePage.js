import { useEffect, useState } from "react";
import TermList from "./TermList";

const HomePage = () => {
  const [terms, setTerms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/terms")
        .then((res) => {
          if (!res.ok) {
            throw Error("can not take the data");
          }
          return res.json();
        })
        .then((data) => {
          setTerms(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.mesage);
        });
    }, 1000);
  }, []);

  return (
    <div className="home-page">
      {error && <div>{error} </div>}
      {loading && <div>Loading</div>}
      {terms && <TermList terms={terms} title="All Terms" />}
    </div>
  );
};

export default HomePage;
