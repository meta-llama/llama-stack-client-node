// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EvaluateAPI from './evaluate';
import * as QuestionAnsweringAPI from './question-answering';
import * as SummarizationAPI from './summarization';
import * as TextGenerationAPI from './text-generation';
import * as JobsAPI from './jobs/jobs';

export class Evaluate extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  questionAnswering: QuestionAnsweringAPI.QuestionAnswering = new QuestionAnsweringAPI.QuestionAnswering(
    this._client,
  );
  summarization: SummarizationAPI.Summarization = new SummarizationAPI.Summarization(this._client);
  textGeneration: TextGenerationAPI.TextGeneration = new TextGenerationAPI.TextGeneration(this._client);
}

export interface EvaluationJob {
  job_uuid: string;
}

export namespace Evaluate {
  export import EvaluationJob = EvaluateAPI.EvaluationJob;
  export import Jobs = JobsAPI.Jobs;
  export import EvaluationJobArtifacts = JobsAPI.EvaluationJobArtifacts;
  export import EvaluationJobLogStream = JobsAPI.EvaluationJobLogStream;
  export import EvaluationJobStatus = JobsAPI.EvaluationJobStatus;
  export import JobListParams = JobsAPI.JobListParams;
  export import JobCancelParams = JobsAPI.JobCancelParams;
  export import QuestionAnswering = QuestionAnsweringAPI.QuestionAnswering;
  export import QuestionAnsweringCreateParams = QuestionAnsweringAPI.QuestionAnsweringCreateParams;
  export import Summarization = SummarizationAPI.Summarization;
  export import TextGeneration = TextGenerationAPI.TextGeneration;
}
