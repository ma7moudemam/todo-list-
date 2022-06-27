import React, { useState } from 'react'
import classes from './Footer.module.css'
import {useDispatch,useSelector} from 'react-redux'

const Footer = () => {

  const theme = useSelector((state) => state.theme.theme);
  const [allclicked,setAllClicked] = useState(false)
  const [activeclicked,setActiveClicked] = useState(false)
  const [completedclicked,setCompletedClicked] = useState(false)
  const dispatch= useDispatch();
  const completedList = useSelector(state=>state.completed.completed);
  const totalCompleted = completedList.length;
  const totalTasks = useSelector(state=>state.todo.todos.length);
  
  
  const clear = ()=>{
    completedList.map((completed) =>{
      dispatch({type:'REMOVE_TODO',payload:completed})
      dispatch({type:'REMOVE_COMPLETED',payload:completed})
    }
    )
  }

  const listStateAll = ()=>{
    
    dispatch({type:'LIST_STATE',payload:'All'})
    setAllClicked(true);
    setActiveClicked(false);
    setCompletedClicked(false);
  }


  const listStateActive = ()=>{
    dispatch({type:'LIST_STATE',payload:'Active'})
    setAllClicked(false);
    setActiveClicked(true);
    setCompletedClicked(false);
  }

  const listStateCompleted = ()=>{
    dispatch({type:'LIST_STATE',payload:'Completed'})
    setAllClicked(false);
    setActiveClicked(false);
    setCompletedClicked(true);
  }

 
  
  return (
    <li className={classes.footer + " " + classes[theme]}>
        <div>
            <p>{totalTasks-totalCompleted} items left</p>
        </div>
        <div className={classes.actions}>
            <button onClick={listStateAll} className={allclicked ? classes.active :''} >All</button>
            <button onClick={listStateActive} className={activeclicked ? classes.active :''}> Active</button>
            <button onClick={listStateCompleted} className={completedclicked ? classes.active :''} >Completed</button>
        </div>
        <div>
            <button onClick={clear}>Clear completed</button>
        </div>
    </li>
  )
}

export default Footer