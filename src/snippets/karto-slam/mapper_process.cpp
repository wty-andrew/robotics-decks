kt_bool Mapper::Process(LocalizedRangeScan* pScan) {
  // ...
  Pose2 bestPose;
  m_pSequentialScanMatcher->MatchScan(
    pScan, m_pMapperSensorManager->GetRunningScans(pScan->GetSensorName()), bestPose, covariance);
  pScan->SetSensorPose(bestPose);

  m_pMapperSensorManager->AddScan(pScan);
  m_pGraph->AddVertex(pScan);
  m_pGraph->AddEdges(pScan, covariance);
  m_pMapperSensorManager->AddRunningScan(pScan);

  std::vector<Name> deviceNames = m_pMapperSensorManager->GetSensorNames();
  const_forEach(std::vector<Name>, &deviceNames)
    m_pGraph->TryCloseLoop(pScan, *iter);
  // ...
}
