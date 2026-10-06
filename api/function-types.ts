import type { IncomingMessage, ServerResponse } from 'node:http';

export type ApiFunctionRequest = IncomingMessage & {
  body?: unknown;
};

export type ApiFunctionResponse = ServerResponse & {
  status(code: number): ApiFunctionResponse;
  json(body: unknown): ApiFunctionResponse;
};