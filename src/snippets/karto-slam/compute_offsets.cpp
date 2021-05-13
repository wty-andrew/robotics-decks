void ComputeOffsets(kt_int32u angleIndex, kt_double angle, const Pose2Vector& rLocalPoints, LocalizedRangeScan* pScan) {
  m_ppLookupArray[angleIndex]->SetSize(static_cast<kt_int32u>(rLocalPoints.size()));
  m_Angles.at(angleIndex) = angle;
  kt_int32s* pAngleIndexPointer = m_ppLookupArray[angleIndex]->GetArrayPointer();

  const_forEach(Pose2Vector, &rLocalPoints) {
    const Vector2<kt_double>& rPosition = iter->GetPosition();
    // ... ignore invalid scan
    Vector2<kt_double> offset;
    offset.SetX(cosine * rPosition.GetX() - sine * rPosition.GetY());
    offset.SetY(sine * rPosition.GetX() + cosine * rPosition.GetY());
    Vector2<kt_int32s> gridPoint = m_pGrid->WorldToGrid(offset + rGridOffset);
    kt_int32s lookupIndex = m_pGrid->Grid<T>::GridIndex(gridPoint, false);
    pAngleIndexPointer[readingIndex] = lookupIndex;
    readingIndex++;
  }
}
