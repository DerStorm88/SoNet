import { useState } from "react";
import TermList from "./TermList";

const HomePage = () => {
  const [terms, setTerms] = useState([
    { title: 'How do I check if an array includes a value in JavaScript?', body: 'What is the most concise and efficient way to find out if a JavaScript array contains a value?', author: 'brad', id: 1 },
    { title: 'How do I test for an empty JavaScript object?', body: 'How can I check whether thats the case?', author: 'palm', id: 2 },
  ])

  const handleDelete = (id) => {
    const newTerms = terms.filter(term => term.id !== id);
    setTerms(newTerms);
  }

  return (
    <div className="home-page">
      <TermList terms={terms} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
 
export default HomePage;