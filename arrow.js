//arrow Function

const msg= ()=>{console.log("Hello Js")}
	//console.log(msg)
msg()

//write  an arrow Function to sum 2 Numbes
const add=(a,b)=>{return a+b}
console.log(add(4,5))

//default parameter
const mult=(a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))

//Rest parameter
const mysum =(...n)=>
{
	 
	console.log(n)
}
mysum(4,5,6,10,5,56,70,20,21,22,23)

const mysum2 = (...n)=>
{
	return n.reduce((t,i)=>t=t+i)
}	
console.log(mysum2(1,2,8,9,2)) 	//print sum of total num
