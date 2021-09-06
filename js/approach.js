var arr=[6, 3, -1, -3, 4, -2,
    2, 4, 6, -12, -7];
//arr=arr.sort();
console.log(arr);
var obj={};
var sum=0;
var len=0;

for(var i=0;i<arr.length;i++){


        sum+=arr[i];

        if(sum==0){
            console.log( "0"+"--"+i);
        }
        console.log(sum);
        if(obj.hasOwnProperty(sum)){

            //console.log("Already has "+sum+"@"+obj[sum])
            console.log(obj[sum]+1+"--"+i);                    

            //obj[sum]=i;
        }
        else
        {          
            obj[sum]=i;
        }





}

console.log(obj);


