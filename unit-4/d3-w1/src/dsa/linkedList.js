class Node {
     constructor(data)
     {
          this.data=data;
          this.next=null;
     }     
}



class LinkedList {
     
     constructor()
     {
          this.head = null;
          this.size=0;
          
     }




     getSize()
     {
          return this.size;
     }



     append(data)
     {

          let node = new Node(data);
          if(this.head==null)
          {
               this.head=node;
               this.size++;
          }
          else
          {
               let current =this.head;
               let prev = this.head;

               while(current!=null)
               {
                    prev=current;
                    current=current.next;
               }

               prev.next = node;
               this.size++;
          }
     }



     insert(data,positon)
     {
          let pos=1;

          console.log("position"+positon);

          let current=this.head;
          let prev= this.head;


          if(positon==1)
          {
               let node = new Node(data);

               node.next = this.head;
               this.head=node;
               return;
          }
          else
          {

               while(current!=null)
               {
                         if(pos === positon)
                         {
                              break;
                         }


                         prev=current;
                         current=current.next;
                         pos++;
               }

                    if(current==null)
                    {
                         if(positon > this.size+1 )
                         {
                              console.error("overflow error");
                              return;
                         }
                         else{
                              console.log(pos);
                              let node = new Node(data);
                              let temp=prev.next;
                              prev.next= node;
                              node.next=temp;
                         }
                    }
                    else if(current!=null)
                    {
                         console.log(pos);
                         let node = new Node(data);
                         let temp=prev.next;
                         prev.next= node;
                         node.next=temp;
                    }
               
          }
          
          

     }





     
}



let list = new LinkedList();

list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.append(50);
list.insert(100,5);



console.log(JSON.stringify(list.head));