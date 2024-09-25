// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SessionsAPI from './sessions';
import * as TurnsAPI from './turns';

export class Sessions extends APIResource {
  create(params: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<SessionCreateResponse> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/agents/session/create', {
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

  retrieve(params: SessionRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Session> {
    const { agent_id, session_id, 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/agents/session/get', {
      query: { agent_id, session_id },
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

  delete(params: SessionDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/agents/session/delete', {
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

export interface Session {
  session_id: string;

  session_name: string;

  started_at: string;

  turns: Array<TurnsAPI.Turn>;

  memory_bank?: unknown;
}

export interface SessionCreateResponse {
  session_id: string;
}

export interface SessionCreateParams {
  /**
   * Body param:
   */
  agent_id: string;

  /**
   * Body param:
   */
  session_name: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface SessionRetrieveParams {
  /**
   * Query param:
   */
  agent_id: string;

  /**
   * Query param:
   */
  session_id: string;

  /**
   * Body param:
   */
  turn_ids?: Array<string>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface SessionDeleteParams {
  /**
   * Body param:
   */
  agent_id: string;

  /**
   * Body param:
   */
  session_id: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Sessions {
  export import Session = SessionsAPI.Session;
  export import SessionCreateResponse = SessionsAPI.SessionCreateResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionRetrieveParams = SessionsAPI.SessionRetrieveParams;
  export import SessionDeleteParams = SessionsAPI.SessionDeleteParams;
}
