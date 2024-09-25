// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as InferenceAPI from './inference';
import * as Shared from '../shared';
import * as AgentsAPI from '../agents/agents';
import * as EmbeddingsAPI from './embeddings';
import { Stream } from '../../streaming';

export class Inference extends APIResource {
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);

  chatCompletion(
    params: InferenceChatCompletionParamsNonStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<InferenceChatCompletionResponse>;
  chatCompletion(
    params: InferenceChatCompletionParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<InferenceChatCompletionResponse>>;
  chatCompletion(
    params: InferenceChatCompletionParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<InferenceChatCompletionResponse> | InferenceChatCompletionResponse>;
  chatCompletion(
    params: InferenceChatCompletionParams,
    options?: Core.RequestOptions,
  ): APIPromise<InferenceChatCompletionResponse> | APIPromise<Stream<InferenceChatCompletionResponse>> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/inference/chat_completion', {
      body,
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
      stream: params.stream ?? false,
    }) as APIPromise<InferenceChatCompletionResponse> | APIPromise<Stream<InferenceChatCompletionResponse>>;
  }

  completion(
    params: InferenceCompletionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InferenceCompletionResponse> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/inference/completion', {
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

export interface ChatCompletionStreamChunk {
  event: ChatCompletionStreamChunk.Event;
}

export namespace ChatCompletionStreamChunk {
  export interface Event {
    delta: string | Event.ToolCallDelta;

    event_type: 'start' | 'complete' | 'progress';

    logprobs?: Array<InferenceAPI.TokenLogProbs>;

    stop_reason?: 'end_of_turn' | 'end_of_message' | 'out_of_tokens';
  }

  export namespace Event {
    export interface ToolCallDelta {
      content: string | Shared.ToolCall;

      parse_status: 'started' | 'in_progress' | 'failure' | 'success';
    }
  }
}

export interface CompletionStreamChunk {
  delta: string;

  logprobs?: Array<TokenLogProbs>;

  stop_reason?: 'end_of_turn' | 'end_of_message' | 'out_of_tokens';
}

export interface TokenLogProbs {
  logprobs_by_token: Record<string, number>;
}

export type InferenceChatCompletionResponse =
  | InferenceChatCompletionResponse.ChatCompletionResponse
  | ChatCompletionStreamChunk;

export namespace InferenceChatCompletionResponse {
  export interface ChatCompletionResponse {
    completion_message: Shared.CompletionMessage;

    logprobs?: Array<InferenceAPI.TokenLogProbs>;
  }
}

export type InferenceCompletionResponse =
  | InferenceCompletionResponse.CompletionResponse
  | CompletionStreamChunk;

export namespace InferenceCompletionResponse {
  export interface CompletionResponse {
    completion_message: Shared.CompletionMessage;

    logprobs?: Array<InferenceAPI.TokenLogProbs>;
  }
}

export type InferenceChatCompletionParams =
  | InferenceChatCompletionParamsNonStreaming
  | InferenceChatCompletionParamsStreaming;

export interface InferenceChatCompletionParamsBase {
  /**
   * Body param:
   */
  messages: Array<
    Shared.UserMessage | Shared.SystemMessage | Shared.ToolResponseMessage | Shared.CompletionMessage
  >;

  /**
   * Body param:
   */
  model: string;

  /**
   * Body param:
   */
  logprobs?: InferenceChatCompletionParams.Logprobs;

  /**
   * Body param:
   */
  sampling_params?: Shared.SamplingParams;

  /**
   * Body param:
   */
  stream?: boolean;

  /**
   * Body param:
   */
  tool_choice?: 'auto' | 'required';

  /**
   * Body param: `json` -- Refers to the json format for calling tools. The json
   * format takes the form like { "type": "function", "function" : { "name":
   * "function_name", "description": "function_description", "parameters": {...} } }
   *
   * `function_tag` -- This is an example of how you could define your own user
   * defined format for making tool calls. The function_tag format looks like this,
   * <function=function_name>(parameters)</function>
   *
   * The detailed prompts for each of these formats are added to llama cli
   */
  tool_prompt_format?: 'json' | 'function_tag';

  /**
   * Body param:
   */
  tools?: Array<InferenceChatCompletionParams.Tool>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace InferenceChatCompletionParams {
  export interface Logprobs {
    top_k?: number;
  }

  export interface Tool {
    tool_name: 'brave_search' | 'wolfram_alpha' | 'photogen' | 'code_interpreter' | (string & {});

    description?: string;

    parameters?: Record<string, AgentsAPI.ToolParamDefinition>;
  }

  export type InferenceChatCompletionParamsNonStreaming =
    InferenceAPI.InferenceChatCompletionParamsNonStreaming;
  export type InferenceChatCompletionParamsStreaming = InferenceAPI.InferenceChatCompletionParamsStreaming;
}

export interface InferenceChatCompletionParamsNonStreaming extends InferenceChatCompletionParamsBase {
  /**
   * Body param:
   */
  stream?: false;
}

export interface InferenceChatCompletionParamsStreaming extends InferenceChatCompletionParamsBase {
  /**
   * Body param:
   */
  stream: true;
}

export interface InferenceCompletionParams {
  /**
   * Body param:
   */
  content: string | Array<string>;

  /**
   * Body param:
   */
  model: string;

  /**
   * Body param:
   */
  logprobs?: InferenceCompletionParams.Logprobs;

  /**
   * Body param:
   */
  sampling_params?: Shared.SamplingParams;

  /**
   * Body param:
   */
  stream?: boolean;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace InferenceCompletionParams {
  export interface Logprobs {
    top_k?: number;
  }
}

export namespace Inference {
  export import ChatCompletionStreamChunk = InferenceAPI.ChatCompletionStreamChunk;
  export import CompletionStreamChunk = InferenceAPI.CompletionStreamChunk;
  export import TokenLogProbs = InferenceAPI.TokenLogProbs;
  export import InferenceChatCompletionResponse = InferenceAPI.InferenceChatCompletionResponse;
  export import InferenceCompletionResponse = InferenceAPI.InferenceCompletionResponse;
  export import InferenceChatCompletionParams = InferenceAPI.InferenceChatCompletionParams;
  export import InferenceChatCompletionParamsNonStreaming = InferenceAPI.InferenceChatCompletionParamsNonStreaming;
  export import InferenceChatCompletionParamsStreaming = InferenceAPI.InferenceChatCompletionParamsStreaming;
  export import InferenceCompletionParams = InferenceAPI.InferenceCompletionParams;
  export import Embeddings = EmbeddingsAPI.Embeddings;
  export import EmbeddingCreateParams = EmbeddingsAPI.EmbeddingCreateParams;
}
