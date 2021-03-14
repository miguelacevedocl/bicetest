import { Request, Response } from 'express';


export interface AppRequest extends Request {
  token: string; // Because express-bearer-token does not come with types, we include this type in the app request
}

export type AppResponse = Response