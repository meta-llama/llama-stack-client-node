// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PostTrainingAPI from './post-training';
import * as DatasetsAPI from '../datasets';
import * as JobsAPI from './jobs';

export class PostTraining extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  preferenceOptimize(
    params: PostTrainingPreferenceOptimizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTrainingJob> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/post_training/preference_optimize', {
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

  supervisedFineTune(
    params: PostTrainingSupervisedFineTuneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTrainingJob> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/post_training/supervised_fine_tune', {
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

export interface PostTrainingJob {
  job_uuid: string;
}

export interface PostTrainingPreferenceOptimizeParams {
  /**
   * Body param:
   */
  algorithm: 'dpo';

  /**
   * Body param:
   */
  algorithm_config: PostTrainingPreferenceOptimizeParams.AlgorithmConfig;

  /**
   * Body param:
   */
  dataset: DatasetsAPI.TrainEvalDataset;

  /**
   * Body param:
   */
  finetuned_model: string;

  /**
   * Body param:
   */
  hyperparam_search_config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  /**
   * Body param:
   */
  job_uuid: string;

  /**
   * Body param:
   */
  logger_config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  /**
   * Body param:
   */
  optimizer_config: PostTrainingPreferenceOptimizeParams.OptimizerConfig;

  /**
   * Body param:
   */
  training_config: PostTrainingPreferenceOptimizeParams.TrainingConfig;

  /**
   * Body param:
   */
  validation_dataset: DatasetsAPI.TrainEvalDataset;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace PostTrainingPreferenceOptimizeParams {
  export interface AlgorithmConfig {
    epsilon: number;

    gamma: number;

    reward_clip: number;

    reward_scale: number;
  }

  export interface OptimizerConfig {
    lr: number;

    lr_min: number;

    optimizer_type: 'adam' | 'adamw' | 'sgd';

    weight_decay: number;
  }

  export interface TrainingConfig {
    batch_size: number;

    enable_activation_checkpointing: boolean;

    fsdp_cpu_offload: boolean;

    memory_efficient_fsdp_wrap: boolean;

    n_epochs: number;

    n_iters: number;

    shuffle: boolean;
  }
}

export interface PostTrainingSupervisedFineTuneParams {
  /**
   * Body param:
   */
  algorithm: 'full' | 'lora' | 'qlora' | 'dora';

  /**
   * Body param:
   */
  algorithm_config:
    | PostTrainingSupervisedFineTuneParams.LoraFinetuningConfig
    | PostTrainingSupervisedFineTuneParams.QLoraFinetuningConfig
    | PostTrainingSupervisedFineTuneParams.DoraFinetuningConfig;

  /**
   * Body param:
   */
  dataset: DatasetsAPI.TrainEvalDataset;

  /**
   * Body param:
   */
  hyperparam_search_config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  /**
   * Body param:
   */
  job_uuid: string;

  /**
   * Body param:
   */
  logger_config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  /**
   * Body param:
   */
  model: string;

  /**
   * Body param:
   */
  optimizer_config: PostTrainingSupervisedFineTuneParams.OptimizerConfig;

  /**
   * Body param:
   */
  training_config: PostTrainingSupervisedFineTuneParams.TrainingConfig;

  /**
   * Body param:
   */
  validation_dataset: DatasetsAPI.TrainEvalDataset;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace PostTrainingSupervisedFineTuneParams {
  export interface LoraFinetuningConfig {
    alpha: number;

    apply_lora_to_mlp: boolean;

    apply_lora_to_output: boolean;

    lora_attn_modules: Array<string>;

    rank: number;
  }

  export interface QLoraFinetuningConfig {
    alpha: number;

    apply_lora_to_mlp: boolean;

    apply_lora_to_output: boolean;

    lora_attn_modules: Array<string>;

    rank: number;
  }

  export interface DoraFinetuningConfig {
    alpha: number;

    apply_lora_to_mlp: boolean;

    apply_lora_to_output: boolean;

    lora_attn_modules: Array<string>;

    rank: number;
  }

  export interface OptimizerConfig {
    lr: number;

    lr_min: number;

    optimizer_type: 'adam' | 'adamw' | 'sgd';

    weight_decay: number;
  }

  export interface TrainingConfig {
    batch_size: number;

    enable_activation_checkpointing: boolean;

    fsdp_cpu_offload: boolean;

    memory_efficient_fsdp_wrap: boolean;

    n_epochs: number;

    n_iters: number;

    shuffle: boolean;
  }
}

export namespace PostTraining {
  export import PostTrainingJob = PostTrainingAPI.PostTrainingJob;
  export import PostTrainingPreferenceOptimizeParams = PostTrainingAPI.PostTrainingPreferenceOptimizeParams;
  export import PostTrainingSupervisedFineTuneParams = PostTrainingAPI.PostTrainingSupervisedFineTuneParams;
  export import Jobs = JobsAPI.Jobs;
  export import PostTrainingJobArtifacts = JobsAPI.PostTrainingJobArtifacts;
  export import PostTrainingJobLogStream = JobsAPI.PostTrainingJobLogStream;
  export import PostTrainingJobStatus = JobsAPI.PostTrainingJobStatus;
  export import JobListParams = JobsAPI.JobListParams;
  export import JobArtifactsParams = JobsAPI.JobArtifactsParams;
  export import JobCancelParams = JobsAPI.JobCancelParams;
  export import JobLogsParams = JobsAPI.JobLogsParams;
  export import JobStatusParams = JobsAPI.JobStatusParams;
}
