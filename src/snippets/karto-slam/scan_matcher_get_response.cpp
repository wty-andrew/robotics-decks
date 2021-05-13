kt_double ScanMatcher::GetResponse(kt_int32u angleIndex, kt_int32s gridPositionIndex) const {
  kt_double response = 0.0;
  kt_int8u* pByte = m_pCorrelationGrid->GetDataPointer() + gridPositionIndex;
  // ... getting pAngleIndexPointer
  // calculate response
  kt_int32s* pAngleIndexPointer = pOffsets->GetArrayPointer();
  for (kt_int32u i = 0; i < nPoints; i++) {
    // uses index offsets to efficiently find location of point in the grid
    response += pByte[pAngleIndexPointer[i]];
  }
  // normalize response
  response /= (nPoints * GridStates_Occupied);
  return response;
}
