function convert(jsobj){
	const newJSON = JSON.stringify(jsobj);
	return newJSON;
}

 fetchres = async () => {
	const res = await fetch('https://apiv1.dev.hiringhood.ai/market/getAllContests?userId=67a4564ed53e131dd4205a18');
	if(res.ok){
		const resdata = await res.json();
		console.log(resdata);
		//const newJSON = JSON.stringify(resdata);
		console.log(convert(resdata));
	}
	else {
		console.log("error");
	}
}
fetchres();