//imperative vs declartive ui
//imperative->we need to write exact instruction to manipulate UI
//declarative way;-
// 1.identify diff visual states{typing,success,error,submiting
// 2.deteremine what triggers this states
// 3.usestate
// 4.remove non essential state
// 5.connect event handller 
export default  function CityQuiz(){
   
        return (
      <>
        <h2>City Quiz</h2>
        <p>
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
        <form>
            <textarea/>
            <button>
          Submit
        </button>
        </form>
      </>
    );
}

