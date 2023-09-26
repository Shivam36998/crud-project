import express from 'express';
const router = express.Router();
import { studentController } from "../controllers/studentControllers.js";

router.get('/', studentController.allDoc);
router.post('/', studentController.createDoc);
router.get('/edit/:id', studentController.editDoc);
router.post('/update/:id', studentController.updateDocById);
router.post('/delete/:id', studentController.deleteDocById);

export default router;