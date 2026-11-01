export const dateToString = (date?: Date): string | undefined => {
  if (!date) {
    return;
  }

  return date
    .toLocaleString("en-GB", {
      timeZone: "Asia/Jerusalem",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(", ", " ");
};
