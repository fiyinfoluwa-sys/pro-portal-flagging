import { Router } from 'express';
import { evaluateCandidate } from '../services/flaggingService';
import { Candidate } from '../models/candidate';

const router = Router();

router.post('/evaluate', (req, res) => {
  const data: Candidate = req.body;
  const flags = evaluateCandidate(data);
  res.json({ flags });
});

export default router;

