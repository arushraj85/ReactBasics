import { useReducer, useState } from "react";
import Form from "./Form";
import AddForm from "./AddForm";
import formDb from "../data/formDb";

const FormList = () => {
  const FormReducer = (data, object) => {
    switch (object.type) {
      case "ADD":
        return [...data, { ...object.payload, id: data.length + 1 }];
      case "DEL":
        return data.filter((d) => d.id !== object.payload);
      default:
        return data;
    }
  };

  const [data, dispatch] = useReducer(FormReducer, formDb);
  // const [data, setData] = useState(formDb);

  // const addForm = (form) => {
  //   // setData([...data, { ...form, id: data.length + 1 }]);
  //   // console.log([...data, { ...form, id: data.length + 1 }]);
  //   dispatch({type:'ADD',payload: form})
  // };

  // const deleteForm = (id) => {
  //   //  setData(data.filter((d) => d.id !== id));
  //   dispatch({type:'DEL',payload: id})
  // };

  return (
    <>
      <AddForm
        // onAddForm={addForm}
        dispatch={dispatch}
      ></AddForm>
      {data.map((d) => (
        <Form
          key={d.id}
          firstname={d.firstname}
          age={d.age}
          id={d.id}
          // onDeleteForm={deleteForm}
          dispatch={dispatch}
        ></Form>
      ))}{" "}
    </>
  );
};

export default FormList;
