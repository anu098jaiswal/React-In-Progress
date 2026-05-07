import "./style.css";
import { useState } from "react";
//minimal html structure(the UI is static for now so we add state for interactivity)
//dynamically rendaring stars using. map\

//.hovering logic(1.user is hovering 2. user has selected)
//if

export default function StarRating() {
  const [stars, setStarValue] = useState(0);
  const [hover, setHover] = useState();
  return (
    <>
      {[...Array(5)].map((__, i) => (
        <span className={i+1 <= (hover|| stars)? "stargold" :"star"}key={i} onClick={() => setStarValue(i+1)}
        onMouseEnter={()=>setHover(i+1)}
        onMouseLeave={()=>setHover(0)}>
          ★
        </span>
      ))}
    </>
  );
}

// export default function StarRating({ starCount = 5 }) {
//   const [starValue, setstarValue] = useState();
//   const[hoverValue,sethoverValue]=useState(0);
// console.log(hoverValue)
//   console.log(starValue);
//   return (
//     <div>
//       {new Array(starCount).fill(0).map((_, index) => {
//         return (
//           <span
//             key={index}
//             className={ hoverValue == 0 && index < starValue || index<hoverValue? "gold" : " "}
//             onClick={() => setstarValue(index + 1)}
//             onMouseEnter={()=>sethoverValue(index+1)}
//             onMouseLeave={()=>sethoverValue(0)}
//           >
//             {" "}
//             &#9733;
//           </span>
//         );
//       })}
//     </div>
//   );
// }
