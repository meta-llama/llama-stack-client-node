// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import * as InferenceAPI from './inference';
import * as ToolRuntimeAPI from './tool-runtime/tool-runtime';

export interface AgentConfig {
  enable_session_persistence: boolean;

  instructions: string;

  max_infer_iters: number;

  model: string;

  client_tools?: Array<ToolRuntimeAPI.ToolDef>;

  input_shields?: Array<string>;

  output_shields?: Array<string>;

  response_format?: ResponseFormat;

  sampling_params?: SamplingParams;

  tool_choice?: 'auto' | 'required';

  tool_prompt_format?: 'json' | 'function_tag' | 'python_list';

  toolgroups?: Array<string | AgentConfig.UnionMember1>;
}

export namespace AgentConfig {
  export interface UnionMember1 {
    args: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    name: string;
  }
}

export interface BatchCompletion {
  batch: Array<InferenceAPI.CompletionResponse>;
}

export interface CompletionMessage {
  /**
   * The content of the model's response
   */
  content: InterleavedContent;

  /**
   * Must be "assistant" to identify this as the model's response
   */
  role: 'assistant';

  /**
   * Reason why the model stopped generating. Options are: -
   * `StopReason.end_of_turn`: The model finished generating the entire response. -
   * `StopReason.end_of_message`: The model finished generating but generated a
   * partial response -- usually, a tool call. The user may call the tool and
   * continue the conversation with the tool's response. -
   * `StopReason.out_of_tokens`: The model ran out of token budget.
   */
  stop_reason: 'end_of_turn' | 'end_of_message' | 'out_of_tokens';

  /**
   * List of tool calls. Each tool call is a ToolCall object.
   */
  tool_calls: Array<ToolCall>;
}

export type ContentDelta = ContentDelta.TextDelta | ContentDelta.ImageDelta | ContentDelta.ToolCallDelta;

export namespace ContentDelta {
  export interface TextDelta {
    text: string;

    type: 'text';
  }

  export interface ImageDelta {
    image: string;

    type: 'image';
  }

  export interface ToolCallDelta {
    parse_status: 'started' | 'in_progress' | 'failed' | 'succeeded';

    tool_call: string | Shared.ToolCall;

    type: 'tool_call';
  }
}

export interface Document {
  content:
    | string
    | Document.ImageContentItem
    | Document.TextContentItem
    | Array<InterleavedContentItem>
    | URL;

  document_id: string;

  metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  mime_type?: string;
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

export type InterleavedContent =
  | string
  | InterleavedContent.ImageContentItem
  | InterleavedContent.TextContentItem
  | Array<InterleavedContentItem>;

export namespace InterleavedContent {
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

export type InterleavedContentItem =
  | InterleavedContentItem.ImageContentItem
  | InterleavedContentItem.TextContentItem;

export namespace InterleavedContentItem {
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

export type Message = UserMessage | SystemMessage | ToolResponseMessage | CompletionMessage;

export type ParamType =
  | ParamType.StringType
  | ParamType.NumberType
  | ParamType.BooleanType
  | ParamType.ArrayType
  | ParamType.ObjectType
  | ParamType.JsonType
  | ParamType.UnionType
  | ParamType.ChatCompletionInputType
  | ParamType.CompletionInputType
  | ParamType.AgentTurnInputType;

export namespace ParamType {
  export interface StringType {
    type: 'string';
  }

  export interface NumberType {
    type: 'number';
  }

  export interface BooleanType {
    type: 'boolean';
  }

  export interface ArrayType {
    type: 'array';
  }

  export interface ObjectType {
    type: 'object';
  }

  export interface JsonType {
    type: 'json';
  }

  export interface UnionType {
    type: 'union';
  }

  export interface ChatCompletionInputType {
    type: 'chat_completion_input';
  }

  export interface CompletionInputType {
    type: 'completion_input';
  }

  export interface AgentTurnInputType {
    type: 'agent_turn_input';
  }
}

export interface QueryConfig {
  max_chunks: number;

  max_tokens_in_context: number;

