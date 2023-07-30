const Form = ({ firstname, age, id,  dispatch }) => {
  const deleteHandler = () => {
    // onDeleteForm(id);
    dispatch({ type: "DEL", payload: id });
  };

  return (
    <>
      <div>{firstname}</div>
      <div>{age}</div>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
};

export default Form;
