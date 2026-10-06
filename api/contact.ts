import type { Request, Response } from 'express';
import { contactHandler } from '../server';
import type { ApiFunctionRequest, ApiFunctionResponse } from './function-types';

const requestCounts = new Map<string, { count: number; resetAt: number }>();
const contactWindowMs = 15 * 60 * 1000;
const contactLimit = 5;

const isRateLimited = (request: ApiFunctionRequest) => {
  const forwardedFor = request.headers['x-forwarded-for'];
  const clientIp =
    (Array.isArray(forwardedFor) ? forwardedFor.at(-1) : forwardedFor?.split(',').at(-1))?.trim() ||
    request.socket.remoteAddress ||
    'unknown';
  const now = Date.now();
  const current = requestCounts.get(clientIp);

  if (!current || current.resetAt <= now) {
    requestCounts.set(clientIp, { count: 1, resetAt: now + contactWindowMs });
    return false;
  }

  if (current.count >= contactLimit) return true;
  current.count += 1;
  return false;
};

export default function handler(
  request: ApiFunctionRequest,
  response: ApiFunctionResponse,
) {
  if (isRateLimited(request)) {
    response.status(429).json({
      error: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
    });
    return;
  }

  const expressRequest = request as unknown as Request;
  const expressResponse = response as unknown as Response;
  void contactHandler(expressRequest, expressResponse);
}