  query_generator_config: QueryGeneratorConfig;
}

export type QueryGeneratorConfig =
  | QueryGeneratorConfig.DefaultRagQueryGeneratorConfig
  | QueryGeneratorConfig.LlmragQueryGeneratorConfig;

export namespace QueryGeneratorConfig {
  export interface DefaultRagQueryGeneratorConfig {
    separator: string;

    type: 'default';
  }

  export interface LlmragQueryGeneratorConfig {
    model: string;

    template: string;

    type: 'llm';
  }
}

export interface QueryResult {
  content?: InterleavedContent;
}

export type ResponseFormat = ResponseFormat.JsonSchemaResponseFormat | ResponseFormat.GrammarResponseFormat;

export namespace ResponseFormat {
  export interface JsonSchemaResponseFormat {
    /**
     * The JSON schema the response should conform to. In a Python SDK, this is often a
     * `pydantic` model.
     */
    json_schema: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    /**
     * Must be "json_schema" to identify this format type
     */
    type: 'json_schema';
  }

  export interface GrammarResponseFormat {
    /**
     * The BNF grammar specification the response should conform to
     */
    bnf: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    /**
     * Must be "grammar" to identify this format type
     */
    type: 'grammar';
  }
}

export interface ReturnType {
  type:
    | 'string'
    | 'number'
    | 'boolean'
    | 'array'
    | 'object'
    | 'json'
    | 'union'
    | 'chat_completion_input'
    | 'completion_input'
    | 'agent_turn_input';
}

export interface SafetyViolation {
  metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  violation_level: 'info' | 'warn' | 'error';

  user_message?: string;
}

export interface SamplingParams {
  strategy:
    | SamplingParams.GreedySamplingStrategy
    | SamplingParams.TopPSamplingStrategy
    | SamplingParams.TopKSamplingStrategy;

  max_tokens?: number;

  repetition_penalty?: number;
}

export namespace SamplingParams {
  export interface GreedySamplingStrategy {
    type: 'greedy';
  }

  export interface TopPSamplingStrategy {
    type: 'top_p';

    temperature?: number;

    top_p?: number;
  }

  export interface TopKSamplingStrategy {
    top_k: number;

    type: 'top_k';
  }
}

export interface ScoringResult {
  aggregated_results: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  score_rows: Array<Record<string, boolean | number | string | Array<unknown> | unknown | null>>;
}

export interface SystemMessage {
  /**
   * The content of the "system prompt". If multiple system messages are provided,
   * they are concatenated. The underlying Llama Stack code may also add other system
   * messages (for example, for formatting tool definitions).
   */
  content: InterleavedContent;

  /**
   * Must be "system" to identify this as a system message
   */
  role: 'system';
}

export interface ToolCall {
  arguments: Record<
    string,
    | string
    | number
    | boolean
    | Array<string | number | boolean | null>
    | Record<string, string | number | boolean | null>
    | null
  >;

  call_id: string;

  tool_name: 'brave_search' | 'wolfram_alpha' | 'photogen' | 'code_interpreter' | (string & {});
}

export interface ToolParamDefinition {
  param_type: string;

  default?: boolean | number | string | Array<unknown> | unknown | null;

  description?: string;

  required?: boolean;
}

export interface ToolResponseMessage {
  /**
   * Unique identifier for the tool call this response is for
   */
  call_id: string;

  /**
   * The response content from the tool
   */
  content: InterleavedContent;

  /**
   * Must be "tool" to identify this as a tool response
   */
  role: 'tool';

  /**
   * Name of the tool that was called
   */
  tool_name: 'brave_search' | 'wolfram_alpha' | 'photogen' | 'code_interpreter' | (string & {});
}

export interface URL {
  uri: string;
}

export interface UserMessage {
  /**
   * The content of the message, which can include text and other media
   */
  content: InterleavedContent;

  /**
   * Must be "user" to identify this as a user message
   */
  role: 'user';

  /**
   * (Optional) This field is used internally by Llama Stack to pass RAG context.
   * This field may be removed in the API in the future.
   */
  context?: InterleavedContent;
}
