// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource inference', () => {
  test('chatCompletion: only required params', async () => {
    const responsePromise = client.inference.chatCompletion({
      messages: [
        { content: 'string', role: 'user' },
        { content: 'string', role: 'user' },
        { content: 'string', role: 'user' },
      ],
      model: 'model',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('chatCompletion: required and optional params', async () => {
    const response = await client.inference.chatCompletion({
      messages: [
        { content: 'string', role: 'user', context: 'string' },
        { content: 'string', role: 'user', context: 'string' },
        { content: 'string', role: 'user', context: 'string' },
      ],
      model: 'model',
      logprobs: { top_k: 0 },
      sampling_params: {
        strategy: 'greedy',
        max_tokens: 0,
        repetition_penalty: 0,
        temperature: 0,
        top_k: 0,
        top_p: 0,
      },
      stream: false,
      tool_choice: 'auto',
      tool_prompt_format: 'json',
      tools: [
        {
          tool_name: 'brave_search',
          description: 'description',
          parameters: { foo: { param_type: 'param_type', description: 'description', required: true } },
        },
        {
          tool_name: 'brave_search',
          description: 'description',
          parameters: { foo: { param_type: 'param_type', description: 'description', required: true } },
        },
        {
          tool_name: 'brave_search',
          description: 'description',
          parameters: { foo: { param_type: 'param_type', description: 'description', required: true } },
        },
      ],
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('completion: only required params', async () => {
    const responsePromise = client.inference.completion({ content: 'string', model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('completion: required and optional params', async () => {
    const response = await client.inference.completion({
      content: 'string',
      model: 'model',
      logprobs: { top_k: 0 },
      sampling_params: {
        strategy: 'greedy',
        max_tokens: 0,
        repetition_penalty: 0,
        temperature: 0,
        top_k: 0,
        top_p: 0,
      },
      stream: true,
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
