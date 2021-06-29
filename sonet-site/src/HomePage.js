import TermList from "./TermList";
import useFetch from "./useFetch";

const HomePage = () => {
  const {
    data: terms,
    loading,
    error,
  } = useFetch("http://localhost:8000/terms");
  
  return (
    <div className="home-page">
      {error && <div>{error}</div>}
      {loading && <div>Loading</div>}
      {terms && <TermList terms={terms} />}
    </div>
  );
};

export default HomePage;
