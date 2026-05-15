//imperative vs declartive ui
//imperative->we need to write exact instruction to manipulate UI
//declarative way;-
// 1.identify diff visual states{typing,success,error,submiting
// 2.deteremine what triggers this states
// 3.usestate
// 4.remove non essential state
// 5.connect event handller 
import {useState} from 'react';
export default  function CityQuiz(){
    const[answer,setAnswer]=useState('');
    const[error,setError]=useState(null);
    const[status,setStatus]=useState(' typing');
    if(status==='success'){
        return (
            <h1>That's right!</h1>
        );
    }
     async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitAnswer(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }
    function submitAnswer(answer){
        //simulate apu call
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(answer.toLowerCase()==='banglore'){
                    resolve();
                    
                } else{
                    reject(new Error('Incorrect answer. Please try again!'));
                }
            },1000);
        })

    }
        return (
      <>
        <h2>City Quiz</h2>
        <p>
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
        <form onSubmit={handleSubmit}>
            <textarea value={answer} onChange={(e)=>setAnswer(e.target.value)} disabled={status==='submitting'}/>
            <button disabled={status==='submitting'} >
                {status==='submitting' ? 'Submitting...':'Submit'}
          </button>
          {error !== null && (
            <p>{error.message}</p>
          )}
        </form>
      </>
    );
}

//Declarative programming means describing the UI for each visual state
//  rather than micromanaging the UI (imperative).