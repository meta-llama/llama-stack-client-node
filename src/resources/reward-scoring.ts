// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RewardScoringAPI from './reward-scoring';
import * as Shared from './shared';

export class RewardScoringResource extends APIResource {
  score(params: RewardScoringScoreParams, options?: Core.RequestOptions): Core.APIPromise<RewardScoring> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/reward_scoring/score', {
      body,
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

export interface RewardScoring {
  scored_generations: Array<ScoredDialogGenerations>;
}

export interface ScoredDialogGenerations {
  dialog: Array<
    Shared.UserMessage | Shared.SystemMessage | Shared.ToolResponseMessage | Shared.CompletionMessage
  >;

  scored_generations: Array<ScoredDialogGenerations.ScoredGeneration>;
}

export namespace ScoredDialogGenerations {
  export interface ScoredGeneration {
    message:
      | Shared.UserMessage
      | Shared.SystemMessage
      | Shared.ToolResponseMessage
      | Shared.CompletionMessage;

    score: number;
  }
}

export interface RewardScoringScoreParams {
  /**
   * Body param:
   */
  dialog_generations: Array<RewardScoringScoreParams.DialogGeneration>;

  /**
   * Body param:
   */
  model: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace RewardScoringScoreParams {
  export interface DialogGeneration {
    dialog: Array<
      Shared.UserMessage | Shared.SystemMessage | Shared.ToolResponseMessage | Shared.CompletionMessage
    >;

    sampled_generations: Array<
      Shared.UserMessage | Shared.SystemMessage | Shared.ToolResponseMessage | Shared.CompletionMessage
    >;
  }
}

export namespace RewardScoringResource {
  export import RewardScoring = RewardScoringAPI.RewardScoring;
  export import ScoredDialogGenerations = RewardScoringAPI.ScoredDialogGenerations;
  export import RewardScoringScoreParams = RewardScoringAPI.RewardScoringScoreParams;
}
