function getTime() {
  return new Date()
    .toLocaleTimeString("tr-TR", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: "Europe/Istanbul",
      formatMatcher: "basic",
    })
    .replaceAll(":", "");
}

export { getTime };
