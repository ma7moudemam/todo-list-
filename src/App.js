import Header from './components/Header';
import {  useSelector } from 'react-redux';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import classes from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [listState , setListState] = useState('All');
  const theme = useSelector(state => state.theme.theme);
  const  myListState= useSelector(state => state.listState.listState);

  useEffect(() => {
    setListState(myListState);
  }
  , [myListState]);
  
  if(theme === 'dark') {
    document.body.style.backgroundColor = 'hsl(235, 21%, 11%)';
  }
  if(theme === 'light') {
    document.body.style.backgroundColor = 'hsl(235, 21%, 96%)';
  }

  return (
    <div className={`${classes.App}`}>
        <Header/>
        <CreateTodo/>
        <TodoList listState={listState}/>
    </div>
  );
}

export default App;
