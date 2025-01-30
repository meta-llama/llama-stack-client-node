// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource datasetio', () => {
  test('appendRows: only required params', async () => {
    const responsePromise = client.datasetio.appendRows({ dataset_id: 'dataset_id', rows: [{ foo: true }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('appendRows: required and optional params', async () => {
    const response = await client.datasetio.appendRows({ dataset_id: 'dataset_id', rows: [{ foo: true }] });
  });

  test('getRowsPaginated: only required params', async () => {
    const responsePromise = client.datasetio.getRowsPaginated({ dataset_id: 'dataset_id', rows_in_page: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getRowsPaginated: required and optional params', async () => {
    const response = await client.datasetio.getRowsPaginated({
      dataset_id: 'dataset_id',
      rows_in_page: 0,
      filter_condition: 'filter_condition',
      page_token: 'page_token',
    });
  });
});
