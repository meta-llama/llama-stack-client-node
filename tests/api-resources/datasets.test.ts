// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource datasets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.datasets.create({
      dataset: { columns: { foo: 'dialog' }, content_url: 'https://example.com' },
      uuid: 'uuid',
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
    const response = await client.datasets.create({
      dataset: { columns: { foo: 'dialog' }, content_url: 'https://example.com', metadata: { foo: true } },
      uuid: 'uuid',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.datasets.delete({ dataset_uuid: 'dataset_uuid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.datasets.delete({
      dataset_uuid: 'dataset_uuid',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.datasets.get({ dataset_uuid: 'dataset_uuid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.datasets.get({
      dataset_uuid: 'dataset_uuid',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
