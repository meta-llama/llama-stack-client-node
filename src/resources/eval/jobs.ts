// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvalAPI from './eval';

export class Jobs extends APIResource {
  retrieve(
    benchmarkId: string,
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvalAPI.EvaluateResponse> {
    return this._client.get(`/v1/eval/benchmarks/${benchmarkId}/jobs/${jobId}/result`, options);
  }

  cancel(benchmarkId: string, jobId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/eval/benchmarks/${benchmarkId}/jobs/${jobId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  status(
    benchmarkId: string,
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobStatusResponse | null> {
    return this._client.get(`/v1/eval/benchmarks/${benchmarkId}/jobs/${jobId}`, options);
  }
}

export type JobStatusResponse = 'completed' | 'in_progress' | 'failed' | 'scheduled' | null;

export declare namespace Jobs {
  export { type JobStatusResponse as JobStatusResponse };
}
