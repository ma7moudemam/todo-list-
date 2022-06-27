import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import classes from "./CreateTodo.module.css";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");
  const theme = useSelector((state) => state.theme.theme);

    const dispatch = useDispatch();

  const onChangeHandler =(event)=>{
    setTodo(event.target.value);
  } 

  const addTodo = ()=>{
    if (todo.trim().length > 0) {
        dispatch({ type: "ADD_TODO", payload: todo });
        setTodo("");
      }
      else
      {
        return;
      }
  }

  useEffect(() => { 
    const keyDownHandler = event => {
  
        if (event.key === 'Enter') {
            addTodo();
        }
      };

      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }
    , [todo]);

  const submitHandler = (event) => {
    event.preventDefault();
    addTodo();
  };
  
  return (
    <form className={classes.myform} onSubmit={submitHandler}>
      <div className={classes.createdTask}>
        <button></button>
        <input
          className={classes.myinput + " " + classes[theme]}
          value={todo}
          onChange={onChangeHandler}
          type="text"
          placeholder="Create a new Todo"
        />
      </div>
    </form>
  );
};

export default CreateTodo;
