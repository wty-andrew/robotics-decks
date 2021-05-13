kt_bool MapperGraph::TryCloseLoop(LocalizedRangeScan* pScan, const Name& rSensorName) {
  // ...
  LocalizedRangeScanVector candidateChain = FindPossibleLoopClosure(pScan, rSensorName, scanIndex);
  while (!candidateChain.empty()) {
    kt_double coarseResponse = m_pLoopScanMatcher->MatchScan(pScan, candidateChain,
                                                             bestPose, covariance, false, false);
    if ((coarseResponse > m_pMapper->m_pLoopMatchMinimumResponseCoarse->GetValue()) &&
        (covariance(0, 0) < m_pMapper->m_pLoopMatchMaximumVarianceCoarse->GetValue()) &&
        (covariance(1, 1) < m_pMapper->m_pLoopMatchMaximumVarianceCoarse->GetValue())) {
      // ... copied pScan to tmpScan and set its pose to bestPose
      kt_double fineResponse = m_pMapper->m_pSequentialScanMatcher->MatchScan(&tmpScan, candidateChain,
                                                                              bestPose, covariance, false);
      if (fineResponse < m_pMapper->m_pLoopMatchMinimumResponseFine->GetValue())
        // ... reject, else correct poses
    }
    candidateChain = FindPossibleLoopClosure(pScan, rSensorName, scanIndex);
  }
  return loopClosed;
}
