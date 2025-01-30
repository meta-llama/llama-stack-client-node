// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class EvalTasks extends APIResource {
  retrieve(evalTaskId: string, options?: Core.RequestOptions): Core.APIPromise<EvalTask | null> {
    return this._client.get(`/v1/eval-tasks/${evalTaskId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<EvalTaskListResponse> {
    return (
      this._client.get('/v1/eval-tasks', options) as Core.APIPromise<{ data: EvalTaskListResponse }>
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

export interface EvalTask {
  dataset_id: string;

  identifier: string;

  metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  provider_id: string;

  provider_resource_id: string;

  scoring_functions: Array<string>;

  type: 'eval_task';
}

export interface ListEvalTasksResponse {
  data: Array<EvalTask>;
}

export type EvalTaskListResponse = Array<EvalTask>;

export interface EvalTaskRegisterParams {
  dataset_id: string;

  eval_task_id: string;

  scoring_functions: Array<string>;

  metadata?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  provider_eval_task_id?: string;

  provider_id?: string;
}

export declare namespace EvalTasks {
  export {
    type EvalTask as EvalTask,
    type ListEvalTasksResponse as ListEvalTasksResponse,
    type EvalTaskListResponse as EvalTaskListResponse,
    type EvalTaskRegisterParams as EvalTaskRegisterParams,
  };
}
