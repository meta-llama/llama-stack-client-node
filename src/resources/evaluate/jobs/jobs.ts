// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as JobsAPI from './jobs';
import * as EvaluateAPI from '../evaluate';
import * as ArtifactsAPI from './artifacts';
import * as LogsAPI from './logs';
import * as StatusAPI from './status';

export class Jobs extends APIResource {
  artifacts: ArtifactsAPI.Artifacts = new ArtifactsAPI.Artifacts(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  list(params?: JobListParams, options?: Core.RequestOptions): Core.APIPromise<EvaluateAPI.EvaluationJob>;
  list(options?: Core.RequestOptions): Core.APIPromise<EvaluateAPI.EvaluationJob>;
  list(
    params: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateAPI.EvaluationJob> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData } = params;
    return this._client.get('/evaluate/jobs', {
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  cancel(params: JobCancelParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/evaluate/job/cancel', {
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

export interface EvaluationJobArtifacts {
  job_uuid: string;
}

export interface EvaluationJobLogStream {
  job_uuid: string;
}

export interface EvaluationJobStatus {
  job_uuid: string;
}

export interface JobListParams {
  /**
   * JSON-encoded provider data which will be made available to the adapter servicing
   * the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface JobCancelParams {
  /**
   * Body param:
   */
  job_uuid: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Jobs {
  export import EvaluationJobArtifacts = JobsAPI.EvaluationJobArtifacts;
  export import EvaluationJobLogStream = JobsAPI.EvaluationJobLogStream;
  export import EvaluationJobStatus = JobsAPI.EvaluationJobStatus;
  export import JobListParams = JobsAPI.JobListParams;
  export import JobCancelParams = JobsAPI.JobCancelParams;
  export import Artifacts = ArtifactsAPI.Artifacts;
  export import ArtifactListParams = ArtifactsAPI.ArtifactListParams;
  export import Logs = LogsAPI.Logs;
  export import LogListParams = LogsAPI.LogListParams;
  export import Status = StatusAPI.Status;
  export import StatusListParams = StatusAPI.StatusListParams;
}
