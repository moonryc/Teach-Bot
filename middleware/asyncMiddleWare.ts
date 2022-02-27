import { IReqSession } from '../types';
import { NextFunction } from 'express';

const asyncMiddleWare =
  (asyncFunction: any) => (req: IReqSession, res: any, next: NextFunction) => {
    Promise.resolve(asyncFunction(req, res, next)).catch((error) =>
      console.log(error)
    );
  };

export default asyncMiddleWare;
