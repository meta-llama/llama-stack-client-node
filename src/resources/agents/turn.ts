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
  ): APIPromise<Turn>;
  create(
    agentId: string,
    sessionId: string,
    body: TurnCreateParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<AgentTurnResponseStreamChunk>>;
  create(
    agentId: string,
    sessionId: string,
    body: TurnCreateParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<AgentTurnResponseStreamChunk> | Turn>;
  create(
    agentId: string,
    sessionId: string,
    body: TurnCreateParams,
    options?: Core.RequestOptions,
  ): APIPromise<Turn> | APIPromise<Stream<AgentTurnResponseStreamChunk>> {
    return this._client.post(`/v1/agents/${agentId}/session/${sessionId}/turn`, {
      body,
      ...options,
      stream: body.stream ?? false,
    }) as APIPromise<Turn> | APIPromise<Stream<AgentTurnResponseStreamChunk>>;
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

/**
 * streamed agent turn completion response.
 */
export interface AgentTurnResponseStreamChunk {
  event: TurnResponseEvent;
}

/**
 * A single turn in an interaction with an Agentic System.
 */
export interface Turn {
  input_messages: Array<Shared.UserMessage | Shared.ToolResponseMessage>;

  /**
   * A message containing the model's (assistant) response in a chat conversation.
   */
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

  output_attachments?: Array<Turn.OutputAttachment>;
}

export namespace Turn {
  export interface OutputAttachment {
    /**
     * A image content item
     */
    content:
      | string
      | OutputAttachment.ImageContentItem
      | OutputAttachment.TextContentItem
      | Array<Shared.InterleavedContentItem>
      | OutputAttachment.URL;

    mime_type: string;
  }

  export namespace OutputAttachment {
    /**
     * A image content item
     */
    export interface ImageContentItem {
      /**
       * Image as a base64 encoded string or an URL
       */
      image: ImageContentItem.Image;

      /**
       * Discriminator type of the content item. Always "image"
       */
      type: 'image';
    }

    export namespace ImageContentItem {
      /**
       * Image as a base64 encoded string or an URL
       */
      export interface Image {
        /**
         * base64 encoded image data as string
         */
        data?: string;

        /**
         * A URL of the image or data URL in the format of data:image/{type};base64,{data}.
         * Note that URL could have length limits.
         */
        url?: Image.URL;
      }

      export namespace Image {
        /**
         * A URL of the image or data URL in the format of data:image/{type};base64,{data}.
         * Note that URL could have length limits.
         */
        export interface URL {
          uri: string;
        }
      }
    }

    /**
     * A text content item
     */
    export interface TextContentItem {
      /**
       * Text content
       */
      text: string;

      /**
       * Discriminator type of the content item. Always "text"
       */
      type: 'text';
    }

    export interface URL {
      uri: string;
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

    /**
     * A single turn in an interaction with an Agentic System.
     */
    turn: TurnAPI.Turn;
  }
}

export type TurnCreateParams = TurnCreateParamsNonStreaming | TurnCreateParamsStreaming;

export interface TurnCreateParamsBase {
  messages: Array<Shared.UserMessage | Shared.ToolResponseMessage>;

  documents?: Array<TurnCreateParams.Document>;

  stream?: boolean;

  /**
   * Configuration for tool use.
   */
  tool_config?: TurnCreateParams.ToolConfig;

  toolgroups?: Array<string | TurnCreateParams.UnionMember1>;
}

export namespace TurnCreateParams {
  export interface Document {
    /**
     * A image content item
     */
    content:
      | string
      | Document.ImageContentItem
      | Document.TextContentItem
      | Array<Shared.InterleavedContentItem>
      | Document.URL;

    mime_type: string;
  }

  export namespace Document {
    /**
     * A image content item
     */
    export interface ImageContentItem {
      /**
       * Image as a base64 encoded string or an URL
       */
      image: ImageContentItem.Image;

      /**
       * Discriminator type of the content item. Always "image"
       */
      type: 'image';
    }

    export namespace ImageContentItem {
      /**
       * Image as a base64 encoded string or an URL
       */
      export interface Image {
        /**
         * base64 encoded image data as string
         */
        data?: string;

        /**
         * A URL of the image or data URL in the format of data:image/{type};base64,{data}.
         * Note that URL could have length limits.
         */
        url?: Image.URL;
      }

      export namespace Image {
        /**
         * A URL of the image or data URL in the format of data:image/{type};base64,{data}.
         * Note that URL could have length limits.
         */
        export interface URL {
          uri: string;
        }
      }
    }

    /**
     * A text content item
     */
    export interface TextContentItem {
      /**
       * Text content
       */
      text: string;

      /**
       * Discriminator type of the content item. Always "text"
       */
      type: 'text';
    }

    export interface URL {
      uri: string;
    }
  }

  /**
   * Configuration for tool use.
   */
  export interface ToolConfig {
    /**
     * (Optional) Config for how to override the default system prompt. -
     * `SystemMessageBehavior.append`: Appends the provided system message to the
     * default system prompt. - `SystemMessageBehavior.replace`: Replaces the default
     * system prompt with the provided system message. The system message can include
     * the string '{{function_definitions}}' to indicate where the function definitions
     * should be inserted.
     */
    system_message_behavior: 'append' | 'replace';

    /**
     * (Optional) Whether tool use is required or automatic. Defaults to
     * ToolChoice.auto.
     */
    tool_choice?: 'auto' | 'required';

    /**
     * (Optional) Instructs the model how to format tool calls. By default, Llama Stack
     * will attempt to use a format that is best adapted to the model. -
     * `ToolPromptFormat.json`: The tool calls are formatted as a JSON object. -
     * `ToolPromptFormat.function_tag`: The tool calls are enclosed in a
     * <function=function_name> tag. - `ToolPromptFormat.python_list`: The tool calls
     * are output as Python syntax -- a list of function calls.
     */
    tool_prompt_format?: 'json' | 'function_tag' | 'python_list';
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
    type AgentTurnResponseStreamChunk as AgentTurnResponseStreamChunk,
    type Turn as Turn,
    type TurnResponseEvent as TurnResponseEvent,
    type TurnResponseEventPayload as TurnResponseEventPayload,
    type TurnCreateParams as TurnCreateParams,
    type TurnCreateParamsNonStreaming as TurnCreateParamsNonStreaming,
    type TurnCreateParamsStreaming as TurnCreateParamsStreaming,
  };
}
