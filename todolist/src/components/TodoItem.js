
import styles from './Todo.css'

export default function TodoItem({title})
{
     return(
          <>
               <h4 className='item'>{title}</h4>
          </>
     )
}