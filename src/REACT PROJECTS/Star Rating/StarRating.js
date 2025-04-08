import "./style.css";
import { useState } from "react";
export default function StarRating({ starCount = 5 }) {
  const [starValue, setstarValue] = useState();
  const[hoverValue,sethoverValue]=useState(0);
console.log(hoverValue)
  console.log(starValue);
  return (
    <div>
      {new Array(starCount).fill(0).map((_, index) => {
        return (
          <span
            key={index}
            className={ hoverValue == 0 && index < starValue || index<hoverValue? "gold" : " "}
            onClick={() => setstarValue(index + 1)}
            onMouseEnter={()=>sethoverValue(index+1)}
            onMouseLeave={()=>sethoverValue(0)}
          >
            {" "}
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
