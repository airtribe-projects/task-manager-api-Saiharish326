const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tasks=[{
    id: 1,
    title: "Set up environment",
    description: "Install Node.js, npm, and git",
    completed: true,
  }]

app.get("/tasks",(req,res)=>{
    res.send(tasks)
})

app.get("/tasks/:id",(req,res)=>{
    const taskId = parseInt(req.params.id, 10);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        res.send(task);
    } else {
        res.status(404).send({ error: 'Task not found' });
    }
});

app.post("/tasks",(req,res)=>{
    const { title, description, completed } = req.body;

    if (!title || !description) {
        return res.status(400).send({ error: "Please provide title and description" });
    }

    const newTask = {
        id: tasks.length + 1, 
        title,
        description,
        completed: completed || false,
    };
    tasks.push(newTask);

    res.status(201).send(newTask);
});

app.put("/tasks/:id",(req,res)=>{
    const taskId = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
        const { title, description, completed } = req.body;

        if (typeof completed !== "boolean" && completed !== undefined) {
            return res.status(400).send({ error: "Invalid data type for 'completed'" });
        }
        const updatedTask = {
            ...tasks[taskIndex],
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        };
        tasks[taskIndex] = updatedTask;
        res.send(updatedTask);
    } else {
        res.status(404).send({ error: 'Task not found' });
    }
}); 

app.delete("/tasks/:id",(req,res)=>{
    const taskId = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(200).send();
    } else {
        res.status(404).send({ error: 'Task not found' });
    }
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;