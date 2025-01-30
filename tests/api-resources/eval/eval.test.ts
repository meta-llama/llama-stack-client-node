// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource eval', () => {
  test('evaluateRows: only required params', async () => {
    const responsePromise = client.eval.evaluateRows('task_id', {
      input_rows: [{ foo: true }],
      scoring_functions: ['string'],
      task_config: {
        eval_candidate: { model: 'model', sampling_params: { strategy: { type: 'greedy' } }, type: 'model' },
        type: 'benchmark',
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

  test('evaluateRows: required and optional params', async () => {
    const response = await client.eval.evaluateRows('task_id', {
      input_rows: [{ foo: true }],
      scoring_functions: ['string'],
      task_config: {
        eval_candidate: {
          model: 'model',
          sampling_params: { strategy: { type: 'greedy' }, max_tokens: 0, repetition_penalty: 0 },
          type: 'model',
          system_message: { content: 'string', role: 'system' },
        },
        type: 'benchmark',
        num_examples: 0,
      },
    });
  });

  test('runEval: only required params', async () => {
    const responsePromise = client.eval.runEval('task_id', {
      task_config: {
        eval_candidate: { model: 'model', sampling_params: { strategy: { type: 'greedy' } }, type: 'model' },
        type: 'benchmark',
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

  test('runEval: required and optional params', async () => {
    const response = await client.eval.runEval('task_id', {
      task_config: {
        eval_candidate: {
          model: 'model',
          sampling_params: { strategy: { type: 'greedy' }, max_tokens: 0, repetition_penalty: 0 },
          type: 'model',
          system_message: { content: 'string', role: 'system' },
        },
        type: 'benchmark',
        num_examples: 0,
      },
    });
  });
});
