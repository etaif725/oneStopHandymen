import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .trim(),
  phone: z
    .string()
    .regex(/^\(\d{3}\)\s\d{3}-\d{4}$|^\d{10}$|^\d{3}-\d{3}-\d{4}$/, 'Please enter a valid phone number')
    .trim(),
  propertyType: z.enum(['residential', 'commercial', 'multi-unit', 'other'], {
    required_error: 'Please select a property type',
  }),
  serviceNeeded: z
    .array(z.string())
    .min(1, 'Please select at least one service')
    .max(10, 'Maximum 10 services can be selected'),
  description: z
    .string()
    .max(1000, 'Description must be less than 1000 characters')
    .trim()
    .optional()
    .or(z.literal('')),
  preferredContact: z.enum(['phone', 'email'], {
    required_error: 'Please select your preferred contact method',
  }),
  bestTimeToReach: z.string().optional(),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to the Privacy Policy to submit this form',
    }),
  marketingConsent: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
