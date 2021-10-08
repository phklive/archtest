import Todo from './Todo'
import {useState,useRef} from 'react'

const Todolist = () => {

  const [list,setList] = useState([])

  const formRef = useRef()

  const addTodoHandler = (e) => {
    e.preventDefault()
    const formData = formRef.current
    const newTodo = { 
                      title: formData['title'].value,
                      des: formData['des'].value
    }

    setList( oldArray =>  [...oldArray, newTodo] )
  }

  return (
  <>
    <ul>
      {list.map(todo => <Todo title={todo.title} des={todo.des} />)}
    </ul>

    <form ref={formRef}>
      <label for='title'>Todo title: </label> 
      <input type='text' name='title' id='title' placeholder='title'/>
      <br/>
      <label for='des'>Todo description: </label> 
      <input type='text' name='des' id='des' placeholder='des'/>
      <br/>
      <button onClick={addTodoHandler}>add Todo</button>
    </form>
  </>
  )
}

export default Todolist

