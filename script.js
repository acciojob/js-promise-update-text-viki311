//your JS code here. If required.
function ans{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000);
	})
}
	ans().then((res)=>document.getElementById("output").innerHTML=`<p>${res}</p>`)