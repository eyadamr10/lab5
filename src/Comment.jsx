import { useState } from 'react';

export default function Comment(props) {
  const [likes, setLikes] = useState(props.likes);

  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.text}</p>
      <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>
      <br/>
      <br/>
    </div>
  );
}