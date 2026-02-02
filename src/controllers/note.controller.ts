import { Request, Response, NextFunction } from 'express';
import prisma from '../prisma';
import { AppError } from '../utils/errorHandler';

export class NoteController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, content, category } = req.body;

            if (!title || !content) {
                throw new AppError('Title and content are required', 400);
            }

            const note = await prisma.note.create({
                data: { title, content, category },
            });

            res.status(201).json(note);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const notes = await prisma.note.findMany();
            res.status(200).json(notes);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const noteId = parseInt(id as string);

            if (isNaN(noteId)) {
                throw new AppError('Invalid ID format', 400);
            }

            const note = await prisma.note.findUnique({
                where: { id: noteId },
            });

            if (!note) {
                throw new AppError('Note not found', 404);
            }

            res.status(200).json(note);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { title, content, category } = req.body;
            const noteId = parseInt(id as string);

            if (isNaN(noteId)) {
                throw new AppError('Invalid ID format', 400);
            }

            const note = await prisma.note.update({
                where: { id: noteId },
                data: { title, content, category },
            });

            res.status(200).json(note);
        } catch (error: any) {
            if (error.code === 'P2025') {
                return next(new AppError('Note not found', 404));
            }
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const noteId = parseInt(id as string);

            if (isNaN(noteId)) {
                throw new AppError('Invalid ID format', 400);
            }

            await prisma.note.delete({
                where: { id: noteId },
            });

            res.status(204).send();
        } catch (error: any) {
            if (error.code === 'P2025') {
                return next(new AppError('Note not found', 404));
            }
            next(error);
        }
    }
}
