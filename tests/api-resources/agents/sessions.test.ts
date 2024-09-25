// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource sessions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.sessions.create({
      agent_id: 'agent_id',
      session_name: 'session_name',
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
    const response = await client.agents.sessions.create({
      agent_id: 'agent_id',
      session_name: 'session_name',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.agents.sessions.retrieve({
      agent_id: 'agent_id',
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

  test('retrieve: required and optional params', async () => {
    const response = await client.agents.sessions.retrieve({
      agent_id: 'agent_id',
      session_id: 'session_id',
      turn_ids: ['string', 'string', 'string'],
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.agents.sessions.delete({ agent_id: 'agent_id', session_id: 'session_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.agents.sessions.delete({
      agent_id: 'agent_id',
      session_id: 'session_id',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
