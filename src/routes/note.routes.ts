import { Router } from 'express';
import { NoteController } from '../controllers/note.controller';

const router = Router();
const noteController = new NoteController();

router.post('/', noteController.create);
router.get('/', noteController.getAll);
router.get('/:id', noteController.getOne);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.delete);

export default router;
