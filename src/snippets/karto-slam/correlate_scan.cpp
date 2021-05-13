kt_double ScanMatcher::CorrelateScan(
  LocalizedRangeScan* pScan, const Pose2& rSearchCenter, const Vector2<kt_double>& rSearchSpaceOffset,
  const Vector2<kt_double>& rSearchSpaceResolution, kt_double searchAngleOffset, kt_double searchAngleResolution,
  kt_bool doPenalize, Pose2& rMean, Matrix3& rCovariance, kt_bool doingFineMatch) {
  // ...
  forEachAs(std::vector<kt_double>, &yPoses, yIter) {
    // ...
    forEachAs(std::vector<kt_double>, &xPoses, xIter) {
      // ...
      for (kt_int32u angleIndex = 0; angleIndex < nAngles; angleIndex++) {
        kt_double response = GetResponse(angleIndex, gridIndex);
        // ...
      }
    }
  }
  // ...
}
