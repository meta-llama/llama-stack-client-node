// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Datasets extends APIResource {
  retrieve(
    datasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetRetrieveResponse | null> {
    return this._client.get(`/v1/datasets/${datasetId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<DatasetListResponse> {
    return (
      this._client.get('/v1/datasets', options) as Core.APIPromise<{ data: DatasetListResponse }>
    )._thenUnwrap((obj) => obj.data);
  }

  register(body: DatasetRegisterParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/datasets', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  unregister(datasetId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/datasets/${datasetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ListDatasetsResponse {
  data: DatasetListResponse;
}

export interface DatasetRetrieveResponse {
  dataset_schema: Record<string, Shared.ParamType>;

  identifier: string;

  metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  provider_id: string;

  provider_resource_id: string;

  type: 'dataset';

  url: Shared.URL;
}

export type DatasetListResponse = Array<DatasetListResponse.DatasetListResponseItem>;

export namespace DatasetListResponse {
  export interface DatasetListResponseItem {
    dataset_schema: Record<string, Shared.ParamType>;

    identifier: string;

    metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    provider_id: string;

    provider_resource_id: string;

    type: 'dataset';

    url: Shared.URL;
  }
}

export interface DatasetRegisterParams {
  dataset_id: string;

  dataset_schema: Record<string, Shared.ParamType>;

  url: Shared.URL;

  metadata?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  provider_dataset_id?: string;

  provider_id?: string;
}

export declare namespace Datasets {
  export {
    type ListDatasetsResponse as ListDatasetsResponse,
    type DatasetRetrieveResponse as DatasetRetrieveResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetRegisterParams as DatasetRegisterParams,
  };
}
