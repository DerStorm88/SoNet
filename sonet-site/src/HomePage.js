import TopicList from "./TopicList";
import useFetch from "./useFetch";

const HomePage = () => {
  const {
    data: topics,
    loading,
    error,
  } = useFetch("http://localhost:8000/topics");
  
  return (
    <div className="home-page">
      {error && <div>{error}</div>}
      {loading && <div>Loading</div>}
      {topics && <TopicList topics={topics} />}
    </div>
  );
};

export default HomePage;
