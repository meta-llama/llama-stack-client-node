// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource turns', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.turns.create({
      agent_id: 'agent_id',
      messages: [
        { content: 'string', role: 'user' },
        { content: 'string', role: 'user' },
        { content: 'string', role: 'user' },
      ],
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.agents.turns.create({
      agent_id: 'agent_id',
      messages: [
        { content: 'string', role: 'user', context: 'string' },
        { content: 'string', role: 'user', context: 'string' },
        { content: 'string', role: 'user', context: 'string' },
      ],
      session_id: 'session_id',
      attachments: [
        { content: 'string', mime_type: 'mime_type' },
        { content: 'string', mime_type: 'mime_type' },
        { content: 'string', mime_type: 'mime_type' },
      ],
      stream: false,
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.agents.turns.retrieve({ agent_id: 'agent_id', turn_id: 'turn_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.agents.turns.retrieve({
      agent_id: 'agent_id',
      turn_id: 'turn_id',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
