# Shared

Types:

- <code><a href="./src/resources/shared.ts">AgentConfig</a></code>
- <code><a href="./src/resources/shared.ts">BatchCompletion</a></code>
- <code><a href="./src/resources/shared.ts">CompletionMessage</a></code>
- <code><a href="./src/resources/shared.ts">ContentDelta</a></code>
- <code><a href="./src/resources/shared.ts">Document</a></code>
- <code><a href="./src/resources/shared.ts">InterleavedContent</a></code>
- <code><a href="./src/resources/shared.ts">InterleavedContentItem</a></code>
- <code><a href="./src/resources/shared.ts">Message</a></code>
- <code><a href="./src/resources/shared.ts">ParamType</a></code>
- <code><a href="./src/resources/shared.ts">QueryConfig</a></code>
- <code><a href="./src/resources/shared.ts">QueryGeneratorConfig</a></code>
- <code><a href="./src/resources/shared.ts">QueryResult</a></code>
- <code><a href="./src/resources/shared.ts">ResponseFormat</a></code>
- <code><a href="./src/resources/shared.ts">ReturnType</a></code>
- <code><a href="./src/resources/shared.ts">SafetyViolation</a></code>
- <code><a href="./src/resources/shared.ts">SamplingParams</a></code>
- <code><a href="./src/resources/shared.ts">ScoringResult</a></code>
- <code><a href="./src/resources/shared.ts">SystemMessage</a></code>
- <code><a href="./src/resources/shared.ts">ToolCall</a></code>
- <code><a href="./src/resources/shared.ts">ToolParamDefinition</a></code>
- <code><a href="./src/resources/shared.ts">ToolResponseMessage</a></code>
- <code><a href="./src/resources/shared.ts">URL</a></code>
- <code><a href="./src/resources/shared.ts">UserMessage</a></code>

# Toolgroups

Types:

- <code><a href="./src/resources/toolgroups.ts">ListToolGroupsResponse</a></code>
- <code><a href="./src/resources/toolgroups.ts">ToolGroup</a></code>
- <code><a href="./src/resources/toolgroups.ts">ToolgroupListResponse</a></code>

Methods:

- <code title="get /v1/toolgroups">client.toolgroups.<a href="./src/resources/toolgroups.ts">list</a>() -> ToolgroupListResponse</code>
- <code title="get /v1/toolgroups/{toolgroup_id}">client.toolgroups.<a href="./src/resources/toolgroups.ts">get</a>(toolgroupId) -> ToolGroup</code>
- <code title="post /v1/toolgroups">client.toolgroups.<a href="./src/resources/toolgroups.ts">register</a>({ ...params }) -> void</code>
- <code title="delete /v1/toolgroups/{toolgroup_id}">client.toolgroups.<a href="./src/resources/toolgroups.ts">unregister</a>(toolgroupId) -> void</code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">ListToolsResponse</a></code>
- <code><a href="./src/resources/tools.ts">Tool</a></code>
- <code><a href="./src/resources/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="get /v1/tools">client.tools.<a href="./src/resources/tools.ts">list</a>({ ...params }) -> ToolListResponse</code>
- <code title="get /v1/tools/{tool_name}">client.tools.<a href="./src/resources/tools.ts">get</a>(toolName) -> Tool</code>

# ToolRuntime

Types:

- <code><a href="./src/resources/tool-runtime/tool-runtime.ts">ToolDef</a></code>
- <code><a href="./src/resources/tool-runtime/tool-runtime.ts">ToolInvocationResult</a></code>

Methods:

- <code title="post /v1/tool-runtime/invoke">client.toolRuntime.<a href="./src/resources/tool-runtime/tool-runtime.ts">invokeTool</a>({ ...params }) -> ToolInvocationResult</code>
- <code title="get /v1/tool-runtime/list-tools">client.toolRuntime.<a href="./src/resources/tool-runtime/tool-runtime.ts">listTools</a>({ ...params }) -> JSONLDecoder&lt;ToolDef&gt;</code>

## RagTool

Methods:

- <code title="post /v1/tool-runtime/rag-tool/insert">client.toolRuntime.ragTool.<a href="./src/resources/tool-runtime/rag-tool.ts">insert</a>({ ...params }) -> void</code>
- <code title="post /v1/tool-runtime/rag-tool/query">client.toolRuntime.ragTool.<a href="./src/resources/tool-runtime/rag-tool.ts">query</a>({ ...params }) -> QueryResult</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">InferenceStep</a></code>
- <code><a href="./src/resources/agents/agents.ts">MemoryRetrievalStep</a></code>
- <code><a href="./src/resources/agents/agents.ts">ShieldCallStep</a></code>
- <code><a href="./src/resources/agents/agents.ts">ToolExecutionStep</a></code>
- <code><a href="./src/resources/agents/agents.ts">ToolResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentCreateResponse</a></code>

Methods:

- <code title="post /v1/agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="delete /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId) -> void</code>

## Session

Types:

- <code><a href="./src/resources/agents/session.ts">Session</a></code>
- <code><a href="./src/resources/agents/session.ts">SessionCreateResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/session">client.agents.session.<a href="./src/resources/agents/session.ts">create</a>(agentId, { ...params }) -> SessionCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/session/{session_id}">client.agents.session.<a href="./src/resources/agents/session.ts">retrieve</a>(agentId, sessionId, { ...params }) -> Session</code>
- <code title="delete /v1/agents/{agent_id}/session/{session_id}">client.agents.session.<a href="./src/resources/agents/session.ts">delete</a>(agentId, sessionId) -> void</code>

## Steps

Types:

- <code><a href="./src/resources/agents/steps.ts">StepRetrieveResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/session/{session_id}/turn/{turn_id}/step/{step_id}">client.agents.steps.<a href="./src/resources/agents/steps.ts">retrieve</a>(agentId, sessionId, turnId, stepId) -> StepRetrieveResponse</code>

## Turn

Types:

- <code><a href="./src/resources/agents/turn.ts">Turn</a></code>
- <code><a href="./src/resources/agents/turn.ts">TurnResponseEvent</a></code>
- <code><a href="./src/resources/agents/turn.ts">TurnResponseEventPayload</a></code>
- <code><a href="./src/resources/agents/turn.ts">TurnCreateResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/session/{session_id}/turn">client.agents.turn.<a href="./src/resources/agents/turn.ts">create</a>(agentId, sessionId, { ...params }) -> TurnCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/session/{session_id}/turn/{turn_id}">client.agents.turn.<a href="./src/resources/agents/turn.ts">retrieve</a>(agentId, sessionId, turnId) -> Turn</code>

# BatchInference

Types:

- <code><a href="./src/resources/batch-inference.ts">BatchInferenceChatCompletionResponse</a></code>

Methods:

- <code title="post /v1/batch-inference/chat-completion">client.batchInference.<a href="./src/resources/batch-inference.ts">chatCompletion</a>({ ...params }) -> BatchInferenceChatCompletionResponse</code>
- <code title="post /v1/batch-inference/completion">client.batchInference.<a href="./src/resources/batch-inference.ts">completion</a>({ ...params }) -> BatchCompletion</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">ListDatasetsResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetRetrieveResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetListResponse</a></code>

Methods:

- <code title="get /v1/datasets/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">retrieve</a>(datasetId) -> DatasetRetrieveResponse | null</code>
- <code title="get /v1/datasets">client.datasets.<a href="./src/resources/datasets.ts">list</a>() -> DatasetListResponse</code>
- <code title="post /v1/datasets">client.datasets.<a href="./src/resources/datasets.ts">register</a>({ ...params }) -> void</code>
- <code title="delete /v1/datasets/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">unregister</a>(datasetId) -> void</code>

# Eval

Types:

- <code><a href="./src/resources/eval/eval.ts">EvalCandidate</a></code>
- <code><a href="./src/resources/eval/eval.ts">EvalTaskConfig</a></code>
- <code><a href="./src/resources/eval/eval.ts">EvaluateResponse</a></code>
- <code><a href="./src/resources/eval/eval.ts">Job</a></code>

Methods:

- <code title="post /v1/eval/tasks/{task_id}/evaluations">client.eval.<a href="./src/resources/eval/eval.ts">evaluateRows</a>(taskId, { ...params }) -> EvaluateResponse</code>
- <code title="post /v1/eval/tasks/{task_id}/jobs">client.eval.<a href="./src/resources/eval/eval.ts">runEval</a>(taskId, { ...params }) -> Job</code>

## Jobs

Types:

- <code><a href="./src/resources/eval/jobs.ts">JobStatusResponse</a></code>

Methods:

