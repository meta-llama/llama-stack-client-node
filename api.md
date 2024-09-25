# Shared

Types:

- <code><a href="./src/resources/shared.ts">Attachment</a></code>
- <code><a href="./src/resources/shared.ts">BatchCompletion</a></code>
- <code><a href="./src/resources/shared.ts">CompletionMessage</a></code>
- <code><a href="./src/resources/shared.ts">SamplingParams</a></code>
- <code><a href="./src/resources/shared.ts">SystemMessage</a></code>
- <code><a href="./src/resources/shared.ts">ToolCall</a></code>
- <code><a href="./src/resources/shared.ts">ToolResponseMessage</a></code>
- <code><a href="./src/resources/shared.ts">UserMessage</a></code>

# Telemetry

Types:

- <code><a href="./src/resources/telemetry.ts">TelemetryGetTraceResponse</a></code>

Methods:

- <code title="get /telemetry/get_trace">client.telemetry.<a href="./src/resources/telemetry.ts">getTrace</a>({ ...params }) -> TelemetryGetTraceResponse</code>
- <code title="post /telemetry/log_event">client.telemetry.<a href="./src/resources/telemetry.ts">log</a>({ ...params }) -> void</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">InferenceStep</a></code>
- <code><a href="./src/resources/agents/agents.ts">MemoryRetrievalStep</a></code>
- <code><a href="./src/resources/agents/agents.ts">RestAPIExecutionConfig</a></code>
- <code><a href="./src/resources/agents/agents.ts">ShieldCallStep</a></code>
- <code><a href="./src/resources/agents/agents.ts">ToolExecutionStep</a></code>
- <code><a href="./src/resources/agents/agents.ts">ToolParamDefinition</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentCreateResponse</a></code>

Methods:

- <code title="post /agents/create">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="post /agents/delete">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>({ ...params }) -> void</code>

## Sessions

Types:

- <code><a href="./src/resources/agents/sessions.ts">Session</a></code>
- <code><a href="./src/resources/agents/sessions.ts">SessionCreateResponse</a></code>

Methods:

- <code title="post /agents/session/create">client.agents.sessions.<a href="./src/resources/agents/sessions.ts">create</a>({ ...params }) -> SessionCreateResponse</code>
- <code title="post /agents/session/get">client.agents.sessions.<a href="./src/resources/agents/sessions.ts">retrieve</a>({ ...params }) -> Session</code>
- <code title="post /agents/session/delete">client.agents.sessions.<a href="./src/resources/agents/sessions.ts">delete</a>({ ...params }) -> void</code>

## Steps

Types:

- <code><a href="./src/resources/agents/steps.ts">AgentsStep</a></code>

Methods:

- <code title="get /agents/step/get">client.agents.steps.<a href="./src/resources/agents/steps.ts">retrieve</a>({ ...params }) -> AgentsStep</code>

## Turns

Types:

- <code><a href="./src/resources/agents/turns.ts">AgentsTurnStreamChunk</a></code>
- <code><a href="./src/resources/agents/turns.ts">Turn</a></code>
- <code><a href="./src/resources/agents/turns.ts">TurnStreamEvent</a></code>

Methods:

- <code title="post /agents/turn/create">client.agents.turns.<a href="./src/resources/agents/turns.ts">create</a>({ ...params }) -> AgentsTurnStreamChunk</code>
- <code title="get /agents/turn/get">client.agents.turns.<a href="./src/resources/agents/turns.ts">retrieve</a>({ ...params }) -> Turn</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">TrainEvalDataset</a></code>

Methods:

- <code title="post /datasets/create">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> void</code>
- <code title="post /datasets/delete">client.datasets.<a href="./src/resources/datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /datasets/get">client.datasets.<a href="./src/resources/datasets.ts">get</a>({ ...params }) -> TrainEvalDataset</code>

# Evaluate

Types:

- <code><a href="./src/resources/evaluate/evaluate.ts">EvaluationJob</a></code>

## Jobs

Types:

- <code><a href="./src/resources/evaluate/jobs/jobs.ts">EvaluationJobArtifacts</a></code>
- <code><a href="./src/resources/evaluate/jobs/jobs.ts">EvaluationJobLogStream</a></code>
- <code><a href="./src/resources/evaluate/jobs/jobs.ts">EvaluationJobStatus</a></code>

Methods:

- <code title="get /evaluate/jobs">client.evaluate.jobs.<a href="./src/resources/evaluate/jobs/jobs.ts">list</a>({ ...params }) -> EvaluationJob</code>
- <code title="post /evaluate/job/cancel">client.evaluate.jobs.<a href="./src/resources/evaluate/jobs/jobs.ts">cancel</a>({ ...params }) -> void</code>

