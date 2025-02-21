// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Telemetry extends APIResource {
  getSpan(
    traceId: string,
    spanId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TelemetryGetSpanResponse> {
    return this._client.get(`/v1/telemetry/traces/${traceId}/spans/${spanId}`, options);
  }

  getSpanTree(
    spanId: string,
    body: TelemetryGetSpanTreeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TelemetryGetSpanTreeResponse> {
    return (
      this._client.post(`/v1/telemetry/spans/${spanId}/tree`, { body, ...options }) as Core.APIPromise<{
        data: TelemetryGetSpanTreeResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  getTrace(traceId: string, options?: Core.RequestOptions): Core.APIPromise<Trace> {
    return this._client.get(`/v1/telemetry/traces/${traceId}`, options);
  }

  logEvent(body: TelemetryLogEventParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/telemetry/events', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  querySpans(
    body: TelemetryQuerySpansParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TelemetryQuerySpansResponse> {
    return (
      this._client.post('/v1/telemetry/spans', { body, ...options }) as Core.APIPromise<{
        data: TelemetryQuerySpansResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  queryTraces(
    body: TelemetryQueryTracesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TelemetryQueryTracesResponse> {
    return (
      this._client.post('/v1/telemetry/traces', { body, ...options }) as Core.APIPromise<{
        data: TelemetryQueryTracesResponse;
      }>
    )._thenUnwrap((obj) => obj.data);
  }

  saveSpansToDataset(
    body: TelemetrySaveSpansToDatasetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/v1/telemetry/spans/export', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type Event = Event.UnstructuredLogEvent | Event.MetricEvent | Event.StructuredLogEvent;

export namespace Event {
  export interface UnstructuredLogEvent {
    message: string;

    severity: 'verbose' | 'debug' | 'info' | 'warn' | 'error' | 'critical';

    span_id: string;

    timestamp: string;

    trace_id: string;

    type: 'unstructured_log';

    attributes?: Record<string, string | number | boolean | null>;
  }

  export interface MetricEvent {
    metric: string;

    span_id: string;

    timestamp: string;

    trace_id: string;

    type: 'metric';

    unit: string;

    value: number;

    attributes?: Record<string, string | number | boolean | null>;
  }

  export interface StructuredLogEvent {
    payload: StructuredLogEvent.SpanStartPayload | StructuredLogEvent.SpanEndPayload;

    span_id: string;

    timestamp: string;

    trace_id: string;

    type: 'structured_log';

    attributes?: Record<string, string | number | boolean | null>;
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

export interface QueryCondition {
  key: string;

  op: 'eq' | 'ne' | 'gt' | 'lt';

  value: boolean | number | string | Array<unknown> | unknown | null;
}

export interface QuerySpansResponse {
  data: TelemetryQuerySpansResponse;
}

export interface SpanWithStatus {
  name: string;

  span_id: string;

  start_time: string;

  trace_id: string;

  attributes?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  end_time?: string;

  parent_span_id?: string;

  status?: 'ok' | 'error';
}

export interface Trace {
  root_span_id: string;

  start_time: string;

  trace_id: string;

  end_time?: string;
}

export interface TelemetryGetSpanResponse {
  name: string;

  span_id: string;

  start_time: string;

  trace_id: string;

  attributes?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

  end_time?: string;

  parent_span_id?: string;
}

export type TelemetryGetSpanTreeResponse = Record<string, SpanWithStatus>;

export type TelemetryQuerySpansResponse = Array<TelemetryQuerySpansResponse.TelemetryQuerySpansResponseItem>;

export namespace TelemetryQuerySpansResponse {
  export interface TelemetryQuerySpansResponseItem {
    name: string;

    span_id: string;

    start_time: string;

    trace_id: string;

    attributes?: Record<string, boolean | number | string | Array<unknown> | unknown | null>;

    end_time?: string;

    parent_span_id?: string;
  }
}

export type TelemetryQueryTracesResponse = Array<Trace>;

export interface TelemetryGetSpanTreeParams {
  attributes_to_return?: Array<string>;

  max_depth?: number;
}

export interface TelemetryLogEventParams {
  event: Event;

  ttl_seconds: number;
}

export interface TelemetryQuerySpansParams {
  attribute_filters: Array<QueryCondition>;

  attributes_to_return: Array<string>;

  max_depth?: number;
}

export interface TelemetryQueryTracesParams {
  attribute_filters?: Array<QueryCondition>;

  limit?: number;

  offset?: number;

  order_by?: Array<string>;
}

export interface TelemetrySaveSpansToDatasetParams {
  attribute_filters: Array<QueryCondition>;

  attributes_to_save: Array<string>;

  dataset_id: string;

  max_depth?: number;
}

export declare namespace Telemetry {
  export {
    type Event as Event,
    type QueryCondition as QueryCondition,
    type QuerySpansResponse as QuerySpansResponse,
    type SpanWithStatus as SpanWithStatus,
    type Trace as Trace,
    type TelemetryGetSpanResponse as TelemetryGetSpanResponse,
    type TelemetryGetSpanTreeResponse as TelemetryGetSpanTreeResponse,
    type TelemetryQuerySpansResponse as TelemetryQuerySpansResponse,
    type TelemetryQueryTracesResponse as TelemetryQueryTracesResponse,
    type TelemetryGetSpanTreeParams as TelemetryGetSpanTreeParams,
    type TelemetryLogEventParams as TelemetryLogEventParams,
    type TelemetryQuerySpansParams as TelemetryQuerySpansParams,
    type TelemetryQueryTracesParams as TelemetryQueryTracesParams,
    type TelemetrySaveSpansToDatasetParams as TelemetrySaveSpansToDatasetParams,
  };
}
