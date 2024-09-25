// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource rewardScoring', () => {
  test('score: only required params', async () => {
    const responsePromise = client.rewardScoring.score({
      dialog_generations: [
        {
          dialog: [
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
          ],
          sampled_generations: [
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
          ],
        },
        {
          dialog: [
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
          ],
          sampled_generations: [
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
          ],
        },
        {
          dialog: [
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
          ],
          sampled_generations: [
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
            { content: 'string', role: 'user' },
          ],
        },
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

  test('score: required and optional params', async () => {
    const response = await client.rewardScoring.score({
      dialog_generations: [
        {
          dialog: [
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
          ],
          sampled_generations: [
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
          ],
        },
        {
          dialog: [
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
          ],
          sampled_generations: [
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
          ],
        },
        {
          dialog: [
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
          ],
          sampled_generations: [
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
            { content: 'string', role: 'user', context: 'string' },
          ],
        },
      ],
      model: 'model',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
