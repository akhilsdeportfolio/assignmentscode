import styles from './Card.module.css'



function Card()
{
     return(
          <>


          <div className={styles.flex}>
            <div className={styles.card}>
               <img alt={'sample'} src={'https://b.zmtcdn.com/data/reviews_photos/6ed/dd978e481f0ff237a4700f461eab56ed_1543302243.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'} />

               
               <h3>Welcome to Restaurant</h3>
               <div className={styles.icons}>
                    <div className={styles.flex}>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                    </div>
               </div>

               <div className={styles.clear}/>

               <p>This is a smaple text This is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis.</p>
               

               <div
               className={styles.flex} style={{gap:'20px'}}>
                    <h4>265 Kcal</h4>
                    <h4>P/F/120</h4>                    
                    <h4>53 <sup>0</sup> C</h4>
               </div>

               <div
               className={styles.flex} >
                    <h2>$1234</h2>
                    <h3 style={{textDecoration:'line-through'}}>$2234</h3>                    
                    <button className={styles.button}>Order</button>
               </div>
               


               
               
            </div>   
            <div className={styles.card}>
               <img alt={'sample'} src={'https://b.zmtcdn.com/data/reviews_photos/6ed/dd978e481f0ff237a4700f461eab56ed_1543302243.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'} />

               
               <h3>Welcome to Restaurant</h3>
               <div className={styles.icons}>
                    <div className={styles.flex}>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                    </div>
               </div>

               <div className={styles.clear}/>

               <p>This is a smaple text This is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis.</p>
               

               <div
               className={styles.flex} style={{gap:'20px'}}>
                    <h4>265 Kcal</h4>
                    <h4>P/F/120</h4>                    
                    <h4>53 <sup>0</sup> C</h4>
               </div>

               <div
               className={styles.flex} >
                    <h2>$1234</h2>
                    <h3 style={{textDecoration:'line-through'}}>$2234</h3>                    
                    <button className={styles.button}>Order</button>
               </div>
               


               
               
            </div>   
            <div className={styles.card}>
               <img alt={'sample'} src={'https://b.zmtcdn.com/data/reviews_photos/6ed/dd978e481f0ff237a4700f461eab56ed_1543302243.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'} />

               
               <h3>Welcome to Restaurant</h3>
               <div className={styles.icons}>
                    <div className={styles.flex}>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                         <span class="material-icons">
                         local_fire_department
                         </span>
                    </div>
               </div>

               <div className={styles.clear}/>

               <p>This is a smaple text This is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis is a smaple textThis.</p>
               

               <div
               className={styles.flex} style={{gap:'20px'}}>
                    <h4>265 Kcal</h4>
                    <h4>P/F/120</h4>                    
                    <h4>53 <sup>0</sup> C</h4>
               </div>

               <div
               className={styles.flex} >
                    <h2>$1234</h2>
                    <h3 style={{textDecoration:'line-through'}}>$2234</h3>                    
                    <button className={styles.button}>Order</button>
               </div>
               


               
               
            </div>   

            </div>


          </>
     )
}

export {Card};