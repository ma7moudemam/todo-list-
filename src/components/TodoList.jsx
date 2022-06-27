import React,{useState} from 'react'
import classes from './TodoList.module.css'
import { useSelector } from 'react-redux'
import ListItem from './ListItem';
import Footer from './Footer';

const TodoList = (props) => {
    
  const theme = useSelector((state) => state.theme.theme);

    const todoList = useSelector(state=>state.todo.todos);
    const completedList = useSelector(state=>state.completed.completed);
    const activeList = todoList.filter((todo)=>!completedList.includes(todo));


   const content= {
        'All':todoList,
        'Active':activeList,
        'Completed':completedList
   }


    const list = content[props.listState];



  return (
    <div className={classes.list}>
      <ul className={classes.mylist + " " + classes[theme]}>
      {
       list.map((todo)=>{
        return <ListItem  key={todo} todo={todo}></ListItem>
       })
      }
      <Footer/>
      </ul>
    </div>
  )
}

export default TodoList