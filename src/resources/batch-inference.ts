// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BatchInferenceAPI from './batch-inference';
import * as Shared from './shared';
import * as AgentsAPI from './agents/agents';

export class BatchInference extends APIResource {
  chatCompletion(
    params: BatchInferenceChatCompletionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BatchChatCompletion> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/batch_inference/chat_completion', {
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

  completion(
    params: BatchInferenceCompletionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.BatchCompletion> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/batch_inference/completion', {
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

export interface BatchChatCompletion {
  completion_message_batch: Array<Shared.CompletionMessage>;
}

export interface BatchInferenceChatCompletionParams {
  /**
   * Body param:
   */
  messages_batch: Array<
    Array<Shared.UserMessage | Shared.SystemMessage | Shared.ToolResponseMessage | Shared.CompletionMessage>
  >;

  /**
   * Body param:
   */
  model: string;

  /**
   * Body param:
   */
  logprobs?: BatchInferenceChatCompletionParams.Logprobs;

  /**
   * Body param:
   */
  sampling_params?: Shared.SamplingParams;

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
  tools?: Array<BatchInferenceChatCompletionParams.Tool>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace BatchInferenceChatCompletionParams {
  export interface Logprobs {
    top_k?: number;
  }

  export interface Tool {
    tool_name: 'brave_search' | 'wolfram_alpha' | 'photogen' | 'code_interpreter' | (string & {});

    description?: string;

    parameters?: Record<string, AgentsAPI.ToolParamDefinition>;
  }
}

export interface BatchInferenceCompletionParams {
  /**
   * Body param:
   */
  content_batch: Array<string | Array<string>>;

  /**
   * Body param:
   */
  model: string;

  /**
   * Body param:
   */
  logprobs?: BatchInferenceCompletionParams.Logprobs;

  /**
   * Body param:
   */
  sampling_params?: Shared.SamplingParams;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace BatchInferenceCompletionParams {
  export interface Logprobs {
    top_k?: number;
  }
}

export namespace BatchInference {
  export import BatchChatCompletion = BatchInferenceAPI.BatchChatCompletion;
  export import BatchInferenceChatCompletionParams = BatchInferenceAPI.BatchInferenceChatCompletionParams;
  export import BatchInferenceCompletionParams = BatchInferenceAPI.BatchInferenceCompletionParams;
}
