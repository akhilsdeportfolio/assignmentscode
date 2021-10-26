
let str = "akhil";


function printSubsequence(input, output)
{
    // Base Case
    // if the input is empty print the output string
    if (input.length==0) {
        console.log( output);
        return;
    }
 
    
    printSubsequence(input.substring(1), output + input[0]);
    printSubsequence(input.substring(1), output);
 
    // output is passed without
    // including the Ist character
    // of Input string
    
}
printSubsequence(str,"");



let arr = [1,2,3];


function permu(arr)
{

}