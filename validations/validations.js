import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'email is incorrect').isEmail(),
  body('password', 'password is to short, min length 5 symbols').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'email is incorrect').isEmail(),
  body('password', 'password is to short, min length 5 symbols').isLength({ min: 5 }),
  body('fullName', 'name is too short, min length is 2 symbols').isLength({ min: 2 }),
  body('avatarUrl', 'avatar URL is incorrect').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'enter a title').isLength({ min: 3 }).isString(),
  body('text', 'enter a title').isLength({ min: 10 }).isString(),
  body('tags', 'enter a tag').optional().isString(),
  body('imageUrl', 'Wrong URL').optional().isString(),
];
