// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as JobAPI from './job';
import {
  Job,
  JobArtifactsParams,
  JobArtifactsResponse,
  JobCancelParams,
  JobListResponse,
  JobStatusParams,
  JobStatusResponse,
} from './job';

export class PostTraining extends APIResource {
  job: JobAPI.Job = new JobAPI.Job(this._client);

  preferenceOptimize(
    body: PostTrainingPreferenceOptimizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTrainingJob> {
    return this._client.post('/v1/post-training/preference-optimize', { body, ...options });
  }

  supervisedFineTune(
    body: PostTrainingSupervisedFineTuneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostTrainingJob> {
    return this._client.post('/v1/post-training/supervised-fine-tune', { body, ...options });
  }
}

export type AlgorithmConfig = AlgorithmConfig.LoraFinetuningConfig | AlgorithmConfig.QatFinetuningConfig;

export namespace AlgorithmConfig {
  export interface LoraFinetuningConfig {
    alpha: number;

    apply_lora_to_mlp: boolean;

    apply_lora_to_output: boolean;

    lora_attn_modules: Array<string>;

    rank: number;

    type: 'LoRA';

    quantize_base?: boolean;

    use_dora?: boolean;
  }

  export interface QatFinetuningConfig {
    group_size: number;

    quantizer_name: string;

    type: 'QAT';
  }
}

export interface ListPostTrainingJobsResponse {
  data: Array<ListPostTrainingJobsResponse.Data>;
}

export namespace ListPostTrainingJobsResponse {
  export interface Data {
    job_uuid: string;
  }
}

export interface PostTrainingJob {
  job_uuid: string;
}

export interface PostTrainingPreferenceOptimizeParams {
  algorithm_config: PostTrainingPreferenceOptimizeParams.AlgorithmConfig;

  finetuned_model: string;

  hyperparam_search_config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  job_uuid: string;

  logger_config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  training_config: PostTrainingPreferenceOptimizeParams.TrainingConfig;
}

export namespace PostTrainingPreferenceOptimizeParams {
  export interface AlgorithmConfig {
    epsilon: number;

    gamma: number;

    reward_clip: number;

    reward_scale: number;
  }

  export interface TrainingConfig {
    data_config: TrainingConfig.DataConfig;

    gradient_accumulation_steps: number;

    max_steps_per_epoch: number;

    max_validation_steps: number;

    n_epochs: number;

    optimizer_config: TrainingConfig.OptimizerConfig;

    dtype?: string;

    efficiency_config?: TrainingConfig.EfficiencyConfig;
  }

  export namespace TrainingConfig {
    export interface DataConfig {
      batch_size: number;

      data_format: 'instruct' | 'dialog';

      dataset_id: string;

      shuffle: boolean;

      packed?: boolean;

      train_on_input?: boolean;

      validation_dataset_id?: string;
    }

    export interface OptimizerConfig {
      lr: number;

      num_warmup_steps: number;

      optimizer_type: 'adam' | 'adamw' | 'sgd';

      weight_decay: number;
    }

    export interface EfficiencyConfig {
      enable_activation_checkpointing?: boolean;

      enable_activation_offloading?: boolean;

      fsdp_cpu_offload?: boolean;

      memory_efficient_fsdp_wrap?: boolean;
    }
  }
}

export interface PostTrainingSupervisedFineTuneParams {
  hyperparam_search_config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  job_uuid: string;

  logger_config: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  model: string;

  training_config: PostTrainingSupervisedFineTuneParams.TrainingConfig;

  algorithm_config?: AlgorithmConfig;

  checkpoint_dir?: string;
}

export namespace PostTrainingSupervisedFineTuneParams {
  export interface TrainingConfig {
    data_config: TrainingConfig.DataConfig;

    gradient_accumulation_steps: number;

    max_steps_per_epoch: number;

    max_validation_steps: number;

    n_epochs: number;

    optimizer_config: TrainingConfig.OptimizerConfig;

    dtype?: string;

    efficiency_config?: TrainingConfig.EfficiencyConfig;
  }

  export namespace TrainingConfig {
    export interface DataConfig {
      batch_size: number;

      data_format: 'instruct' | 'dialog';

      dataset_id: string;

      shuffle: boolean;

      packed?: boolean;

      train_on_input?: boolean;

      validation_dataset_id?: string;
    }

    export interface OptimizerConfig {
      lr: number;

      num_warmup_steps: number;

      optimizer_type: 'adam' | 'adamw' | 'sgd';

      weight_decay: number;
    }

    export interface EfficiencyConfig {
      enable_activation_checkpointing?: boolean;

      enable_activation_offloading?: boolean;

      fsdp_cpu_offload?: boolean;

      memory_efficient_fsdp_wrap?: boolean;
    }
  }
}

PostTraining.Job = Job;

export declare namespace PostTraining {
  export {
    type AlgorithmConfig as AlgorithmConfig,
    type ListPostTrainingJobsResponse as ListPostTrainingJobsResponse,
    type PostTrainingJob as PostTrainingJob,
    type PostTrainingPreferenceOptimizeParams as PostTrainingPreferenceOptimizeParams,
    type PostTrainingSupervisedFineTuneParams as PostTrainingSupervisedFineTuneParams,
  };

  export {
    Job as Job,
    type JobListResponse as JobListResponse,
    type JobArtifactsResponse as JobArtifactsResponse,
    type JobStatusResponse as JobStatusResponse,
    type JobArtifactsParams as JobArtifactsParams,
    type JobCancelParams as JobCancelParams,
    type JobStatusParams as JobStatusParams,
  };
}
