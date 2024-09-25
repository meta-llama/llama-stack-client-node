// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as TurnsAPI from './turns';
import * as Shared from '../shared';
import * as AgentsAPI from './agents';
import { Stream } from '../../streaming';

export class Turns extends APIResource {
  create(
    params: TurnCreateParamsNonStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<AgentsTurnStreamChunk>;
  create(
    params: TurnCreateParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<AgentsTurnStreamChunk>>;
  create(
    params: TurnCreateParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<AgentsTurnStreamChunk> | AgentsTurnStreamChunk>;
  create(
    params: TurnCreateParams,
    options?: Core.RequestOptions,
  ): APIPromise<AgentsTurnStreamChunk> | APIPromise<Stream<AgentsTurnStreamChunk>> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/agents/turn/create', {
      body,
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
      stream: params.stream ?? false,
    }) as APIPromise<AgentsTurnStreamChunk> | APIPromise<Stream<AgentsTurnStreamChunk>>;
  }

  retrieve(params: TurnRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Turn> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/agents/turn/get', {
      query,
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

export interface AgentsTurnStreamChunk {
  event: TurnStreamEvent;
}

export interface Turn {
  input_messages: Array<Shared.UserMessage | Shared.ToolResponseMessage>;

  output_attachments: Array<Shared.Attachment>;

  output_message: Shared.CompletionMessage;

  session_id: string;

  started_at: string;

  steps: Array<
    | AgentsAPI.InferenceStep
    | AgentsAPI.ToolExecutionStep
    | AgentsAPI.ShieldCallStep
    | AgentsAPI.MemoryRetrievalStep
  >;

  turn_id: string;

  completed_at?: string;
}

export interface TurnStreamEvent {
  payload:
    | TurnStreamEvent.AgentTurnResponseStepStartPayload
    | TurnStreamEvent.AgentTurnResponseStepProgressPayload
    | TurnStreamEvent.AgentTurnResponseStepCompletePayload
    | TurnStreamEvent.AgentTurnResponseTurnStartPayload
    | TurnStreamEvent.AgentTurnResponseTurnCompletePayload;
}

export namespace TurnStreamEvent {
  export interface AgentTurnResponseStepStartPayload {
    event_type: 'step_start';

    step_id: string;

    step_type: 'inference' | 'tool_execution' | 'shield_call' | 'memory_retrieval';

    metadata?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;
  }

  export interface AgentTurnResponseStepProgressPayload {
    event_type: 'step_progress';

    step_id: string;

    step_type: 'inference' | 'tool_execution' | 'shield_call' | 'memory_retrieval';

    model_response_text_delta?: string;

    tool_call_delta?: AgentTurnResponseStepProgressPayload.ToolCallDelta;

    tool_response_text_delta?: string;
  }

  export namespace AgentTurnResponseStepProgressPayload {
    export interface ToolCallDelta {
      content: string | Shared.ToolCall;

      parse_status: 'started' | 'in_progress' | 'failure' | 'success';
    }
  }

  export interface AgentTurnResponseStepCompletePayload {
    event_type: 'step_complete';

    step_details:
      | AgentsAPI.InferenceStep
      | AgentsAPI.ToolExecutionStep
      | AgentsAPI.ShieldCallStep
      | AgentsAPI.MemoryRetrievalStep;

    step_type: 'inference' | 'tool_execution' | 'shield_call' | 'memory_retrieval';
  }

  export interface AgentTurnResponseTurnStartPayload {
    event_type: 'turn_start';

    turn_id: string;
  }

  export interface AgentTurnResponseTurnCompletePayload {
    event_type: 'turn_complete';

    turn: TurnsAPI.Turn;
  }
}

export type TurnCreateParams = TurnCreateParamsNonStreaming | TurnCreateParamsStreaming;

export interface TurnCreateParamsBase {
  /**
   * Body param:
   */
  agent_id: string;

  /**
   * Body param:
   */
  messages: Array<Shared.UserMessage | Shared.ToolResponseMessage>;

  /**
   * Body param:
   */
  session_id: string;

  /**
   * Body param:
   */
  attachments?: Array<Shared.Attachment>;

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

export namespace TurnCreateParams {
  export type TurnCreateParamsNonStreaming = TurnsAPI.TurnCreateParamsNonStreaming;
  export type TurnCreateParamsStreaming = TurnsAPI.TurnCreateParamsStreaming;
}

export interface TurnCreateParamsNonStreaming extends TurnCreateParamsBase {
  /**
   * Body param:
   */
  stream?: false;
}

export interface TurnCreateParamsStreaming extends TurnCreateParamsBase {
  /**
   * Body param:
   */
  stream: true;
}

export interface TurnRetrieveParams {
  /**
   * Query param:
   */
  agent_id: string;

  /**
   * Query param:
   */
  turn_id: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Turns {
  export import AgentsTurnStreamChunk = TurnsAPI.AgentsTurnStreamChunk;
  export import Turn = TurnsAPI.Turn;
  export import TurnStreamEvent = TurnsAPI.TurnStreamEvent;
  export import TurnCreateParams = TurnsAPI.TurnCreateParams;
  export import TurnCreateParamsNonStreaming = TurnsAPI.TurnCreateParamsNonStreaming;
  export import TurnCreateParamsStreaming = TurnsAPI.TurnCreateParamsStreaming;
  export import TurnRetrieveParams = TurnsAPI.TurnRetrieveParams;
}