- <code title="get /v1/eval/tasks/{task_id}/jobs/{job_id}/result">client.eval.jobs.<a href="./src/resources/eval/jobs.ts">retrieve</a>(taskId, jobId) -> EvaluateResponse</code>
- <code title="delete /v1/eval/tasks/{task_id}/jobs/{job_id}">client.eval.jobs.<a href="./src/resources/eval/jobs.ts">cancel</a>(taskId, jobId) -> void</code>
- <code title="get /v1/eval/tasks/{task_id}/jobs/{job_id}">client.eval.jobs.<a href="./src/resources/eval/jobs.ts">status</a>(taskId, jobId) -> JobStatusResponse | null</code>

# Inspect

Types:

- <code><a href="./src/resources/inspect.ts">HealthInfo</a></code>
- <code><a href="./src/resources/inspect.ts">ProviderInfo</a></code>
- <code><a href="./src/resources/inspect.ts">RouteInfo</a></code>
- <code><a href="./src/resources/inspect.ts">VersionInfo</a></code>

Methods:

- <code title="get /v1/health">client.inspect.<a href="./src/resources/inspect.ts">health</a>() -> HealthInfo</code>
- <code title="get /v1/version">client.inspect.<a href="./src/resources/inspect.ts">version</a>() -> VersionInfo</code>

# Inference

Types:

- <code><a href="./src/resources/inference.ts">CompletionResponse</a></code>
- <code><a href="./src/resources/inference.ts">EmbeddingsResponse</a></code>
- <code><a href="./src/resources/inference.ts">TokenLogProbs</a></code>
- <code><a href="./src/resources/inference.ts">InferenceChatCompletionResponse</a></code>
- <code><a href="./src/resources/inference.ts">InferenceCompletionResponse</a></code>

Methods:

- <code title="post /v1/inference/chat-completion">client.inference.<a href="./src/resources/inference.ts">chatCompletion</a>({ ...params }) -> InferenceChatCompletionResponse</code>
- <code title="post /v1/inference/completion">client.inference.<a href="./src/resources/inference.ts">completion</a>({ ...params }) -> InferenceCompletionResponse</code>
- <code title="post /v1/inference/embeddings">client.inference.<a href="./src/resources/inference.ts">embeddings</a>({ ...params }) -> EmbeddingsResponse</code>

# VectorIo

Types:

- <code><a href="./src/resources/vector-io.ts">QueryChunksResponse</a></code>

Methods:

- <code title="post /v1/vector-io/insert">client.vectorIo.<a href="./src/resources/vector-io.ts">insert</a>({ ...params }) -> void</code>
- <code title="post /v1/vector-io/query">client.vectorIo.<a href="./src/resources/vector-io.ts">query</a>({ ...params }) -> QueryChunksResponse</code>

# VectorDBs

Types:

- <code><a href="./src/resources/vector-dbs.ts">ListVectorDBsResponse</a></code>
- <code><a href="./src/resources/vector-dbs.ts">VectorDBRetrieveResponse</a></code>
- <code><a href="./src/resources/vector-dbs.ts">VectorDBListResponse</a></code>
- <code><a href="./src/resources/vector-dbs.ts">VectorDBRegisterResponse</a></code>

Methods:

- <code title="get /v1/vector-dbs/{vector_db_id}">client.vectorDBs.<a href="./src/resources/vector-dbs.ts">retrieve</a>(vectorDBId) -> VectorDBRetrieveResponse | null</code>
- <code title="get /v1/vector-dbs">client.vectorDBs.<a href="./src/resources/vector-dbs.ts">list</a>() -> VectorDBListResponse</code>
- <code title="post /v1/vector-dbs">client.vectorDBs.<a href="./src/resources/vector-dbs.ts">register</a>({ ...params }) -> VectorDBRegisterResponse</code>
- <code title="delete /v1/vector-dbs/{vector_db_id}">client.vectorDBs.<a href="./src/resources/vector-dbs.ts">unregister</a>(vectorDBId) -> void</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ListModelsResponse</a></code>
- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v1/models/{model_id}">client.models.<a href="./src/resources/models.ts">retrieve</a>(modelId) -> Model | null</code>
- <code title="get /v1/models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="post /v1/models">client.models.<a href="./src/resources/models.ts">register</a>({ ...params }) -> Model</code>
- <code title="delete /v1/models/{model_id}">client.models.<a href="./src/resources/models.ts">unregister</a>(modelId) -> void</code>

# PostTraining

Types:

