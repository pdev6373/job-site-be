import { z } from 'zod';

export const SignUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
});

export interface ISignUpInput {
  email: string;
  password: string;
  longitude?: number;
  latitude?: number;
}
