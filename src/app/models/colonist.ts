import { Job } from './job';

export interface Colonist {
  id: number;
  name: string;
  age: number;
  job: Job;

}

export interface NewColonist {
  name: string;
  age: string;
  job_id: string;
}
