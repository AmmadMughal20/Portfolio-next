import { z } from 'zod';

export const messageSchema = z.object({
    content: z.string().max(400, { message: 'Content must be most 400 characters' }),
    createdBy: z.string()
})