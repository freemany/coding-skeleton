export const addHeader = (title) => {
  const $header = $("<h1>").text(title);
  $("#app").append($header);
};
