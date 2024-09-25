// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource agents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.create({
      agent_config: {
        enable_session_persistence: true,
        instructions: 'instructions',
        max_infer_iters: 0,
        model: 'model',
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

  test('create: required and optional params', async () => {
    const response = await client.agents.create({
      agent_config: {
        enable_session_persistence: true,
        instructions: 'instructions',
        max_infer_iters: 0,
        model: 'model',
        input_shields: ['string', 'string', 'string'],
        output_shields: ['string', 'string', 'string'],
        sampling_params: {
          strategy: 'greedy',
          max_tokens: 0,
          repetition_penalty: 0,
          temperature: 0,
          top_k: 0,
          top_p: 0,
        },
        tool_choice: 'auto',
        tool_prompt_format: 'json',
        tools: [
          {
            api_key: 'api_key',
            engine: 'bing',
            type: 'brave_search',
            input_shields: ['string', 'string', 'string'],
            output_shields: ['string', 'string', 'string'],
            remote_execution: {
              method: 'GET',
              url: 'https://example.com',
              body: { foo: true },
              headers: { foo: true },
              params: { foo: true },
            },
          },
          {
            api_key: 'api_key',
            engine: 'bing',
            type: 'brave_search',
            input_shields: ['string', 'string', 'string'],
            output_shields: ['string', 'string', 'string'],
            remote_execution: {
              method: 'GET',
              url: 'https://example.com',
              body: { foo: true },
              headers: { foo: true },
              params: { foo: true },
            },
          },
          {
            api_key: 'api_key',
            engine: 'bing',
            type: 'brave_search',
            input_shields: ['string', 'string', 'string'],
            output_shields: ['string', 'string', 'string'],
            remote_execution: {
              method: 'GET',
              url: 'https://example.com',
              body: { foo: true },
              headers: { foo: true },
              params: { foo: true },
            },
          },
        ],
      },
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.agents.delete({ agent_id: 'agent_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.agents.delete({
      agent_id: 'agent_id',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
