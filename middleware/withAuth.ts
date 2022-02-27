import { Response, NextFunction } from 'express';
import { IReqSession } from '../types';

const withAuth = (req: IReqSession, res: Response, next: NextFunction) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

export default withAuth;
