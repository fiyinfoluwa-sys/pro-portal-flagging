import { Candidate } from '../models/candidate';

export interface Flag {
  field: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
  overridden?: boolean;
  acknowledged?: boolean;
}

export function evaluateCandidate(candidate: Candidate): Flag[] {
  const flags: Flag[] = [];

  if (candidate.nacExam === null) {
    flags.push({ field: 'nacExam', message: 'NAC Exam score is missing', severity: 'high' });
  } else if (candidate.nacExam < 75) {
    flags.push({ field: 'nacExam', message: 'NAC Exam below passing threshold', severity: 'medium' });
  }

  if (candidate.mccqe1 === null) {
    flags.push({ field: 'mccqe1', message: 'MCCQE1 result is missing', severity: 'high' });
  } else if (candidate.mccqe1 < 300) {
    flags.push({ field: 'mccqe1', message: 'MCCQE1 below passing threshold', severity: 'medium' });
  }

  if (candidate.canadianExperience < 12) {
    flags.push({ field: 'canadianExperience', message: 'Less than 12 months Canadian experience', severity: 'low' });
  }

  if (candidate.practiceGaps > 12) {
    flags.push({ field: 'practiceGaps', message: 'More than 12 months gap in practice', severity: 'medium' });
  }

  return flags;
}

