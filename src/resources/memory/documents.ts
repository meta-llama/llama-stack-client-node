// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DocumentsAPI from './documents';

export class Documents extends APIResource {
  retrieve(
    params: DocumentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentRetrieveResponse> {
    const { bank_id, 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/memory/documents/get', {
      query: { bank_id },
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

  delete(params: DocumentDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/memory/documents/delete', {
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

export interface DocumentRetrieveResponse {
  content: string | Array<string>;

  document_id: string;

  metadata: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  mime_type?: string;
}

export interface DocumentRetrieveParams {
  /**
   * Query param:
   */
  bank_id: string;

  /**
   * Body param:
   */
  document_ids: Array<string>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface DocumentDeleteParams {
  /**
   * Body param:
   */
  bank_id: string;

  /**
   * Body param:
   */
  document_ids: Array<string>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Documents {
  export import DocumentRetrieveResponse = DocumentsAPI.DocumentRetrieveResponse;
  export import DocumentRetrieveParams = DocumentsAPI.DocumentRetrieveParams;
  export import DocumentDeleteParams = DocumentsAPI.DocumentDeleteParams;
}
