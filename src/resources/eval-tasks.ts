// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BenchmarksAPI from './benchmarks';

export class EvalTasks extends APIResource {
  retrieve(
    evalTaskId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarksAPI.Benchmark | null> {
    return this._client.get(`/v1/eval-tasks/${evalTaskId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<BenchmarksAPI.BenchmarkListResponse> {
    return (
      this._client.get('/v1/eval-tasks', options) as Core.APIPromise<{
        data: BenchmarksAPI.BenchmarkListResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  register(body: EvalTaskRegisterParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/eval-tasks', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type EvalTaskListResponse = Array<BenchmarksAPI.Benchmark>;

export interface EvalTaskRegisterParams {
  dataset_id: string;

  eval_task_id: string;

  scoring_functions: Array<string>;

  metadata?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  provider_benchmark_id?: string;

  provider_id?: string;
}

export declare namespace EvalTasks {
  export {
    type EvalTaskListResponse as EvalTaskListResponse,
    type EvalTaskRegisterParams as EvalTaskRegisterParams,
  };
}
