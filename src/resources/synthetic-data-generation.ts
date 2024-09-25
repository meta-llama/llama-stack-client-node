// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SyntheticDataGenerationAPI from './synthetic-data-generation';
import * as RewardScoringAPI from './reward-scoring';
import * as Shared from './shared';

export class SyntheticDataGenerationResource extends APIResource {
  generate(
    params: SyntheticDataGenerationGenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SyntheticDataGeneration> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/synthetic_data_generation/generate', {
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

export interface SyntheticDataGeneration {
  synthetic_data: Array<RewardScoringAPI.ScoredDialogGenerations>;

  statistics?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;
}

export interface SyntheticDataGenerationGenerateParams {
  /**
   * Body param:
   */
  dialogs: Array<
    Shared.UserMessage | Shared.SystemMessage | Shared.ToolResponseMessage | Shared.CompletionMessage
  >;

  /**
   * Body param:
   */
  filtering_function: 'none' | 'random' | 'top_k' | 'top_p' | 'top_k_top_p' | 'sigmoid';

  /**
   * Body param:
   */
  model?: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace SyntheticDataGenerationResource {
  export import SyntheticDataGeneration = SyntheticDataGenerationAPI.SyntheticDataGeneration;
  export import SyntheticDataGenerationGenerateParams = SyntheticDataGenerationAPI.SyntheticDataGenerationGenerateParams;
}
