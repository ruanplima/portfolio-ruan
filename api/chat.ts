import type { Request, Response } from 'express';
import { chatHandler } from '../server.ts';
import type { ApiFunctionRequest, ApiFunctionResponse } from './function-types';

export default async function handler(
  request: ApiFunctionRequest,
  response: ApiFunctionResponse,
) {
  await chatHandler(
    request as unknown as Request,
    response as unknown as Response,
  );
}