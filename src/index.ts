// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

const environments = {
  production: 'http://any-hosted-llama-stack-client.com',
  sandbox: 'https://example.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `http://any-hosted-llama-stack-client.com`
   * - `sandbox` corresponds to `https://example.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['LLAMA_STACK_CLIENT_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Llama Stack Client API.
 */
export class LlamaStackClient extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Llama Stack Client API.
   *
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['LLAMA_STACK_CLIENT_BASE_URL'] ?? http://any-hosted-llama-stack-client.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('LLAMA_STACK_CLIENT_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.LlamaStackClientError(
        'Ambiguous URL; The `baseURL` option (or LLAMA_STACK_CLIENT_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  telemetry: API.Telemetry = new API.Telemetry(this);
  agents: API.Agents = new API.Agents(this);
  datasets: API.Datasets = new API.Datasets(this);
  evaluate: API.Evaluate = new API.Evaluate(this);
  evaluations: API.Evaluations = new API.Evaluations(this);
  inference: API.Inference = new API.Inference(this);
  safety: API.Safety = new API.Safety(this);
  memory: API.Memory = new API.Memory(this);
  postTraining: API.PostTraining = new API.PostTraining(this);
  rewardScoring: API.RewardScoringResource = new API.RewardScoringResource(this);
  syntheticDataGeneration: API.SyntheticDataGenerationResource = new API.SyntheticDataGenerationResource(
    this,
  );
  batchInference: API.BatchInference = new API.BatchInference(this);
  models: API.Models = new API.Models(this);
  memoryBanks: API.MemoryBanks = new API.MemoryBanks(this);
  shields: API.Shields = new API.Shields(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static LlamaStackClient = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static LlamaStackClientError = Errors.LlamaStackClientError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  LlamaStackClientError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace LlamaStackClient {
  export import RequestOptions = Core.RequestOptions;

  export import Telemetry = API.Telemetry;
  export import TelemetryGetTraceResponse = API.TelemetryGetTraceResponse;
  export import TelemetryGetTraceParams = API.TelemetryGetTraceParams;
  export import TelemetryLogParams = API.TelemetryLogParams;

  export import Agents = API.Agents;
  export import InferenceStep = API.InferenceStep;
  export import MemoryRetrievalStep = API.MemoryRetrievalStep;
  export import RestAPIExecutionConfig = API.RestAPIExecutionConfig;
  export import ShieldCallStep = API.ShieldCallStep;
  export import ToolExecutionStep = API.ToolExecutionStep;
  export import ToolParamDefinition = API.ToolParamDefinition;
  export import AgentCreateResponse = API.AgentCreateResponse;
  export import AgentCreateParams = API.AgentCreateParams;
  export import AgentDeleteParams = API.AgentDeleteParams;

  export import Datasets = API.Datasets;
  export import TrainEvalDataset = API.TrainEvalDataset;
  export import DatasetCreateParams = API.DatasetCreateParams;
  export import DatasetDeleteParams = API.DatasetDeleteParams;
  export import DatasetGetParams = API.DatasetGetParams;

  export import Evaluate = API.Evaluate;
  export import EvaluationJob = API.EvaluationJob;

  export import Evaluations = API.Evaluations;
  export import EvaluationSummarizationParams = API.EvaluationSummarizationParams;
  export import EvaluationTextGenerationParams = API.EvaluationTextGenerationParams;

  export import Inference = API.Inference;
  export import ChatCompletionStreamChunk = API.ChatCompletionStreamChunk;
  export import CompletionStreamChunk = API.CompletionStreamChunk;
  export import TokenLogProbs = API.TokenLogProbs;
  export import InferenceChatCompletionResponse = API.InferenceChatCompletionResponse;
  export import InferenceCompletionResponse = API.InferenceCompletionResponse;
  export import InferenceChatCompletionParams = API.InferenceChatCompletionParams;
  export import InferenceChatCompletionParamsNonStreaming = API.InferenceChatCompletionParamsNonStreaming;
  export import InferenceChatCompletionParamsStreaming = API.InferenceChatCompletionParamsStreaming;
  export import InferenceCompletionParams = API.InferenceCompletionParams;

  export import Safety = API.Safety;
  export import RunSheidResponse = API.RunSheidResponse;
  export import SafetyRunShieldParams = API.SafetyRunShieldParams;

  export import Memory = API.Memory;
  export import QueryDocuments = API.QueryDocuments;
  export import MemoryCreateResponse = API.MemoryCreateResponse;
  export import MemoryRetrieveResponse = API.MemoryRetrieveResponse;
  export import MemoryListResponse = API.MemoryListResponse;
  export import MemoryDropResponse = API.MemoryDropResponse;
  export import MemoryCreateParams = API.MemoryCreateParams;
  export import MemoryRetrieveParams = API.MemoryRetrieveParams;
  export import MemoryUpdateParams = API.MemoryUpdateParams;
  export import MemoryListParams = API.MemoryListParams;
  export import MemoryDropParams = API.MemoryDropParams;
  export import MemoryInsertParams = API.MemoryInsertParams;
  export import MemoryQueryParams = API.MemoryQueryParams;

  export import PostTraining = API.PostTraining;
  export import PostTrainingJob = API.PostTrainingJob;
  export import PostTrainingPreferenceOptimizeParams = API.PostTrainingPreferenceOptimizeParams;
  export import PostTrainingSupervisedFineTuneParams = API.PostTrainingSupervisedFineTuneParams;

  export import RewardScoringResource = API.RewardScoringResource;
  export import RewardScoring = API.RewardScoring;
  export import ScoredDialogGenerations = API.ScoredDialogGenerations;
  export import RewardScoringScoreParams = API.RewardScoringScoreParams;

  export import SyntheticDataGenerationResource = API.SyntheticDataGenerationResource;
  export import SyntheticDataGeneration = API.SyntheticDataGeneration;
  export import SyntheticDataGenerationGenerateParams = API.SyntheticDataGenerationGenerateParams;

  export import BatchInference = API.BatchInference;
  export import BatchChatCompletion = API.BatchChatCompletion;
  export import BatchInferenceChatCompletionParams = API.BatchInferenceChatCompletionParams;
  export import BatchInferenceCompletionParams = API.BatchInferenceCompletionParams;

  export import Models = API.Models;
  export import ModelServingSpec = API.ModelServingSpec;
  export import ModelListParams = API.ModelListParams;
  export import ModelGetParams = API.ModelGetParams;

  export import MemoryBanks = API.MemoryBanks;
  export import MemoryBankSpec = API.MemoryBankSpec;
  export import MemoryBankListParams = API.MemoryBankListParams;
  export import MemoryBankGetParams = API.MemoryBankGetParams;

  export import Shields = API.Shields;
  export import ShieldSpec = API.ShieldSpec;
  export import ShieldListParams = API.ShieldListParams;
  export import ShieldGetParams = API.ShieldGetParams;

  export import Attachment = API.Attachment;
  export import BatchCompletion = API.BatchCompletion;
  export import CompletionMessage = API.CompletionMessage;
  export import SamplingParams = API.SamplingParams;
  export import SystemMessage = API.SystemMessage;
  export import ToolCall = API.ToolCall;
  export import ToolResponseMessage = API.ToolResponseMessage;
  export import UserMessage = API.UserMessage;
}

export default LlamaStackClient;
