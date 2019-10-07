import uuidv4 from 'uuid/v4';
import { Router } from 'express' 

const router = Router();

// get all students
router.get("/", (req, res, next) => {
    res.send(Object.values(req.context.models.students));
});

// get specify student
router.get("/:studentId", (req, res) => {
    res.send(req.context.models.students[req.params.studentId]);
});

// post student
router.post("/", (req, res) => {
    const id = uuidv4();
    const student = {
      id,
      name: req.body.name,
      class: req.body.class,
      userId: req.context.me
    };
    return res.send(student);
});

// delete student
router.delete('/:studentId', (req, res) => {
    var student = students[req.params.studentId];
    var response = {
        'message': 'Successfully Deleted',
        'status_code': 200,
        'data': student
    }
    return res.send(response);
});

export default router;