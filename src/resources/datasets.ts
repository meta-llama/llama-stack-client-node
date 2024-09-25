// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DatasetsAPI from './datasets';

export class Datasets extends APIResource {
  create(params: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/datasets/create', {
      body,
      ...options,
      headers: {
        Accept: '*/*',
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  delete(params: DatasetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/datasets/delete', {
      body,
      ...options,
      headers: {
        Accept: '*/*',
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  get(params: DatasetGetParams, options?: Core.RequestOptions): Core.APIPromise<TrainEvalDataset> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/datasets/get', {
      query,
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface TrainEvalDataset {
  columns: Record<string, 'dialog' | 'text' | 'media' | 'number' | 'json'>;

  content_url: string;

  metadata?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;
}

export interface DatasetCreateParams {
  /**
   * Body param:
   */
  dataset: TrainEvalDataset;

  /**
   * Body param:
   */
  uuid: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface DatasetDeleteParams {
  /**
   * Body param:
   */
  dataset_uuid: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface DatasetGetParams {
  /**
   * Query param:
   */
  dataset_uuid: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Datasets {
  export import TrainEvalDataset = DatasetsAPI.TrainEvalDataset;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
}
