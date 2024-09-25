// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource evaluations', () => {
  test('summarization: only required params', async () => {
    const responsePromise = client.evaluations.summarization({ metrics: ['rouge', 'bleu'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summarization: required and optional params', async () => {
    const response = await client.evaluations.summarization({
      metrics: ['rouge', 'bleu'],
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('textGeneration: only required params', async () => {
    const responsePromise = client.evaluations.textGeneration({ metrics: ['perplexity', 'rouge', 'bleu'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('textGeneration: required and optional params', async () => {
    const response = await client.evaluations.textGeneration({
      metrics: ['perplexity', 'rouge', 'bleu'],
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
