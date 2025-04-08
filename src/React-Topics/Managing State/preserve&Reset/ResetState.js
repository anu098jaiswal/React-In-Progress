import { useState } from 'react';
//task : one counter for taylore other for sarah
export default function ResetState() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
        {/*rendaring in two diff positions*/}
      {isPlayerA && <Counter person="tylor"/>}
      {!isPlayerA && <Counter person="sarah"/>}

      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
