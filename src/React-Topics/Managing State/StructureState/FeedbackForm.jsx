//Avoid contradictions in state

import React, { useState } from "react";
function FeedbackForm() {
  //const[sent,setSent]=useState(false);
  const [status, setStatus] = useState("typing");
  const [message, setMessage] = useState(" ");

   function handleSubmit() {
    // setSent(true);
    setStatus("sending");
    setStatus("sent");

    // if(sent){
    //     return (<p>Thanks for feedback</p>);

    // }
  }

  if (status == "sent"?<p>Thanks for feedback</p> : "" ) 

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <p> How was your stay</p>
          <input
            type="text"
            value="message"
            onChange={(e) => setMessage(e.target.value)}
            disabled={status == "sent"}
          />
          <button type="submit" disabled={status == "sent"}>
            Send
          </button>
          {status == "sending" ? <p>Sending...</p> : ""}
        </form>
      </div>

      //      <div>
      //        {sent ? (
      //          <p> Thanks for feedback</p>
      //        ) : (
      //          <form onSubmit={handleSubmit}>
      //            <h1>How was your day at taj</h1>
      //            <input
      //              type="text"
      //              onChange={(e) => setValue(e.target.value)}
      //              disabled={sent}
      //            />

      //            <button type="submit" disabled={sent}>
      //              Submit
      //            </button>
      //          </form>
      //        )}
      //      </div>
    );
}

export default FeedbackForm;
