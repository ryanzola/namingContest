import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({
    contests: contests
  });
});

router.get('/contest/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description = 'Id reprehenderit qui magna aute laboris. Sit tempor laboris consectetur aliquip enim velit. Ea ex veniam amet minim mollit do id culpa ex deserunt. Proident mollit duis ea deserunt veniam. Ea minim ad Lorem sunt ea ut laboris. Dolor deserunt voluptate id exercitation non veniam dolore mollit anim eu laboris.';
  
  res.send(contest);
});

export default router;
