import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus the input box
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click button to focus me"
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
