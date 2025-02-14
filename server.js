const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

let temp = []
let itr = 1;

app.get('/',(req,res)=>{
	/*res.send({
		//success:true,
		//msg: "all good"
	})*/
	res.status(200).send(temp);
});
app.get('/:id',(req,res)=>{
	const id = req.params.id;
	const resp = temp.filter(eq => eq.id == id);
	if (resp.length > 0){
	res.send(resp);
	}
	else {
		res.status(404).send({message:"Id doesnt exist!"});
	}
});

app.post('/post',(req,res)=>{
	//const { name, age, gender } = req.body;
	const data = {
		name : req.body.name,
		age : req.body.age,
		gender : req.body.gender,
		id : itr,
	};
	temp.push(data);
	itr++;
	res.status(201).send(data);
});

app.put('/update',(req,res)=>{
	const id = req.query.id;
	const newData = req.body;
	const index = temp.findIndex(obj => obj.id == id);
	if (index !== -1){
		temp[index] = {...temp[index], ...newData};
		res.status(200).send({message:"updated!",data: temp[index]});

	}
	else{
		res.status(404).send({message:"Entry doesnt exist!"});
	}
});


app.delete('/delete/:id',(req,res)=>{
	const id = req.params.id;
	const index = temp.findIndex(obj => obj.id == id);
	if (index !== -1){
		temp.splice(index,1);
		res.status(204).send({message:"Deletion completed"});
	}
	else{
		res.status(404).send({message:"Entry doesnt exist for deletion!"});
	}
});



app.listen(port,()=>{
	console.log("server is running on",port);
});

