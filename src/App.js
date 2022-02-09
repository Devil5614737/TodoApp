import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import './styles/app.css';
import { auth, db } from "./firebase/config";
import { addDoc, collection,getDocs,deleteDoc,doc,updateDoc} from "firebase/firestore";
import { motion } from 'framer-motion';





function App() {
  const[todo,setTodo]=useState('');
  const[todos,setTodos]=useState([]);
  const[show,setShow]=useState(false)
  const[updatedTodo,setUpdatedTodo]=useState('')



// creating todos😎😎
const todoCollection=collection(db,'todos');

const createTodo=async()=>{
  if(!todo){
    return ;
  }
  else{
    await addDoc(todoCollection,{
      todo,
      userId:auth.currentUser.uid
    })

  }
  setTodo('')
}

// implementing deleting feature😡😡
const handleDelete=async(id)=>{
  const todoDoc=doc(db,'todos',id);
  await deleteDoc(todoDoc)
  }
  
  // updating todo😍😍
const handleUpdate=async(id)=>{
  const todoDoc=doc(db,'todos',id);
  await updateDoc(todoDoc,{
    todo:updatedTodo
  })

}



const filtered=todos.filter(item=>item.userId===auth.currentUser.uid)
// fetching todos😀😀😀
useEffect(()=>{
  const getTodos=async()=>{
    const data=await getDocs(todoCollection);
    setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
  getTodos()
},[filtered,handleDelete,handleUpdate,createTodo])





  return (
   <div className='main '>
   <Navbar setTodos={setTodos}/>
   <div className="content">
     <div className="content-container">
       <div className="addTodoBar" >
         <input className='todo-input' type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
         <button onClick={createTodo}>Add</button>
       </div>
     </div>
   </div>
   <div className="todos">
     <div className="todos-container">
      {localStorage.getItem('token')&&filtered && filtered.map(item=><motion.div   initial={{ scale: 0 }}
  animate={{ rotate:360,scale: 1 }}
  transition={{
    type: "tween",
    stiffness: 260,
    damping: 20
  }}   className="todo">
         <p>{!show?item.todo: <div className="addTodoBar" >
         <input className='updated-input' type="text" onChange={(e)=>setUpdatedTodo(e.target.value)} value={updatedTodo} placeholder={item.todo}/>
         <button className='update-btn' onClick={()=>handleUpdate(item.id)}>Update</button>
        
       </div>    }</p>
         <a onClick={()=>setShow(true)} href='#'><i class="fa-solid fa-pen-to-square fa-2x"></i></a>
         <a onClick={()=>handleDelete(item.id)} href='#'><i class="fa-solid fa-trash-can fa-2x" ></i></a>
     
       </motion.div>) }
     </div>
   </div>
   
   </div>
  );
}

export default App;
