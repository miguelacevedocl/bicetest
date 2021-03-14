import { Indicators } from '@shared';
import { BodyParams, Controller, Get, Post, QueryParams, UseBefore } from '@tsed/common';
import { BadRequest } from '@tsed/exceptions';


import { Request, Response } from 'express';
import  testService  from '../services/test.service';

@Controller('/')
export class ApiController {
  constructor() {}


  @Get('/test')
  async get(req: Request, res: Response): Promise<void> {
    const response = await testService.get();
    console.log(response)
    res.send(response)
}
}
