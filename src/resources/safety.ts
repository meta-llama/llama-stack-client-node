// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Safety extends APIResource {
  runShield(body: SafetyRunShieldParams, options?: Core.RequestOptions): Core.APIPromise<RunShieldResponse> {
    return this._client.post('/v1/safety/run-shield', { body, ...options });
  }
}

export interface RunShieldResponse {
  violation?: Shared.SafetyViolation;
}

export interface SafetyRunShieldParams {
  messages: Array<Shared.Message>;

  params: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  shield_id: string;
}

export declare namespace Safety {
  export { type RunShieldResponse as RunShieldResponse, type SafetyRunShieldParams as SafetyRunShieldParams };
}
