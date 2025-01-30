// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Datasetio extends APIResource {
  appendRows(body: DatasetioAppendRowsParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/datasetio/rows', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  getRowsPaginated(
    query: DatasetioGetRowsPaginatedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaginatedRowsResult> {
    return this._client.get('/v1/datasetio/rows', { query, ...options });
  }
}

export interface PaginatedRowsResult {
  rows: Array<Record<string, boolean | number | string | Array<unknown> | unknown | null>>;

  total_count: number;

  next_page_token?: string;
}

export interface DatasetioAppendRowsParams {
  dataset_id: string;

  rows: Array<Record<string, boolean | number | string | Array<unknown> | unknown | null>>;
}

export interface DatasetioGetRowsPaginatedParams {
  dataset_id: string;

  rows_in_page: number;

  filter_condition?: string;

  page_token?: string;
}

export declare namespace Datasetio {
  export {
    type PaginatedRowsResult as PaginatedRowsResult,
    type DatasetioAppendRowsParams as DatasetioAppendRowsParams,
    type DatasetioGetRowsPaginatedParams as DatasetioGetRowsPaginatedParams,
  };
}
