// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as JobsAPI from './jobs';
import * as PostTrainingAPI from './post-training';

export class Jobs extends APIResource {
  list(
    params?: JobListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTrainingAPI.PostTrainingJob>;
  list(options?: Core.RequestOptions): Core.APIPromise<PostTrainingAPI.PostTrainingJob>;
  list(
    params: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTrainingAPI.PostTrainingJob> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData } = params;
    return this._client.get('/post_training/jobs', {
      ...options,
      headers: {
        ...(xLlamaStackProviderData != null ?
          { 'X-LlamaStack-ProviderData': xLlamaStackProviderData }
        : undefined),
        ...options?.headers,
      },
    });
  }

  artifacts(
    params: JobArtifactsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTrainingJobArtifacts> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/post_training/job/artifacts', {
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

  cancel(params: JobCancelParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/post_training/job/cancel', {
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

  logs(params: JobLogsParams, options?: Core.RequestOptions): Core.APIPromise<PostTrainingJobLogStream> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/post_training/job/logs', {
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

  status(params: JobStatusParams, options?: Core.RequestOptions): Core.APIPromise<PostTrainingJobStatus> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/post_training/job/status', {
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

export interface PostTrainingJobArtifacts {
  checkpoints: Array<unknown>;

  job_uuid: string;
}

export interface PostTrainingJobLogStream {
  job_uuid: string;

  log_lines: Array<string>;
}

export interface PostTrainingJobStatus {
  checkpoints: Array<unknown>;

  job_uuid: string;

  status: 'running' | 'completed' | 'failed' | 'scheduled';

  completed_at?: string;

  resources_allocated?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  scheduled_at?: string;

  started_at?: string;
}

export interface JobListParams {
  /**
   * JSON-encoded provider data which will be made available to the adapter servicing
   * the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface JobArtifactsParams {
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

export interface JobLogsParams {
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

export interface JobStatusParams {
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

export namespace Jobs {
  export import PostTrainingJobArtifacts = JobsAPI.PostTrainingJobArtifacts;
  export import PostTrainingJobLogStream = JobsAPI.PostTrainingJobLogStream;
  export import PostTrainingJobStatus = JobsAPI.PostTrainingJobStatus;
  export import JobListParams = JobsAPI.JobListParams;
  export import JobArtifactsParams = JobsAPI.JobArtifactsParams;
  export import JobCancelParams = JobsAPI.JobCancelParams;
  export import JobLogsParams = JobsAPI.JobLogsParams;
  export import JobStatusParams = JobsAPI.JobStatusParams;
}
