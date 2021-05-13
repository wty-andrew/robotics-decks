inline void SmearPoint(const Vector2<kt_int32s>& rGridPoint) {
  // ... only apply on occupied cell
  for (kt_int32s j = -halfKernel; j <= halfKernel; j++) {
    kt_int8u* pGridAdr = GetDataPointer(Vector2<kt_int32s>(rGridPoint.GetX(), rGridPoint.GetY() + j));

    kt_int32s kernelConstant = (halfKernel) + m_KernelSize * (j + halfKernel);
    for (kt_int32s i = -halfKernel; i <= halfKernel; i++) {
      kt_int32s kernelArrayIndex = i + kernelConstant;

      kt_int8u kernelValue = m_pKernel[kernelArrayIndex];
      if (kernelValue > pGridAdr[i])
        pGridAdr[i] = kernelValue;
    }
  }
}
