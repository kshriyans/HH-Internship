import Todo from "../model/userModel.js"

export const create = async(req, res) => {
    try {
        const TodoData = new Todo(req.body);
        const savedTodo = await TodoData.save();
        res.status(200).json(savedTodo);
    } catch (error){
        res.status(500).json({error: "Internal server error"});
    }
};

export const fetchall = async (req,res)=>{
    try {
        const Todos = await Todo.find();
        if(Todos.length ===0){
            return res.status(404).json({error: "No Tasks Scheduled"});
        }
        res.status(200).json(Todos);
    } catch (error){
        res.status(500).json({error: "Internal server error"});
    }
};

export const fetch = async (req,res)=>{
    try {
        const id = req.params.id;
        const TodoExist = await Todo.findOne({_id:id});
        if(!TodoExist){
            return res.status(404).json({error: "Task not found"});
        }
        res.status(200).json(TodoExist);
    } catch (error){
        res.status(500).json({error: "Internal server error"});
    }
};

export const update = async(req, res)=>{
    try{
        const id = req.params.id;
        const TodoExist = await Todo.findOne({_id:id});
        if (!TodoExist){
            return res.status(404).json({message: "Task not found"});
        }
        const updateTodo = await Todo.findByIdAndUpdate(id, req.body, {new:true});
        res.status(201).json(updateTodo);

    }catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
};

export const deleteTodos = async (req, res) => {
    try{
        const id = req.params.id;
        const TodoExist = await Todo.findOne({_id:id});
        if (!TodoExist){
            return res.status(404).json({message: "Task not found"});
        }
        await Todo.findByIdAndDelete(id);
        res.status(201).json({message: "Task deleted successfully"});

    } catch (error){
        res.status(500).json({error: "Internal server error"});
    }
};