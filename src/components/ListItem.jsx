import React, { useState } from 'react'
import classes from './ListItem.module.css'
import Checked from './../assets/images/icon-check.svg'
import { useDispatch,useSelector } from 'react-redux'

const ListItem = (props) => {

    const [completed, setCompleted] = useState(false)
    const dispatch = useDispatch();


    const handleClick = () => {
       
        if(completed===true){
            dispatch({type:'REMOVE_COMPLETED',payload:props.todo})
            setCompleted(!completed)
        }
        else{
          dispatch({type:'ADD_COMPLETED',payload:props.todo})
          setCompleted(!completed)
        }
       
       
    }

    const completedList = useSelector(state=>state.completed.completed);
    const completedClass = completedList.includes(props.todo) ? classes.checked : '';
    const completedIcon = completedList.includes(props.todo) ? Checked : '';
    const completedText = completedList.includes(props.todo) ?  classes.clicked: '';

    const deleteTodo =()=>{
      dispatch({type:'REMOVE_TODO',payload:props.todo});
      dispatch({type:'REMOVE_COMPLETED',payload:props.todo})
    }


  return (
    <li className={classes.item}>
        <button className={completedClass ? classes.checked : ''} onClick={handleClick} >
          {
            completedIcon &&<img src={Checked} alt="checked" />
          }
        </button>
        <span onClick={handleClick} className={completedText ? classes.clicked : ''}>{props.todo}</span>
        <i className="fas fa-times" onClick={deleteTodo}></i>
    </li>
  )
}

export default ListItem