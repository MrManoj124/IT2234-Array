//array

let a =[1,8,3,4,5]
console.log(a)

for(let i=0;i<a.length;i++)
{
	console.log(a[i])
}

a.forEach((n) =>
{
	console.log(n)
})

//maximum number in the array using forEach
//print the nested array
//[[1,2,30],[5,6],[8,5,3]]


let max=0;
a.forEach((n)=>
{
	
		(max <n) && (max =n)
	
})
console.log("Max is: "+max) 


let b =[
	[1,2,30],
	[5,6],
	[8,5,3]
];

/*
for(let i=0;i<b.length;i++)
{
	for(let j=0;j<i;j++)
	{
		console.log(b[i][j])
	}
}*/

b.forEach((n) =>{
n.forEach((i) =>{
console.log(i)})
})

console.log("finding common elements: ")
/*
c =[4,5,6,3,7]
d =[8,3,2,1,5]
find the common elements between c and d */

let c =[4,5,6,3,7]
let d =[8,3,2,1,5]

for(let i=0;i<c.length;i++)
{
	for(let j=0;j<d.length;j++)
	{
		if(c[i] ==d[j])
		{
			console.log(c[i])
		}
	}
}

console.log("finding sum of 7: ")
//arr =[1,2,3,4,5,6]
//target =7
//write a code to find the all pairs that sum up to the target

let arr =[1,2,3,4,5,6]
for(let i=0;i<arr.length;i++){
for( let j=0;j<i;j++)
{
	if(arr[i]+arr[j] ==7)
	{
		console.log(arr[i])
		console.log(arr[j])
	}
}
}

//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array

/* let arr2 =[4,8,3,4,3,2,1,8,4]
for(let i=0;i<arr2.length;i++)
{
	
} */

//Array operation
//push and pop
arr3 =['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

//reverse the array using push and pop
//a b c d ->d c b a 

/* let arr4 =['a','b','c','d']
for(let i=0;i<arr4.length-1;i++)
{
	console.log(arr4.pop())
}
 */

//JSON
//{key:value}
let student ={regno:'2021/ICT/01',name:'James',age:21,course:'IT',skills:['Java','c++','JS']}
console.log(student)
console.log("Name: "+student.name)

let students =[
{regno:'2021/ICT/01',name:'James',age:21,course:'IT'},
{regno:'2021/ICT/02',name:'ravi',age:24,course:'IT'},
{regno:'2021/ICT/03',name:'gaya',age:23,course:'IT'}]
console.log(students)

//Define 10 student JSON
//store it in an array
//find the female students
//print the students who are following IT course
//print the max and average GPA among the students