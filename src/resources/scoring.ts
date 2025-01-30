// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ScoringFunctionsAPI from './scoring-functions';
import * as Shared from './shared';

export class Scoring extends APIResource {
  score(body: ScoringScoreParams, options?: Core.RequestOptions): Core.APIPromise<ScoringScoreResponse> {
    return this._client.post('/v1/scoring/score', { body, ...options });
  }

  scoreBatch(
    body: ScoringScoreBatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScoringScoreBatchResponse> {
    return this._client.post('/v1/scoring/score-batch', { body, ...options });
  }
}

export interface ScoringScoreResponse {
  results: Record<string, Shared.ScoringResult>;
}

export interface ScoringScoreBatchResponse {
  results: Record<string, Shared.ScoringResult>;

  dataset_id?: string;
}

export interface ScoringScoreParams {
  input_rows: Array<Record<string, boolean | number | string | Array<unknown> | unknown | null>>;

  scoring_functions: Record<string, ScoringFunctionsAPI.ScoringFnParams | null>;
}

export interface ScoringScoreBatchParams {
  dataset_id: string;

  save_results_dataset: boolean;

  scoring_functions: Record<string, ScoringFunctionsAPI.ScoringFnParams | null>;
}

export declare namespace Scoring {
  export {
    type ScoringScoreResponse as ScoringScoreResponse,
    type ScoringScoreBatchResponse as ScoringScoreBatchResponse,
    type ScoringScoreParams as ScoringScoreParams,
    type ScoringScoreBatchParams as ScoringScoreBatchParams,
  };
}
