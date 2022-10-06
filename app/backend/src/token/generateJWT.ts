import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env; 

export default class Token {
  static createToken(data: object): string {
    return jwt.sign(
      { ...data },
      JWT_SECRET as jwt.Secret, { expiresIn: '1d'});
  }
}
