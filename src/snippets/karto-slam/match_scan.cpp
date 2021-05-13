kt_double ScanMatcher::MatchScan(LocalizedRangeScan* pScan, const LocalizedRangeScanVector& rBaseScans, Pose2& rMean,
                                 Matrix3& rCovariance, kt_bool doPenalize, kt_bool doRefineMatch) {
  // ...
  kt_double bestResponse = CorrelateScan(pScan, scanPose, coarseSearchOffset, coarseSearchResolution,
                                         m_pMapper->m_pCoarseSearchAngleOffset->GetValue(),
                                         m_pMapper->m_pCoarseAngleResolution->GetValue(),
                                         doPenalize, rMean, rCovariance, false);
  // ...
  if (doRefineMatch) {
    Vector2<kt_double> fineSearchOffset(coarseSearchResolution * 0.5);
    Vector2<kt_double> fineSearchResolution(m_pCorrelationGrid->GetResolution(), m_pCorrelationGrid->GetResolution());
    bestResponse = CorrelateScan(pScan, rMean, fineSearchOffset, fineSearchResolution,
                                 0.5 * m_pMapper->m_pCoarseAngleResolution->GetValue(),
                                 m_pMapper->m_pFineSearchAngleOffset->GetValue(), doPenalize, rMean, rCovariance, true);
  }
  return bestResponse;
}
