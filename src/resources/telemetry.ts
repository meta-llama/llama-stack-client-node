// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TelemetryAPI from './telemetry';

export class Telemetry extends APIResource {
  getTrace(
    params: TelemetryGetTraceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TelemetryGetTraceResponse> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...query } = params;
    return this._client.get('/telemetry/get_trace', {
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

  log(params: TelemetryLogParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-LlamaStack-ProviderData': xLlamaStackProviderData, ...body } = params;
    return this._client.post('/telemetry/log_event', {
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

export interface TelemetryGetTraceResponse {
  root_span_id: string;

  start_time: string;

  trace_id: string;

  end_time?: string;
}

export interface TelemetryGetTraceParams {
  /**
   * Query param:
   */
  trace_id: string;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export interface TelemetryLogParams {
  /**
   * Body param:
   */
  event:
    | TelemetryLogParams.UnstructuredLogEvent
    | TelemetryLogParams.MetricEvent
    | TelemetryLogParams.StructuredLogEvent;

  /**
   * Header param: JSON-encoded provider data which will be made available to the
   * adapter servicing the API
   */
  'X-LlamaStack-ProviderData'?: string;
}

export namespace TelemetryLogParams {
  export interface UnstructuredLogEvent {
    message: string;

    severity: 'verbose' | 'debug' | 'info' | 'warn' | 'error' | 'critical';

    span_id: string;

    timestamp: string;

    trace_id: string;

    type: 'unstructured_log';

    attributes?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;
  }

  export interface MetricEvent {
    metric: string;

    span_id: string;

    timestamp: string;

    trace_id: string;

    type: 'metric';

    unit: string;

    value: number;

    attributes?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;
  }

  export interface StructuredLogEvent {
    payload: StructuredLogEvent.SpanStartPayload | StructuredLogEvent.SpanEndPayload;

    span_id: string;

    timestamp: string;

    trace_id: string;

    type: 'structured_log';

    attributes?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;
  }

  export namespace StructuredLogEvent {
    export interface SpanStartPayload {
      name: string;

      type: 'span_start';

      parent_span_id?: string;
    }

    export interface SpanEndPayload {
      status: 'ok' | 'error';

      type: 'span_end';
    }
  }
}

export namespace Telemetry {
  export import TelemetryGetTraceResponse = TelemetryAPI.TelemetryGetTraceResponse;
  export import TelemetryGetTraceParams = TelemetryAPI.TelemetryGetTraceParams;
  export import TelemetryLogParams = TelemetryAPI.TelemetryLogParams;
}
