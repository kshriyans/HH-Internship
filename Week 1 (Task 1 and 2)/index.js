function hello1(){
	console.log("hello after 2 seconds");
};
function hello2(){
	console.log("hello every 3 seconds");
}
function convert(jsobj){
	const newJSON = JSON.stringify(jsobj);
	return newJSON;
}
export {hello1,hello2,convert};