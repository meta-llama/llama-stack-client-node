// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as SessionAPI from './session';
import {
  Session,
  SessionCreateParams,
  SessionCreateResponse,
  SessionResource,
  SessionRetrieveParams,
} from './session';
import * as StepsAPI from './steps';
import { StepRetrieveResponse, Steps } from './steps';
import * as TurnAPI from './turn';
import {
  AgentTurnResponseStreamChunk,
  Turn,
  TurnCreateParams,
  TurnCreateParamsNonStreaming,
  TurnCreateParamsStreaming,
  TurnResource,
  TurnResponseEvent,
  TurnResponseEventPayload,
} from './turn';

export class Agents extends APIResource {
  session: SessionAPI.SessionResource = new SessionAPI.SessionResource(this._client);
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);
  turn: TurnAPI.TurnResource = new TurnAPI.TurnResource(this._client);

  create(body: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<AgentCreateResponse> {
    return this._client.post('/v1/agents', { body, ...options });
  }

  delete(agentId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/agents/${agentId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
  inserted_context: Shared.InterleavedContent;

  step_id: string;

  step_type: 'memory_retrieval';

  turn_id: string;

  vector_db_ids: string;

  completed_at?: string;

  started_at?: string;
}

export interface ShieldCallStep {
  step_id: string;

  step_type: 'shield_call';

  turn_id: string;

  completed_at?: string;

  started_at?: string;

  violation?: Shared.SafetyViolation;
}

export interface ToolExecutionStep {
  step_id: string;

  step_type: 'tool_execution';

  tool_calls: Array<Shared.ToolCall>;

  tool_responses: Array<ToolResponse>;

  turn_id: string;

  completed_at?: string;

  started_at?: string;
}

export interface ToolResponse {
  call_id: string;

  content: Shared.InterleavedContent;

  tool_name: 'brave_search' | 'wolfram_alpha' | 'photogen' | 'code_interpreter' | (string & {});
}

export interface AgentCreateResponse {
  agent_id: string;
}

export interface AgentCreateParams {
  agent_config: Shared.AgentConfig;
}

Agents.SessionResource = SessionResource;
Agents.Steps = Steps;
Agents.TurnResource = TurnResource;

export declare namespace Agents {
  export {
    type InferenceStep as InferenceStep,
    type MemoryRetrievalStep as MemoryRetrievalStep,
    type ShieldCallStep as ShieldCallStep,
    type ToolExecutionStep as ToolExecutionStep,
    type ToolResponse as ToolResponse,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentCreateParams as AgentCreateParams,
  };

  export {
    SessionResource as SessionResource,
    type Session as Session,
    type SessionCreateResponse as SessionCreateResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionRetrieveParams as SessionRetrieveParams,
  };

  export { Steps as Steps, type StepRetrieveResponse as StepRetrieveResponse };

  export {
    TurnResource as TurnResource,
    type AgentTurnResponseStreamChunk as AgentTurnResponseStreamChunk,
    type Turn as Turn,
    type TurnResponseEvent as TurnResponseEvent,
    type TurnResponseEventPayload as TurnResponseEventPayload,
    type TurnCreateParams as TurnCreateParams,
    type TurnCreateParamsNonStreaming as TurnCreateParamsNonStreaming,
    type TurnCreateParamsStreaming as TurnCreateParamsStreaming,
  };
}
