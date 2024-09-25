// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as LogsAPI from './logs';
import * as JobsAPI from './jobs';

export class Logs extends APIResource {
  list(
    params: LogListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobsAPI.EvaluationJobLogStream> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/evaluate/job/logs', {
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

export interface LogListParams {
  /**
   * Query param:
   */
  job_uuid: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Logs {
  export import LogListParams = LogsAPI.LogListParams;
}
