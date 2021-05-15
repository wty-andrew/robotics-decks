typedef std::vector<VertexPose*> PoseSequence;
typedef std::vector<VertexTimeDiff*> TimeDiffSequence;

class TimedElasticBand
{
  // skipped ...
protected:
  //!< Internal container storing the sequence of optimzable pose vertices
  PoseSequence pose_vec_;
  //!< Internal container storing the sequence of optimzable timediff vertices
  TimeDiffSequence timediff_vec_;
};
