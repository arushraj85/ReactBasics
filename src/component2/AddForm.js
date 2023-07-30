import { useState } from "react";

function AddForm({ dispatch}){

 let  initialForm ={
        firstname: '',
        age: ''
    }

    const [form,setForm]=useState(initialForm)

  const handleChange =(e)=>{
    // console.log(e.target.name,e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
     console.log(form)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(form);
    setForm(initialForm);
    // onAddForm(form);
    dispatch({type:'ADD',payload: form})
    
  }

    return(
      <form onSubmit={submitHandler}>
      <input type ="text" name="firstname" placeholder="firstname" onChange={handleChange} value={form.firstname}/>
      <input type ="number" name="age" placeholder="age" onChange={handleChange}value={form.age}  />
<button >Add</button>
</form>      
    )
    }
export default AddForm;
