export const formatPhone = (raw: string): string => {
  const digits = raw.replace(/\D/g, '')
  return digits.replace(
    /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
    (_m, c, a, b, d, e) => `+${c} (${a}) ${b} ${d} ${e}`
  )
}
