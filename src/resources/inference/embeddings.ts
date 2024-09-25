// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EmbeddingsAPI from './embeddings';

export class Embeddings extends APIResource {
  create(params: EmbeddingCreateParams, options?: Core.RequestOptions): Core.APIPromise<Embeddings> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/inference/embeddings', {
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

export interface Embeddings {
  embeddings: Array<Array<number>>;
}

export interface EmbeddingCreateParams {
  /**
   * Body param:
   */
  contents: Array<string | Array<string>>;

  /**
   * Body param:
   */
  model: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Embeddings {
  export import Embeddings = EmbeddingsAPI.Embeddings;
  export import EmbeddingCreateParams = EmbeddingsAPI.EmbeddingCreateParams;
}
