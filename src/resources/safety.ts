// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SafetyAPI from './safety';
import * as Shared from './shared';

export class Safety extends APIResource {
  runShield(params: SafetyRunShieldParams, options?: Core.RequestOptions): Core.APIPromise<RunSheidResponse> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/safety/run_shield', {
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

export interface RunSheidResponse {
  violation?: RunSheidResponse.Violation;
}

export namespace RunSheidResponse {
  export interface Violation {
    metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    violation_level: 'info' | 'warn' | 'error';

    user_message?: string;
  }
}

export interface SafetyRunShieldParams {
  /**
   * Body param:
   */
  messages: Array<
    Shared.UserMessage | Shared.SystemMessage | Shared.ToolResponseMessage | Shared.CompletionMessage
  >;

  /**
   * Body param:
   */
  params: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  /**
   * Body param:
   */
  shield_type: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Safety {
  export import RunSheidResponse = SafetyAPI.RunSheidResponse;
  export import SafetyRunShieldParams = SafetyAPI.SafetyRunShieldParams;
}
