
import TodoItem from "./TodoItem"
export default function TodoList(props)
{
     return(
          <>
               {props.todos.map((e)=>{
                    return <TodoItem title={e}/>
               })}

          </>
     )
}

