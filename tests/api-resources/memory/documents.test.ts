// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource documents', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.memory.documents.retrieve({
      bank_id: 'bank_id',
      document_ids: ['string', 'string', 'string'],
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
    const response = await client.memory.documents.retrieve({
      bank_id: 'bank_id',
      document_ids: ['string', 'string', 'string'],
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.memory.documents.delete({
      bank_id: 'bank_id',
      document_ids: ['string', 'string', 'string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.memory.documents.delete({
      bank_id: 'bank_id',
      document_ids: ['string', 'string', 'string'],
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
