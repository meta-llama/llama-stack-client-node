// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as InferenceAPI from './inference';
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
  batch: Array<BatchInferenceChatCompletionResponse.Batch>;
}

export namespace BatchInferenceChatCompletionResponse {
  export interface Batch {
    /**
     * The complete response message
     */
    completion_message: Shared.CompletionMessage;

    /**
     * Optional log probabilities for generated tokens
     */
    logprobs?: Array<InferenceAPI.TokenLogProbs>;
  }
}

export interface BatchInferenceChatCompletionParams {
  messages_batch: Array<Array<Shared.Message>>;

  model: string;

  logprobs?: BatchInferenceChatCompletionParams.Logprobs;

  response_format?: Shared.ResponseFormat;

  sampling_params?: Shared.SamplingParams;

  tool_choice?: 'auto' | 'required';

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
