// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EvaluationsAPI from './evaluations';
import * as EvaluateAPI from './evaluate/evaluate';

export class Evaluations extends APIResource {
  summarization(
    params: EvaluationSummarizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateAPI.EvaluationJob> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/evaluate/summarization/', {
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

  textGeneration(
    params: EvaluationTextGenerationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateAPI.EvaluationJob> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/evaluate/text_generation/', {
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

export interface EvaluationSummarizationParams {
  /**
   * Body param:
   */
  metrics: Array<'rouge' | 'bleu'>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface EvaluationTextGenerationParams {
  /**
   * Body param:
   */
  metrics: Array<'perplexity' | 'rouge' | 'bleu'>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Evaluations {
  export import EvaluationSummarizationParams = EvaluationsAPI.EvaluationSummarizationParams;
  export import EvaluationTextGenerationParams = EvaluationsAPI.EvaluationTextGenerationParams;
}
