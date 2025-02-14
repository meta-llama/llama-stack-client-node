// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ScoringFunctionsAPI from '../scoring-functions';
import * as Shared from '../shared';
import * as JobsAPI from './jobs';
import { JobStatusResponse, Jobs } from './jobs';

export class Eval extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  evaluateRows(
    taskId: string,
    body: EvalEvaluateRowsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateResponse> {
    return this._client.post(`/v1/eval/tasks/${taskId}/evaluations`, { body, ...options });
  }

  evaluateRowsAlpha(
    benchmarkId: string,
    body: EvalEvaluateRowsAlphaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateResponse> {
    return this._client.post(`/v1/eval/benchmarks/${benchmarkId}/evaluations`, { body, ...options });
  }

  runEval(taskId: string, body: EvalRunEvalParams, options?: Core.RequestOptions): Core.APIPromise<Job> {
    return this._client.post(`/v1/eval/tasks/${taskId}/jobs`, { body, ...options });
  }

  runEvalAlpha(
    benchmarkId: string,
    body: EvalRunEvalAlphaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Job> {
    return this._client.post(`/v1/eval/benchmarks/${benchmarkId}/jobs`, { body, ...options });
  }
}

export type EvalCandidate = EvalCandidate.ModelCandidate | EvalCandidate.AgentCandidate;

export namespace EvalCandidate {
  export interface ModelCandidate {
    model: string;

    sampling_params: Shared.SamplingParams;

    type: 'model';

    /**
     * A system message providing instructions or context to the model.
     */
    system_message?: Shared.SystemMessage;
  }

  export interface AgentCandidate {
    config: Shared.AgentConfig;

    type: 'agent';
  }
}

export interface EvalTaskConfig {
  eval_candidate: EvalCandidate;

  scoring_params: Record<string, ScoringFunctionsAPI.ScoringFnParams>;

  type: 'benchmark';

  num_examples?: number;
}

export interface EvaluateResponse {
  generations: Array<Record<string, boolean | number | string | Array<unknown> | unknown | null>>;

  scores: Record<string, Shared.ScoringResult>;
}

export interface Job {
  job_id: string;
}

export interface EvalEvaluateRowsParams {
  input_rows: Array<Record<string, boolean | number | string | Array<unknown> | unknown | null>>;

  scoring_functions: Array<string>;

  task_config: EvalTaskConfig;
}

export interface EvalEvaluateRowsAlphaParams {
  input_rows: Array<Record<string, boolean | number | string | Array<unknown> | unknown | null>>;

  scoring_functions: Array<string>;

  task_config: EvalTaskConfig;
}

export interface EvalRunEvalParams {
  task_config: EvalTaskConfig;
}

export interface EvalRunEvalAlphaParams {
  task_config: EvalTaskConfig;
}

Eval.Jobs = Jobs;

export declare namespace Eval {
  export {
    type EvalCandidate as EvalCandidate,
    type EvalTaskConfig as EvalTaskConfig,
    type EvaluateResponse as EvaluateResponse,
    type Job as Job,
    type EvalEvaluateRowsParams as EvalEvaluateRowsParams,
    type EvalEvaluateRowsAlphaParams as EvalEvaluateRowsAlphaParams,
    type EvalRunEvalParams as EvalRunEvalParams,
    type EvalRunEvalAlphaParams as EvalRunEvalAlphaParams,
  };

  export { Jobs as Jobs, type JobStatusResponse as JobStatusResponse };
}
