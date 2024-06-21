import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../contollers/StudentsController';

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getALLStudents);
router.get('/students/:major', StudentsController.getALLStudentsByMajor);

export default router;
