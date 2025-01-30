// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as TurnAPI from './turn';
import * as Shared from '../shared';
import * as AgentsAPI from './agents';
import { Stream } from '../../streaming';

export class TurnResource extends APIResource {
  create(
    agentId: string,
    sessionId: string,
    body: TurnCreateParamsNonStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<TurnCreateResponse>;
  create(
    agentId: string,
    sessionId: string,
    body: TurnCreateParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<TurnCreateResponse>>;
  create(
    agentId: string,
    sessionId: string,
    body: TurnCreateParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<TurnCreateResponse> | TurnCreateResponse>;
  create(
    agentId: string,
    sessionId: string,
    body: TurnCreateParams,
    options?: Core.RequestOptions,
  ): APIPromise<TurnCreateResponse> | APIPromise<Stream<TurnCreateResponse>> {
    return this._client.post(`/v1/agents/${agentId}/session/${sessionId}/turn`, {
      body,
      ...options,
      headers: { Accept: 'text/event-stream', ...options?.headers },
      stream: body.stream ?? false,
    }) as APIPromise<TurnCreateResponse> | APIPromise<Stream<TurnCreateResponse>>;
  }

  retrieve(
    agentId: string,
    sessionId: string,
    turnId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Turn> {
    return this._client.get(`/v1/agents/${agentId}/session/${sessionId}/turn/${turnId}`, options);
  }
}

export interface Turn {
  input_messages: Array<Shared.UserMessage | Shared.ToolResponseMessage>;

  output_attachments: Array<Turn.OutputAttachment>;

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

export namespace Turn {
  export interface OutputAttachment {
    content:
      | string
      | OutputAttachment.ImageContentItem
      | OutputAttachment.TextContentItem
      | Array<Shared.InterleavedContentItem>
      | Shared.URL;

    mime_type: string;
  }

  export namespace OutputAttachment {
    export interface ImageContentItem {
      image: ImageContentItem.Image;

      type: 'image';
    }

    export namespace ImageContentItem {
      export interface Image {
        data?: string;

        url?: Shared.URL;
      }
    }

    export interface TextContentItem {
      text: string;

      type: 'text';
    }
  }
}

export interface TurnResponseEvent {
  payload: TurnResponseEventPayload;
}

export type TurnResponseEventPayload =
  | TurnResponseEventPayload.AgentTurnResponseStepStartPayload
  | TurnResponseEventPayload.AgentTurnResponseStepProgressPayload
  | TurnResponseEventPayload.AgentTurnResponseStepCompletePayload
  | TurnResponseEventPayload.AgentTurnResponseTurnStartPayload
  | TurnResponseEventPayload.AgentTurnResponseTurnCompletePayload;

export namespace TurnResponseEventPayload {
  export interface AgentTurnResponseStepStartPayload {
    event_type: 'step_start';

    step_id: string;

    step_type: 'inference' | 'tool_execution' | 'shield_call' | 'memory_retrieval';

    metadata?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;
  }

  export interface AgentTurnResponseStepProgressPayload {
    delta: Shared.ContentDelta;

    event_type: 'step_progress';

    step_id: string;

    step_type: 'inference' | 'tool_execution' | 'shield_call' | 'memory_retrieval';
  }

  export interface AgentTurnResponseStepCompletePayload {
    event_type: 'step_complete';

    step_details:
      | AgentsAPI.InferenceStep
      | AgentsAPI.ToolExecutionStep
      | AgentsAPI.ShieldCallStep
      | AgentsAPI.MemoryRetrievalStep;

    step_id: string;

    step_type: 'inference' | 'tool_execution' | 'shield_call' | 'memory_retrieval';
  }

  export interface AgentTurnResponseTurnStartPayload {
    event_type: 'turn_start';

    turn_id: string;
  }

  export interface AgentTurnResponseTurnCompletePayload {
    event_type: 'turn_complete';

    turn: TurnAPI.Turn;
  }
}

export type TurnCreateResponse = Turn | TurnCreateResponse.AgentTurnResponseStreamChunk;

export namespace TurnCreateResponse {
  export interface AgentTurnResponseStreamChunk {
    event: TurnAPI.TurnResponseEvent;
  }
}

export type TurnCreateParams = TurnCreateParamsNonStreaming | TurnCreateParamsStreaming;

export interface TurnCreateParamsBase {
  messages: Array<Shared.UserMessage | Shared.ToolResponseMessage>;

  documents?: Array<TurnCreateParams.Document>;

  stream?: boolean;

  toolgroups?: Array<string | TurnCreateParams.UnionMember1>;
}

export namespace TurnCreateParams {
  export interface Document {
    content:
      | string
      | Document.ImageContentItem
      | Document.TextContentItem
      | Array<Shared.InterleavedContentItem>
      | Shared.URL;

    mime_type: string;
  }

  export namespace Document {
    export interface ImageContentItem {
      image: ImageContentItem.Image;

      type: 'image';
    }

    export namespace ImageContentItem {
      export interface Image {
        data?: string;

        url?: Shared.URL;
      }
    }

    export interface TextContentItem {
      text: string;

      type: 'text';
    }
  }

  export interface UnionMember1 {
    args: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    name: string;
  }

  export type TurnCreateParamsNonStreaming = TurnAPI.TurnCreateParamsNonStreaming;
  export type TurnCreateParamsStreaming = TurnAPI.TurnCreateParamsStreaming;
}

export interface TurnCreateParamsNonStreaming extends TurnCreateParamsBase {
  stream?: false;
}

export interface TurnCreateParamsStreaming extends TurnCreateParamsBase {
  stream: true;
}

export declare namespace TurnResource {
  export {
    type Turn as Turn,
    type TurnResponseEvent as TurnResponseEvent,
    type TurnResponseEventPayload as TurnResponseEventPayload,
    type TurnCreateResponse as TurnCreateResponse,
    type TurnCreateParams as TurnCreateParams,
    type TurnCreateParamsNonStreaming as TurnCreateParamsNonStreaming,
    type TurnCreateParamsStreaming as TurnCreateParamsStreaming,
  };
}
