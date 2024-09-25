// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Attachment {
  content: string | Array<string>;

  mime_type: string;
}

export interface BatchCompletion {
  completion_message_batch: Array<CompletionMessage>;
}

export interface CompletionMessage {
  content: string | Array<string>;

  role: 'assistant';

  stop_reason: 'end_of_turn' | 'end_of_message' | 'out_of_tokens';

  tool_calls: Array<ToolCall>;
}

export interface SamplingParams {
  strategy: 'greedy' | 'top_p' | 'top_k';

  max_tokens?: number;

  repetition_penalty?: number;

  temperature?: number;

  top_k?: number;

  top_p?: number;
}

export interface SystemMessage {
  content: string | Array<string>;

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

export interface ToolResponseMessage {
  call_id: string;

  content: string | Array<string>;

  role: 'ipython';

  tool_name: 'brave_search' | 'wolfram_alpha' | 'photogen' | 'code_interpreter' | (string & {});
}

export interface UserMessage {
  content: string | Array<string>;

  role: 'user';

  context?: string | Array<string>;
}
