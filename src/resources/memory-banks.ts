// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as MemoryBanksAPI from './memory-banks';

export class MemoryBanks extends APIResource {
  list(params?: MemoryBankListParams, options?: Core.RequestOptions): Core.APIPromise<MemoryBankSpec>;
  list(options?: Core.RequestOptions): Core.APIPromise<MemoryBankSpec>;
  list(
    params: MemoryBankListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemoryBankSpec> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData } = params;
    return this._client.get('/memory_banks/list', {
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  get(params: MemoryBankGetParams, options?: Core.RequestOptions): Core.APIPromise<MemoryBankSpec | null> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/memory_banks/get', {
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

export interface MemoryBankSpec {
  bank_type: 'vector' | 'keyvalue' | 'keyword' | 'graph';

  provider_config: MemoryBankSpec.ProviderConfig;
}

export namespace MemoryBankSpec {
  export interface ProviderConfig {
    config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    provider_id: string;
  }
}

export interface MemoryBankListParams {
  /**
   * JSON-encoded provider data which will be made available to the adapter servicing
   * the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface MemoryBankGetParams {
  /**
   * Query param:
   */
  bank_type: 'vector' | 'keyvalue' | 'keyword' | 'graph';

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace MemoryBanks {
  export import MemoryBankSpec = MemoryBanksAPI.MemoryBankSpec;
  export import MemoryBankListParams = MemoryBanksAPI.MemoryBankListParams;
  export import MemoryBankGetParams = MemoryBanksAPI.MemoryBankGetParams;
}
