export const getTextDirection = (text: string): "rtl" | "ltr" => {
  const rtlChars = /[\u0590-\u05FF\u0600-\u06FF]/;
  return rtlChars.test(text) ? "rtl" : "ltr";
};
