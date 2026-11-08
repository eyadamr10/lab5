import { useState } from 'react';
import Comment from './Comment';

export default function App() {
  const [comments, setComments] = useState([
    { name: "eyad", text: "zmalek goooal", likes: 6 },
    { name: "seif", text: "feeling happy", likes: 1 },
    { name: "karim", text: "when is todays match ?", likes: 2 }
  ]);

  const [text, setText] = useState("");

  function addComment() {
    setComments([...comments, { name: "You", text: text, likes: 0 }]);
    setText(""); 
  }

  return (
    <div>
      <h1>Comments ({comments.length})</h1>

      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={addComment}>Post</button>

      {comments.map((c, index) => (
        <Comment key={index} name={c.name} text={c.text} likes={c.likes} />
      ))}
    </div>
  );
}
