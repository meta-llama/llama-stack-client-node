// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvalAPI from './eval';

export class Jobs extends APIResource {
  retrieve(
    taskId: string,
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvalAPI.EvaluateResponse> {
    return this._client.get(`/v1/eval/tasks/${taskId}/jobs/${jobId}/result`, options);
  }

  cancel(taskId: string, jobId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/eval/tasks/${taskId}/jobs/${jobId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  status(
    taskId: string,
    jobId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobStatusResponse | null> {
    return this._client.get(`/v1/eval/tasks/${taskId}/jobs/${jobId}`, options);
  }
}

export type JobStatusResponse = 'completed' | 'in_progress' | 'failed' | 'scheduled' | null;

export declare namespace Jobs {
  export { type JobStatusResponse as JobStatusResponse };
}
