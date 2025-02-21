// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class BatchInference extends APIResource {
  chatCompletion(
    body: BatchInferenceChatCompletionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BatchInferenceChatCompletionResponse> {
    return this._client.post('/v1/batch-inference/chat-completion', { body, ...options });
  }

  completion(
    body: BatchInferenceCompletionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BatchCompletion> {
    return this._client.post('/v1/batch-inference/completion', { body, ...options });
  }
}

export interface BatchInferenceChatCompletionResponse {
  batch: Array<Shared.ChatCompletionResponse>;
}

export interface BatchInferenceChatCompletionParams {
  messages_batch: Array<Array<Shared.Message>>;

  model: string;

  logprobs?: BatchInferenceChatCompletionParams.Logprobs;

  /**
   * Configuration for JSON schema-guided response generation.
   */
  response_format?: Shared.ResponseFormat;

  sampling_params?: Shared.SamplingParams;

  /**
   * Whether tool use is required or automatic. This is a hint to the model which may
   * not be followed. It depends on the Instruction Following capabilities of the
   * model.
   */
  tool_choice?: 'auto' | 'required' | 'none';

  /**
   * Prompt format for calling custom / zero shot tools.
   */
  tool_prompt_format?: 'json' | 'function_tag' | 'python_list';

  tools?: Array<BatchInferenceChatCompletionParams.Tool>;
}

export namespace BatchInferenceChatCompletionParams {
  export interface Logprobs {
    /**
     * How many tokens (for each position) to return log probabilities for.
     */
    top_k?: number;
  }

  export interface Tool {
    tool_name: 'brave_search' | 'wolfram_alpha' | 'photogen' | 'code_interpreter' | (string & {});

    description?: string;

    parameters?: Record<string, Shared.ToolParamDefinition>;
  }
}

export interface BatchInferenceCompletionParams {
  content_batch: Array<Shared.InterleavedContent>;

  model: string;

  logprobs?: BatchInferenceCompletionParams.Logprobs;

  /**
   * Configuration for JSON schema-guided response generation.
   */
  response_format?: Shared.ResponseFormat;

  sampling_params?: Shared.SamplingParams;
}

export namespace BatchInferenceCompletionParams {
  export interface Logprobs {
    /**
     * How many tokens (for each position) to return log probabilities for.
     */
    top_k?: number;
  }
}

export declare namespace BatchInference {
  export {
    type BatchInferenceChatCompletionResponse as BatchInferenceChatCompletionResponse,
    type BatchInferenceChatCompletionParams as BatchInferenceChatCompletionParams,
    type BatchInferenceCompletionParams as BatchInferenceCompletionParams,
  };
}
