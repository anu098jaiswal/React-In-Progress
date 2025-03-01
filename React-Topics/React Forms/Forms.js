import React from 'react'
import { useForm } from 'react-hook-form';
function Forms() {
    const{
        register,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm();

 function onSubmit(data){
    console.log("submitting data",data);
 }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input {...register("firstname",{ required: true, maxLength: 20 })} />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input {...register("lastname")} />
      </div>
      <br/>
      <input type='submit'/>
    </form>
  );
}

export default Forms
