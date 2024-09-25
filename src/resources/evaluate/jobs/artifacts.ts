// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ArtifactsAPI from './artifacts';
import * as JobsAPI from './jobs';

export class Artifacts extends APIResource {
  list(
    params: ArtifactListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobsAPI.EvaluationJobArtifacts> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/evaluate/job/artifacts', {
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

export interface ArtifactListParams {
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

export namespace Artifacts {
  export import ArtifactListParams = ArtifactsAPI.ArtifactListParams;
}
