// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MemoryAPI from './memory';
import * as DocumentsAPI from './documents';

export class Memory extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);

  create(params: MemoryCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { body, 'X-LlamaStack-ProviderData': xLlamaStackProviderData } = params;
    return this._client.post('/memory/create', {
      body: body,
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  retrieve(params: MemoryRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/memory/get', {
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

  update(params: MemoryUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/memory/update', {
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

  list(params?: MemoryListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    params: MemoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData } = params;
    return this._client.get('/memory/list', {
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  drop(params: MemoryDropParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/memory/drop', {
      body,
      ...options,
      headers: {
        Accept: 'application/json',
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  insert(params: MemoryInsertParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/memory/insert', {
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

  query(params: MemoryQueryParams, options?: Core.RequestOptions): Core.APIPromise<QueryDocuments> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/memory/query', {
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

export interface QueryDocuments {
  chunks: Array<QueryDocuments.Chunk>;

  scores: Array<number>;
}

export namespace QueryDocuments {
  export interface Chunk {
    content: string | Array<string>;

    document_id: string;

    token_count: number;
  }
}

export type MemoryCreateResponse = unknown;

export type MemoryRetrieveResponse = unknown;

export type MemoryListResponse = unknown;

export type MemoryDropResponse = string;

export interface MemoryCreateParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface MemoryRetrieveParams {
  /**
   * Query param:
   */
  bank_id: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface MemoryUpdateParams {
  /**
   * Body param:
   */
  bank_id: string;

  /**
   * Body param:
   */
  documents: Array<MemoryUpdateParams.Document>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace MemoryUpdateParams {
  export interface Document {
    content: string | Array<string>;

    document_id: string;

    metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    mime_type?: string;
  }
}

export interface MemoryListParams {
  /**
   * JSON-encoded provider data which will be made available to the adapter servicing
   * the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface MemoryDropParams {
  /**
   * Body param:
   */
  bank_id: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface MemoryInsertParams {
  /**
   * Body param:
   */
  bank_id: string;

  /**
   * Body param:
   */
  documents: Array<MemoryInsertParams.Document>;

  /**
   * Body param:
   */
  ttl_seconds?: number;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace MemoryInsertParams {
  export interface Document {
    content: string | Array<string>;

    document_id: string;

    metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    mime_type?: string;
  }
}

export interface MemoryQueryParams {
  /**
   * Body param:
   */
  bank_id: string;

  /**
   * Body param:
   */
  query: string | Array<string>;

  /**
   * Body param:
   */
  params?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Memory {
  export import QueryDocuments = MemoryAPI.QueryDocuments;
  export import MemoryCreateResponse = MemoryAPI.MemoryCreateResponse;
  export import MemoryRetrieveResponse = MemoryAPI.MemoryRetrieveResponse;
  export import MemoryListResponse = MemoryAPI.MemoryListResponse;
  export import MemoryDropResponse = MemoryAPI.MemoryDropResponse;
  export import MemoryCreateParams = MemoryAPI.MemoryCreateParams;
  export import MemoryRetrieveParams = MemoryAPI.MemoryRetrieveParams;
  export import MemoryUpdateParams = MemoryAPI.MemoryUpdateParams;
  export import MemoryListParams = MemoryAPI.MemoryListParams;
  export import MemoryDropParams = MemoryAPI.MemoryDropParams;
  export import MemoryInsertParams = MemoryAPI.MemoryInsertParams;
  export import MemoryQueryParams = MemoryAPI.MemoryQueryParams;
  export import Documents = DocumentsAPI.Documents;
  export import DocumentRetrieveResponse = DocumentsAPI.DocumentRetrieveResponse;
  export import DocumentRetrieveParams = DocumentsAPI.DocumentRetrieveParams;
  export import DocumentDeleteParams = DocumentsAPI.DocumentDeleteParams;
}