- <code><a href="./src/resources/post-training/post-training.ts">AlgorithmConfig</a></code>
- <code><a href="./src/resources/post-training/post-training.ts">ListPostTrainingJobsResponse</a></code>
- <code><a href="./src/resources/post-training/post-training.ts">PostTrainingJob</a></code>

Methods:

- <code title="post /v1/post-training/preference-optimize">client.postTraining.<a href="./src/resources/post-training/post-training.ts">preferenceOptimize</a>({ ...params }) -> PostTrainingJob</code>
- <code title="post /v1/post-training/supervised-fine-tune">client.postTraining.<a href="./src/resources/post-training/post-training.ts">supervisedFineTune</a>({ ...params }) -> PostTrainingJob</code>

## Job

Types:

- <code><a href="./src/resources/post-training/job.ts">JobListResponse</a></code>
- <code><a href="./src/resources/post-training/job.ts">JobArtifactsResponse</a></code>
- <code><a href="./src/resources/post-training/job.ts">JobStatusResponse</a></code>

Methods:

- <code title="get /v1/post-training/jobs">client.postTraining.job.<a href="./src/resources/post-training/job.ts">list</a>() -> JobListResponse</code>
- <code title="get /v1/post-training/job/artifacts">client.postTraining.job.<a href="./src/resources/post-training/job.ts">artifacts</a>({ ...params }) -> JobArtifactsResponse | null</code>
- <code title="post /v1/post-training/job/cancel">client.postTraining.job.<a href="./src/resources/post-training/job.ts">cancel</a>({ ...params }) -> void</code>
- <code title="get /v1/post-training/job/status">client.postTraining.job.<a href="./src/resources/post-training/job.ts">status</a>({ ...params }) -> JobStatusResponse | null</code>

# Providers

Types:

- <code><a href="./src/resources/providers.ts">ListProvidersResponse</a></code>
- <code><a href="./src/resources/providers.ts">ProviderListResponse</a></code>

Methods:

- <code title="get /v1/inspect/providers">client.providers.<a href="./src/resources/providers.ts">list</a>() -> ProviderListResponse</code>

# Routes

Types:

- <code><a href="./src/resources/routes.ts">ListRoutesResponse</a></code>
- <code><a href="./src/resources/routes.ts">RouteListResponse</a></code>

Methods:

- <code title="get /v1/inspect/routes">client.routes.<a href="./src/resources/routes.ts">list</a>() -> RouteListResponse</code>

# Safety

Types:

- <code><a href="./src/resources/safety.ts">RunShieldResponse</a></code>

Methods:

- <code title="post /v1/safety/run-shield">client.safety.<a href="./src/resources/safety.ts">runShield</a>({ ...params }) -> RunShieldResponse</code>

# Shields

Types:

- <code><a href="./src/resources/shields.ts">ListShieldsResponse</a></code>
- <code><a href="./src/resources/shields.ts">Shield</a></code>
- <code><a href="./src/resources/shields.ts">ShieldListResponse</a></code>

Methods:

- <code title="get /v1/shields/{identifier}">client.shields.<a href="./src/resources/shields.ts">retrieve</a>(identifier) -> Shield | null</code>
- <code title="get /v1/shields">client.shields.<a href="./src/resources/shields.ts">list</a>() -> ShieldListResponse</code>
- <code title="post /v1/shields">client.shields.<a href="./src/resources/shields.ts">register</a>({ ...params }) -> Shield</code>

# SyntheticDataGeneration

Types:

- <code><a href="./src/resources/synthetic-data-generation.ts">SyntheticDataGenerationResponse</a></code>

Methods:

- <code title="post /v1/synthetic-data-generation/generate">client.syntheticDataGeneration.<a href="./src/resources/synthetic-data-generation.ts">generate</a>({ ...params }) -> SyntheticDataGenerationResponse</code>

# Telemetry

Types:

- <code><a href="./src/resources/telemetry.ts">Event</a></code>
- <code><a href="./src/resources/telemetry.ts">QueryCondition</a></code>
- <code><a href="./src/resources/telemetry.ts">QuerySpansResponse</a></code>
- <code><a href="./src/resources/telemetry.ts">SpanWithStatus</a></code>
- <code><a href="./src/resources/telemetry.ts">Trace</a></code>
- <code><a href="./src/resources/telemetry.ts">TelemetryGetSpanResponse</a></code>
- <code><a href="./src/resources/telemetry.ts">TelemetryGetSpanTreeResponse</a></code>
- <code><a href="./src/resources/telemetry.ts">TelemetryQuerySpansResponse</a></code>
- <code><a href="./src/resources/telemetry.ts">TelemetryQueryTracesResponse</a></code>

