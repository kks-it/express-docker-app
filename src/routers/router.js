import {Router} from 'express';


const router = Router();

const tasks = [];

router.get("/", (req, res) => {
    return res.status(200).json({
        data: {
            message: "Welcome to the ToDo applcation"
        }
    });
})

router.post("/add", (req, res) => {
    const {task} = req.body;
    tasks.push(task);
    return res.status(200).json({
        data: {
            message: "Task created successfully",
            task
        }
    })
})

router.get("/task", (req, res) => {
    return res.status(200).json({
        data: {
            message: "All ToDo tasks",
            tasks
        }
    })
})

router.get("/task/:id", (req, res) => {
    const title = req.params.id;
    const task = tasks.find( (task) => (task.title === title));
    return res.status(200).json({
        data: {
            message: "ToDo task",
            task
        }
    })
})

export default router;