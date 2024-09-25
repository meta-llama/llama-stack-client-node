// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource postTraining', () => {
  test('preferenceOptimize: only required params', async () => {
    const responsePromise = client.postTraining.preferenceOptimize({
      algorithm: 'dpo',
      algorithm_config: { epsilon: 0, gamma: 0, reward_clip: 0, reward_scale: 0 },
      dataset: { columns: { foo: 'dialog' }, content_url: 'https://example.com' },
      finetuned_model: 'https://example.com',
      hyperparam_search_config: { foo: true },
      job_uuid: 'job_uuid',
      logger_config: { foo: true },
      optimizer_config: { lr: 0, lr_min: 0, optimizer_type: 'adam', weight_decay: 0 },
      training_config: {
        batch_size: 0,
        enable_activation_checkpointing: true,
        fsdp_cpu_offload: true,
        memory_efficient_fsdp_wrap: true,
        n_epochs: 0,
        n_iters: 0,
        shuffle: true,
      },
      validation_dataset: { columns: { foo: 'dialog' }, content_url: 'https://example.com' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('preferenceOptimize: required and optional params', async () => {
    const response = await client.postTraining.preferenceOptimize({
      algorithm: 'dpo',
      algorithm_config: { epsilon: 0, gamma: 0, reward_clip: 0, reward_scale: 0 },
      dataset: { columns: { foo: 'dialog' }, content_url: 'https://example.com', metadata: { foo: true } },
      finetuned_model: 'https://example.com',
      hyperparam_search_config: { foo: true },
      job_uuid: 'job_uuid',
      logger_config: { foo: true },
      optimizer_config: { lr: 0, lr_min: 0, optimizer_type: 'adam', weight_decay: 0 },
      training_config: {
        batch_size: 0,
        enable_activation_checkpointing: true,
        fsdp_cpu_offload: true,
        memory_efficient_fsdp_wrap: true,
        n_epochs: 0,
        n_iters: 0,
        shuffle: true,
      },
      validation_dataset: {
        columns: { foo: 'dialog' },
        content_url: 'https://example.com',
        metadata: { foo: true },
      },
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });

  test('supervisedFineTune: only required params', async () => {
    const responsePromise = client.postTraining.supervisedFineTune({
      algorithm: 'full',
      algorithm_config: {
        alpha: 0,
        apply_lora_to_mlp: true,
        apply_lora_to_output: true,
        lora_attn_modules: ['string', 'string', 'string'],
        rank: 0,
      },
      dataset: { columns: { foo: 'dialog' }, content_url: 'https://example.com' },
      hyperparam_search_config: { foo: true },
      job_uuid: 'job_uuid',
      logger_config: { foo: true },
      model: 'model',
      optimizer_config: { lr: 0, lr_min: 0, optimizer_type: 'adam', weight_decay: 0 },
      training_config: {
        batch_size: 0,
        enable_activation_checkpointing: true,
        fsdp_cpu_offload: true,
        memory_efficient_fsdp_wrap: true,
        n_epochs: 0,
        n_iters: 0,
        shuffle: true,
      },
      validation_dataset: { columns: { foo: 'dialog' }, content_url: 'https://example.com' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('supervisedFineTune: required and optional params', async () => {
    const response = await client.postTraining.supervisedFineTune({
      algorithm: 'full',
      algorithm_config: {
        alpha: 0,
        apply_lora_to_mlp: true,
        apply_lora_to_output: true,
        lora_attn_modules: ['string', 'string', 'string'],
        rank: 0,
      },
      dataset: { columns: { foo: 'dialog' }, content_url: 'https://example.com', metadata: { foo: true } },
      hyperparam_search_config: { foo: true },
      job_uuid: 'job_uuid',
      logger_config: { foo: true },
      model: 'model',
      optimizer_config: { lr: 0, lr_min: 0, optimizer_type: 'adam', weight_decay: 0 },
      training_config: {
        batch_size: 0,
        enable_activation_checkpointing: true,
        fsdp_cpu_offload: true,
        memory_efficient_fsdp_wrap: true,
        n_epochs: 0,
        n_iters: 0,
        shuffle: true,
      },
      validation_dataset: {
        columns: { foo: 'dialog' },
        content_url: 'https://example.com',
        metadata: { foo: true },
      },
      'X-LlamaStack-ProviderData': 'X-LlamaStack-ProviderData',
    });
  });
});