### Artifacts

Methods:

- <code title="get /evaluate/job/artifacts">client.evaluate.jobs.artifacts.<a href="./src/resources/evaluate/jobs/artifacts.ts">list</a>({ ...params }) -> EvaluationJobArtifacts</code>

### Logs

Methods:

- <code title="get /evaluate/job/logs">client.evaluate.jobs.logs.<a href="./src/resources/evaluate/jobs/logs.ts">list</a>({ ...params }) -> EvaluationJobLogStream</code>

### Status

Methods:

- <code title="get /evaluate/job/status">client.evaluate.jobs.status.<a href="./src/resources/evaluate/jobs/status.ts">list</a>({ ...params }) -> EvaluationJobStatus</code>

## QuestionAnswering

Methods:

- <code title="post /evaluate/question_answering/">client.evaluate.questionAnswering.<a href="./src/resources/evaluate/question-answering.ts">create</a>({ ...params }) -> EvaluationJob</code>

## Summarization

## TextGeneration

# Evaluations

Methods:

- <code title="post /evaluate/summarization/">client.evaluations.<a href="./src/resources/evaluations.ts">summarization</a>({ ...params }) -> EvaluationJob</code>
- <code title="post /evaluate/text_generation/">client.evaluations.<a href="./src/resources/evaluations.ts">textGeneration</a>({ ...params }) -> EvaluationJob</code>

# Inference

Types:

- <code><a href="./src/resources/inference/inference.ts">ChatCompletionStreamChunk</a></code>
- <code><a href="./src/resources/inference/inference.ts">CompletionStreamChunk</a></code>
- <code><a href="./src/resources/inference/inference.ts">TokenLogProbs</a></code>
- <code><a href="./src/resources/inference/inference.ts">InferenceChatCompletionResponse</a></code>
- <code><a href="./src/resources/inference/inference.ts">InferenceCompletionResponse</a></code>

Methods:

- <code title="post /inference/chat_completion">client.inference.<a href="./src/resources/inference/inference.ts">chatCompletion</a>({ ...params }) -> InferenceChatCompletionResponse</code>
- <code title="post /inference/completion">client.inference.<a href="./src/resources/inference/inference.ts">completion</a>({ ...params }) -> InferenceCompletionResponse</code>

## Embeddings

Types:

- <code><a href="./src/resources/inference/embeddings.ts">Embeddings</a></code>

Methods:

- <code title="post /inference/embeddings">client.inference.embeddings.<a href="./src/resources/inference/embeddings.ts">create</a>({ ...params }) -> Embeddings</code>

# Safety

Types:

- <code><a href="./src/resources/safety.ts">RunSheidResponse</a></code>

Methods:

- <code title="post /safety/run_shield">client.safety.<a href="./src/resources/safety.ts">runShield</a>({ ...params }) -> RunSheidResponse</code>

# Memory

Types:

- <code><a href="./src/resources/memory/memory.ts">QueryDocuments</a></code>
- <code><a href="./src/resources/memory/memory.ts">MemoryCreateResponse</a></code>
- <code><a href="./src/resources/memory/memory.ts">MemoryRetrieveResponse</a></code>
- <code><a href="./src/resources/memory/memory.ts">MemoryListResponse</a></code>
- <code><a href="./src/resources/memory/memory.ts">MemoryDropResponse</a></code>

Methods:

- <code title="post /memory/create">client.memory.<a href="./src/resources/memory/memory.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /memory/get">client.memory.<a href="./src/resources/memory/memory.ts">retrieve</a>({ ...params }) -> unknown</code>
- <code title="post /memory/update">client.memory.<a href="./src/resources/memory/memory.ts">update</a>({ ...params }) -> void</code>
- <code title="get /memory/list">client.memory.<a href="./src/resources/memory/memory.ts">list</a>({ ...params }) -> unknown</code>
- <code title="post /memory/drop">client.memory.<a href="./src/resources/memory/memory.ts">drop</a>({ ...params }) -> string</code>
- <code title="post /memory/insert">client.memory.<a href="./src/resources/memory/memory.ts">insert</a>({ ...params }) -> void</code>
- <code title="post /memory/query">client.memory.<a href="./src/resources/memory/memory.ts">query</a>({ ...params }) -> QueryDocuments</code>

## Documents

Types:

- <code><a href="./src/resources/memory/documents.ts">DocumentRetrieveResponse</a></code>

Methods:

