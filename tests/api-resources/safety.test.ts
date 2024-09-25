// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource safety', () => {
  test('runShield: only required params', async () => {
    const responsePromise = client.safety.runShield({
      messages: [
        { content: 'string', role: 'user' },
        { content: 'string', role: 'user' },
        { content: 'string', role: 'user' },
      ],
      params: { foo: true },
      shield_type: 'shield_type',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('runShield: required and optional params', async () => {
    const response = await client.safety.runShield({
      messages: [
        { content: 'string', role: 'user', context: 'string' },
        { content: 'string', role: 'user', context: 'string' },
        { content: 'string', role: 'user', context: 'string' },
      ],
      params: { foo: true },
      shield_type: 'shield_type',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
