// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as StepsAPI from './steps';
import * as AgentsAPI from './agents';

export class Steps extends APIResource {
  retrieve(params: StepRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<AgentsStep> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/agents/step/get', {
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

export interface AgentsStep {
  step:
    | AgentsAPI.InferenceStep
    | AgentsAPI.ToolExecutionStep
    | AgentsAPI.ShieldCallStep
    | AgentsAPI.MemoryRetrievalStep;
}

export interface StepRetrieveParams {
  /**
   * Query param:
   */
  agent_id: string;

  /**
   * Query param:
   */
  step_id: string;

  /**
   * Query param:
   */
  turn_id: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace Steps {
  export import AgentsStep = StepsAPI.AgentsStep;
  export import StepRetrieveParams = StepsAPI.StepRetrieveParams;
}