- <code title="post /memory/documents/get">client.memory.documents.<a href="./src/resources/memory/documents.ts">retrieve</a>({ ...params }) -> DocumentRetrieveResponse</code>
- <code title="post /memory/documents/delete">client.memory.documents.<a href="./src/resources/memory/documents.ts">delete</a>({ ...params }) -> void</code>

# PostTraining

Types:

- <code><a href="./src/resources/post-training/post-training.ts">PostTrainingJob</a></code>

Methods:

- <code title="post /post_training/preference_optimize">client.postTraining.<a href="./src/resources/post-training/post-training.ts">preferenceOptimize</a>({ ...params }) -> PostTrainingJob</code>
- <code title="post /post_training/supervised_fine_tune">client.postTraining.<a href="./src/resources/post-training/post-training.ts">supervisedFineTune</a>({ ...params }) -> PostTrainingJob</code>

## Jobs

Types:

- <code><a href="./src/resources/post-training/jobs.ts">PostTrainingJobArtifacts</a></code>
- <code><a href="./src/resources/post-training/jobs.ts">PostTrainingJobLogStream</a></code>
- <code><a href="./src/resources/post-training/jobs.ts">PostTrainingJobStatus</a></code>

Methods:

- <code title="get /post_training/jobs">client.postTraining.jobs.<a href="./src/resources/post-training/jobs.ts">list</a>({ ...params }) -> PostTrainingJob</code>
- <code title="get /post_training/job/artifacts">client.postTraining.jobs.<a href="./src/resources/post-training/jobs.ts">artifacts</a>({ ...params }) -> PostTrainingJobArtifacts</code>
- <code title="post /post_training/job/cancel">client.postTraining.jobs.<a href="./src/resources/post-training/jobs.ts">cancel</a>({ ...params }) -> void</code>
- <code title="get /post_training/job/logs">client.postTraining.jobs.<a href="./src/resources/post-training/jobs.ts">logs</a>({ ...params }) -> PostTrainingJobLogStream</code>
- <code title="get /post_training/job/status">client.postTraining.jobs.<a href="./src/resources/post-training/jobs.ts">status</a>({ ...params }) -> PostTrainingJobStatus</code>

# RewardScoring

Types:

- <code><a href="./src/resources/reward-scoring.ts">RewardScoring</a></code>
- <code><a href="./src/resources/reward-scoring.ts">ScoredDialogGenerations</a></code>

Methods:

- <code title="post /reward_scoring/score">client.rewardScoring.<a href="./src/resources/reward-scoring.ts">score</a>({ ...params }) -> RewardScoring</code>

# SyntheticDataGeneration

Types:

- <code><a href="./src/resources/synthetic-data-generation.ts">SyntheticDataGeneration</a></code>

Methods:

- <code title="post /synthetic_data_generation/generate">client.syntheticDataGeneration.<a href="./src/resources/synthetic-data-generation.ts">generate</a>({ ...params }) -> SyntheticDataGeneration</code>

# BatchInference

Types:

- <code><a href="./src/resources/batch-inference.ts">BatchChatCompletion</a></code>

Methods:

- <code title="post /batch_inference/chat_completion">client.batchInference.<a href="./src/resources/batch-inference.ts">chatCompletion</a>({ ...params }) -> BatchChatCompletion</code>
- <code title="post /batch_inference/completion">client.batchInference.<a href="./src/resources/batch-inference.ts">completion</a>({ ...params }) -> BatchCompletion</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelServingSpec</a></code>

Methods:

- <code title="get /models/list">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelServingSpec</code>
- <code title="get /models/get">client.models.<a href="./src/resources/models.ts">get</a>({ ...params }) -> ModelServingSpec | null</code>

# MemoryBanks

Types:

- <code><a href="./src/resources/memory-banks.ts">MemoryBankSpec</a></code>

Methods:

- <code title="get /memory_banks/list">client.memoryBanks.<a href="./src/resources/memory-banks.ts">list</a>({ ...params }) -> MemoryBankSpec</code>
- <code title="get /memory_banks/get">client.memoryBanks.<a href="./src/resources/memory-banks.ts">get</a>({ ...params }) -> MemoryBankSpec | null</code>

# Shields

Types:

- <code><a href="./src/resources/shields.ts">ShieldSpec</a></code>

Methods:

- <code title="get /shields/list">client.shields.<a href="./src/resources/shields.ts">list</a>({ ...params }) -> ShieldSpec</code>
- <code title="get /shields/get">client.shields.<a href="./src/resources/shields.ts">get</a>({ ...params }) -> ShieldSpec | null</code>
