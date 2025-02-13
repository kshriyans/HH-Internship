function hello1(){
	console.log("Hello after 2 seconds");
}
function hello2(){
	console.log("Hello every 3 seconds");
}

setTimeout(hello1,2000);
setInterval(hello2,3000);

