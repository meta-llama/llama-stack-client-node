// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as QuestionAnsweringAPI from './question-answering';
import * as EvaluateAPI from './evaluate';

export class QuestionAnswering extends APIResource {
  create(
    params: QuestionAnsweringCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateAPI.EvaluationJob> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/evaluate/question_answering/', {
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

export interface QuestionAnsweringCreateParams {
  /**
   * Body param:
   */
  metrics: Array<'em' | 'f1'>;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace QuestionAnswering {
  export import QuestionAnsweringCreateParams = QuestionAnsweringAPI.QuestionAnsweringCreateParams;
}
