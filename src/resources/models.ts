// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ModelsAPI from './models';

export class Models extends APIResource {
  list(params?: ModelListParams, options?: Core.RequestOptions): Core.APIPromise<ModelServingSpec>;
  list(options?: Core.RequestOptions): Core.APIPromise<ModelServingSpec>;
  list(
    params: ModelListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelServingSpec> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData } = params;
    return this._client.get('/models/list', {
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  get(params: ModelGetParams, options?: Core.RequestOptions): Core.APIPromise<ModelServingSpec | null> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/models/get', {
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

export interface ModelServingSpec {
  /**
   * The model family and SKU of the model along with other parameters corresponding
   * to the model.
   */
  llama_model: unknown;

  provider_config: ModelServingSpec.ProviderConfig;
}

export namespace ModelServingSpec {
  export interface ProviderConfig {
    config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    provider_id: string;
  }
}

export interface ModelListParams {
  /**
   * JSON-encoded provider data which will be made available to the adapter servicing
   * the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface ModelGetParams {
  /**
   * Query param:
   */
  core_model_id: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Models {
  export import ModelServingSpec = ModelsAPI.ModelServingSpec;
  export import ModelListParams = ModelsAPI.ModelListParams;
  export import ModelGetParams = ModelsAPI.ModelGetParams;
}
