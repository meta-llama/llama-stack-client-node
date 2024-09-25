// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource telemetry', () => {
  test('getTrace: only required params', async () => {
    const responsePromise = client.telemetry.getTrace({ trace_id: 'trace_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getTrace: required and optional params', async () => {
    const response = await client.telemetry.getTrace({
      trace_id: 'trace_id',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('log: only required params', async () => {
    const responsePromise = client.telemetry.log({
      event: {
        message: 'message',
        severity: 'verbose',
        span_id: 'span_id',
        timestamp: '2019-12-27T18:11:19.117Z',
        trace_id: 'trace_id',
        type: 'unstructured_log',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('log: required and optional params', async () => {
    const response = await client.telemetry.log({
      event: {
        message: 'message',
        severity: 'verbose',
        span_id: 'span_id',
        timestamp: '2019-12-27T18:11:19.117Z',
        trace_id: 'trace_id',
        type: 'unstructured_log',
        attributes: { foo: true },
      },
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
