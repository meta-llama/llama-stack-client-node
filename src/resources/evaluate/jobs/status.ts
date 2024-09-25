// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as StatusAPI from './status';
import * as JobsAPI from './jobs';

export class Status extends APIResource {
  list(
    params: StatusListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobsAPI.EvaluationJobStatus> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/evaluate/job/status', {
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

export interface StatusListParams {
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

export namespace Status {
  export import StatusListParams = StatusAPI.StatusListParams;
}