Methods:

- <code title="get /v1/telemetry/traces/{trace_id}/spans/{span_id}">client.telemetry.<a href="./src/resources/telemetry.ts">getSpan</a>(traceId, spanId) -> TelemetryGetSpanResponse</code>
- <code title="get /v1/telemetry/spans/{span_id}/tree">client.telemetry.<a href="./src/resources/telemetry.ts">getSpanTree</a>(spanId, { ...params }) -> TelemetryGetSpanTreeResponse</code>
- <code title="get /v1/telemetry/traces/{trace_id}">client.telemetry.<a href="./src/resources/telemetry.ts">getTrace</a>(traceId) -> Trace</code>
- <code title="post /v1/telemetry/events">client.telemetry.<a href="./src/resources/telemetry.ts">logEvent</a>({ ...params }) -> void</code>
- <code title="get /v1/telemetry/spans">client.telemetry.<a href="./src/resources/telemetry.ts">querySpans</a>({ ...params }) -> TelemetryQuerySpansResponse</code>
- <code title="get /v1/telemetry/traces">client.telemetry.<a href="./src/resources/telemetry.ts">queryTraces</a>({ ...params }) -> TelemetryQueryTracesResponse</code>
- <code title="post /v1/telemetry/spans/export">client.telemetry.<a href="./src/resources/telemetry.ts">saveSpansToDataset</a>({ ...params }) -> void</code>

# Datasetio

Types:

- <code><a href="./src/resources/datasetio.ts">PaginatedRowsResult</a></code>

Methods:

- <code title="post /v1/datasetio/rows">client.datasetio.<a href="./src/resources/datasetio.ts">appendRows</a>({ ...params }) -> void</code>
- <code title="get /v1/datasetio/rows">client.datasetio.<a href="./src/resources/datasetio.ts">getRowsPaginated</a>({ ...params }) -> PaginatedRowsResult</code>

# Scoring

Types:

- <code><a href="./src/resources/scoring.ts">ScoringScoreResponse</a></code>
- <code><a href="./src/resources/scoring.ts">ScoringScoreBatchResponse</a></code>

Methods:

- <code title="post /v1/scoring/score">client.scoring.<a href="./src/resources/scoring.ts">score</a>({ ...params }) -> ScoringScoreResponse</code>
- <code title="post /v1/scoring/score-batch">client.scoring.<a href="./src/resources/scoring.ts">scoreBatch</a>({ ...params }) -> ScoringScoreBatchResponse</code>

# ScoringFunctions

Types:

- <code><a href="./src/resources/scoring-functions.ts">ListScoringFunctionsResponse</a></code>
- <code><a href="./src/resources/scoring-functions.ts">ScoringFn</a></code>
- <code><a href="./src/resources/scoring-functions.ts">ScoringFnParams</a></code>
- <code><a href="./src/resources/scoring-functions.ts">ScoringFunctionListResponse</a></code>

Methods:

- <code title="get /v1/scoring-functions/{scoring_fn_id}">client.scoringFunctions.<a href="./src/resources/scoring-functions.ts">retrieve</a>(scoringFnId) -> ScoringFn | null</code>
- <code title="get /v1/scoring-functions">client.scoringFunctions.<a href="./src/resources/scoring-functions.ts">list</a>() -> ScoringFunctionListResponse</code>
- <code title="post /v1/scoring-functions">client.scoringFunctions.<a href="./src/resources/scoring-functions.ts">register</a>({ ...params }) -> void</code>

# EvalTasks

Types:

- <code><a href="./src/resources/eval-tasks.ts">EvalTask</a></code>
- <code><a href="./src/resources/eval-tasks.ts">ListEvalTasksResponse</a></code>
- <code><a href="./src/resources/eval-tasks.ts">EvalTaskListResponse</a></code>

Methods:

- <code title="get /v1/eval-tasks/{eval_task_id}">client.evalTasks.<a href="./src/resources/eval-tasks.ts">retrieve</a>(evalTaskId) -> EvalTask | null</code>
- <code title="get /v1/eval-tasks">client.evalTasks.<a href="./src/resources/eval-tasks.ts">list</a>() -> EvalTaskListResponse</code>
- <code title="post /v1/eval-tasks">client.evalTasks.<a href="./src/resources/eval-tasks.ts">register</a>({ ...params }) -> void</code>
