// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AgentsAPI from './agents';
import * as Shared from '../shared';
import * as SessionsAPI from './sessions';
import * as StepsAPI from './steps';
import * as TurnsAPI from './turns';

export class Agents extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);
  turns: TurnsAPI.Turns = new TurnsAPI.Turns(this._client);

  create(params: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<AgentCreateResponse> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/agents/create', {
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

  delete(params: AgentDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/agents/delete', {
      body,
      ...options,
      headers: {
        Accept: '*/*',
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface InferenceStep {
  model_response: Shared.CompletionMessage;

  step_id: string;

  step_type: 'inference';

  turn_id: string;

  completed_at?: string;

  started_at?: string;
}

export interface MemoryRetrievalStep {
  inserted_context: string | Array<string>;

  memory_bank_ids: Array<string>;

  step_id: string;

  step_type: 'memory_retrieval';

  turn_id: string;

  completed_at?: string;

  started_at?: string;
}

export interface RestAPIExecutionConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';

  url: string;

  body?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  headers?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  params?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;
}

export interface ShieldCallStep {
  step_id: string;

  step_type: 'shield_call';

  turn_id: string;

  completed_at?: string;

  started_at?: string;

  violation?: ShieldCallStep.Violation;
}

export namespace ShieldCallStep {
  export interface Violation {
    metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    violation_level: 'info' | 'warn' | 'error';

    user_message?: string;
  }
}

export interface ToolExecutionStep {
  step_id: string;

  step_type: 'tool_execution';

  tool_calls: Array<Shared.ToolCall>;

  tool_responses: Array<ToolExecutionStep.ToolResponse>;

  turn_id: string;

  completed_at?: string;

  started_at?: string;
}

export namespace ToolExecutionStep {
  export interface ToolResponse {
    call_id: string;

    content: string | Array<string>;

    tool_name: 'brave_search' | 'wolfram_alpha' | 'photogen' | 'code_interpreter' | (string & {});
  }
}

export interface ToolParamDefinition {
  param_type: string;

  description?: string;

  required?: boolean;
}

export interface AgentCreateResponse {
  agent_id: string;
}

export interface AgentCreateParams {
  /**
   * Body param:
   */
  agent_config: AgentCreateParams.AgentConfig;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace AgentCreateParams {
  export interface AgentConfig {
    enable_session_persistence: boolean;

    instructions: string;

    max_infer_iters: number;

    model: string;

    input_shields?: Array<string>;

    output_shields?: Array<string>;

    sampling_params?: Shared.SamplingParams;

    tool_choice?: 'auto' | 'required';

    /**
     * `json` -- Refers to the json format for calling tools. The json format takes the
     * form like { "type": "function", "function" : { "name": "function_name",
     * "description": "function_description", "parameters": {...} } }
     *
     * `function_tag` -- This is an example of how you could define your own user
     * defined format for making tool calls. The function_tag format looks like this,
     * <function=function_name>(parameters)</function>
     *
     * The detailed prompts for each of these formats are added to llama cli
     */
    tool_prompt_format?: 'json' | 'function_tag';

    tools?: Array<
      | AgentConfig.SearchToolDefinition
      | AgentConfig.WolframAlphaToolDefinition
      | AgentConfig.PhotogenToolDefinition
      | AgentConfig.CodeInterpreterToolDefinition
      | AgentConfig.FunctionCallToolDefinition
      | AgentConfig.MemoryToolDefinition
    >;
  }

  export namespace AgentConfig {
    export interface SearchToolDefinition {
      api_key: string;

      engine: 'bing' | 'brave';

      type: 'brave_search';

      input_shields?: Array<string>;

      output_shields?: Array<string>;

      remote_execution?: AgentsAPI.RestAPIExecutionConfig;
    }

    export interface WolframAlphaToolDefinition {
      api_key: string;

      type: 'wolfram_alpha';

      input_shields?: Array<string>;

      output_shields?: Array<string>;

      remote_execution?: AgentsAPI.RestAPIExecutionConfig;
    }

    export interface PhotogenToolDefinition {
      type: 'photogen';

      input_shields?: Array<string>;

      output_shields?: Array<string>;

      remote_execution?: AgentsAPI.RestAPIExecutionConfig;
    }

    export interface CodeInterpreterToolDefinition {
      enable_inline_code_execution: boolean;

      type: 'code_interpreter';

      input_shields?: Array<string>;

      output_shields?: Array<string>;

      remote_execution?: AgentsAPI.RestAPIExecutionConfig;
    }

    export interface FunctionCallToolDefinition {
      description: string;

      function_name: string;

      parameters: Record<string, AgentsAPI.ToolParamDefinition>;

      type: 'function_call';

      input_shields?: Array<string>;

      output_shields?: Array<string>;

      remote_execution?: AgentsAPI.RestAPIExecutionConfig;
    }

    export interface MemoryToolDefinition {
      max_chunks: number;

      max_tokens_in_context: number;

      memory_bank_configs: Array<
        | MemoryToolDefinition.UnionMember0
        | MemoryToolDefinition.UnionMember1
        | MemoryToolDefinition.UnionMember2
        | MemoryToolDefinition.UnionMember3
      >;

      query_generator_config:
        | MemoryToolDefinition.UnionMember0
        | MemoryToolDefinition.UnionMember1
        | MemoryToolDefinition.Type;

      type: 'memory';

      input_shields?: Array<string>;

      output_shields?: Array<string>;
    }

    export namespace MemoryToolDefinition {
      export interface UnionMember0 {
        bank_id: string;

        type: 'vector';
      }

      export interface UnionMember1 {
        bank_id: string;

        keys: Array<string>;

        type: 'keyvalue';
      }

      export interface UnionMember2 {
        bank_id: string;

        type: 'keyword';
      }

      export interface UnionMember3 {
        bank_id: string;

        entities: Array<string>;

        type: 'graph';
      }

      export interface UnionMember4 {
        sep: string;

        type: 'default';
      }

      export interface UnionMember5 {
        model: string;

        template: string;

        type: 'llm';
      }

      export interface Type {
        type: 'custom';
      }
    }
  }
}

export interface AgentDeleteParams {
  /**
   * Body param:
   */
  agent_id: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Agents {
  export import InferenceStep = AgentsAPI.InferenceStep;
  export import MemoryRetrievalStep = AgentsAPI.MemoryRetrievalStep;
  export import RestAPIExecutionConfig = AgentsAPI.RestAPIExecutionConfig;
  export import ShieldCallStep = AgentsAPI.ShieldCallStep;
  export import ToolExecutionStep = AgentsAPI.ToolExecutionStep;
  export import ToolParamDefinition = AgentsAPI.ToolParamDefinition;
  export import AgentCreateResponse = AgentsAPI.AgentCreateResponse;
  export import AgentCreateParams = AgentsAPI.AgentCreateParams;
  export import AgentDeleteParams = AgentsAPI.AgentDeleteParams;
  export import Sessions = SessionsAPI.Sessions;
  export import Session = SessionsAPI.Session;
  export import SessionCreateResponse = SessionsAPI.SessionCreateResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionRetrieveParams = SessionsAPI.SessionRetrieveParams;
  export import SessionDeleteParams = SessionsAPI.SessionDeleteParams;
  export import Steps = StepsAPI.Steps;
  export import AgentsStep = StepsAPI.AgentsStep;
  export import StepRetrieveParams = StepsAPI.StepRetrieveParams;
  export import Turns = TurnsAPI.Turns;
  export import AgentsTurnStreamChunk = TurnsAPI.AgentsTurnStreamChunk;
  export import Turn = TurnsAPI.Turn;
  export import TurnStreamEvent = TurnsAPI.TurnStreamEvent;
  export import TurnCreateParams = TurnsAPI.TurnCreateParams;
  export import TurnCreateParamsNonStreaming = TurnsAPI.TurnCreateParamsNonStreaming;
  export import TurnCreateParamsStreaming = TurnsAPI.TurnCreateParamsStreaming;
  export import TurnRetrieveParams = TurnsAPI.TurnRetrieveParams;
}
