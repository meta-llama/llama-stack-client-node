// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ShieldsAPI from './shields';

export class Shields extends APIResource {
  list(params?: ShieldListParams, options?: Core.RequestOptions): Core.APIPromise<ShieldSpec>;
  list(options?: Core.RequestOptions): Core.APIPromise<ShieldSpec>;
  list(
    params: ShieldListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ShieldSpec> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData } = params;
    return this._client.get('/shields/list', {
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  get(params: ShieldGetParams, options?: Core.RequestOptions): Core.APIPromise<ShieldSpec | null> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/shields/get', {
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

export interface ShieldSpec {
  provider_config: ShieldSpec.ProviderConfig;

  shield_type: string;
}

export namespace ShieldSpec {
  export interface ProviderConfig {
    config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    provider_id: string;
  }
}

export interface ShieldListParams {
  /**
   * JSON-encoded provider data which will be made available to the adapter servicing
   * the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface ShieldGetParams {
  /**
   * Query param:
   */
  shield_type: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Shields {
  export import ShieldSpec = ShieldsAPI.ShieldSpec;
  export import ShieldListParams = ShieldsAPI.ShieldListParams;
  export import ShieldGetParams = ShieldsAPI.ShieldGetParams;
}
