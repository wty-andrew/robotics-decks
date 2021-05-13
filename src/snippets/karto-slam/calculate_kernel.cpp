virtual void CalculateKernel() {
  // ... calculate dimensions
  kt_int32s halfKernel = m_KernelSize / 2;
  for (kt_int32s i = -halfKernel; i <= halfKernel; i++) {
    for (kt_int32s j = -halfKernel; j <= halfKernel; j++) {
      kt_double distanceFromMean = hypot(i * resolution, j * resolution);
      kt_double z = exp(-0.5 * pow(distanceFromMean / m_SmearDeviation, 2));

      kt_int32u kernelValue = static_cast<kt_int32u>(math::Round(z * GridStates_Occupied));

      int kernelArrayIndex = (i + halfKernel) + m_KernelSize * (j + halfKernel);
      m_pKernel[kernelArrayIndex] = static_cast<kt_int8u>(kernelValue);
    }
  }
}
