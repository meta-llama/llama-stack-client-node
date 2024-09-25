// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource memory', () => {
  test('create: only required params', async () => {
    const responsePromise = client.memory.create({ body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.memory.create({
      body: {},
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.memory.retrieve({ bank_id: 'bank_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.memory.retrieve({
      bank_id: 'bank_id',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.memory.update({
      bank_id: 'bank_id',
      documents: [
        { content: 'string', document_id: 'document_id', metadata: { foo: true } },
        { content: 'string', document_id: 'document_id', metadata: { foo: true } },
        { content: 'string', document_id: 'document_id', metadata: { foo: true } },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.memory.update({
      bank_id: 'bank_id',
      documents: [
        { content: 'string', document_id: 'document_id', metadata: { foo: true }, mime_type: 'mime_type' },
        { content: 'string', document_id: 'document_id', metadata: { foo: true }, mime_type: 'mime_type' },
        { content: 'string', document_id: 'document_id', metadata: { foo: true }, mime_type: 'mime_type' },
      ],
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('list', async () => {
    const responsePromise = client.memory.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.memory.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      LlamaStackClient.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.memory.list(
        { 'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LlamaStackClient.NotFoundError);
  });

  test('drop: only required params', async () => {
    const responsePromise = client.memory.drop({ bank_id: 'bank_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('drop: required and optional params', async () => {
    const response = await client.memory.drop({
      bank_id: 'bank_id',
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('insert: only required params', async () => {
    const responsePromise = client.memory.insert({
      bank_id: 'bank_id',
      documents: [
        { content: 'string', document_id: 'document_id', metadata: { foo: true } },
        { content: 'string', document_id: 'document_id', metadata: { foo: true } },
        { content: 'string', document_id: 'document_id', metadata: { foo: true } },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('insert: required and optional params', async () => {
    const response = await client.memory.insert({
      bank_id: 'bank_id',
      documents: [
        { content: 'string', document_id: 'document_id', metadata: { foo: true }, mime_type: 'mime_type' },
        { content: 'string', document_id: 'document_id', metadata: { foo: true }, mime_type: 'mime_type' },
        { content: 'string', document_id: 'document_id', metadata: { foo: true }, mime_type: 'mime_type' },
      ],
      ttl_seconds: 0,
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('query: only required params', async () => {
    const responsePromise = client.memory.query({ bank_id: 'bank_id', query: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.memory.query({
      bank_id: 'bank_id',
      query: 'string',
      params: { foo: true },
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
