//Function
function PrintMsg(){
	console.log("Hello Manorooban")
}
PrintMsg()

function sum()
{
	return 4+6
}

console.log(sum())

function sub( a, b){
	return a-b
}
console.log(sub(18,10))

//write a boolean function to find a given number is prime
function prime(n)
{
	if(n<2)
	{
		return false
    }
	else
	{
		for(i=2;i<n;i++)
		{
			if(n%i==0)
			{
				return false;
			}
			else{
				return true;
			}
		}
	}
}

console.log(prime(12))

//write recursive function to print numbers from 1 to n
function recursive(n)
{
	let a=0
	let b=1
	if(n==0)
	{
		return 0
	}
	else if(n==1)
	{
		return 1
	}
	else
	{
		return( n-1)+( n-2)
	}
}
console.log(recursive(6))
