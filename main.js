let a=prompt("Enter the number")
let tem=a;
let count=0
let boo=false
document.write("Given Number "+tem+"<br>")
for (i=0;i<tem.length;i++){
	count=count+parseInt(tem[i])
	console.log(count);
}
if(count%2===0){
	document.write("Given number Digit add total  is Even")
}
else{
	document.write("Given number Digit add total is odd")

}

let cou=0
let check=(n)=>{
	while(n>0){
		let b=n%10
		n=parseInt(n/10)
		cou++

	}

}

let arr=[234,567,90,23,4523,12]
let even=[]
let odd=[]
document.write("<br/><br/>"+`Given Array [${arr}]`)

for(i=0;i<arr.length;i++){
	check(arr[i])
	let tem=String(arr[i])
	console.log(cou);
	let count=0
	for(j=0;j<cou;j++){
		count=count+parseInt(tem[j])
		
	}
	if(count%2===0){
		even.push({
			num:arr[i],
			total:count

		})
	}
	else{
		odd.push({
			num:arr[i],
			total:count

		})

	}
	cou=0
}
document.write("<br/><br/>"+`Even Array is [${JSON.stringify(even)}]`)
document.write("<br/><br/>"+`Odd Array is [${JSON.stringify(odd)}]`)



