import { Request } from 'express';

export interface IReqSession extends Request {
  session: any;
}
