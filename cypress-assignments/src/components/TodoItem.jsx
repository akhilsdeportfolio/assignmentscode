export const TodoItem =({title,deleteItem})=>{

     return(<>
          <div className="container">
               <li>
               <h3>{title}</h3>
               <button data-id="delete" onClick={deleteItem}>Delete</button>
               </li>
          </div>
     </>)



};