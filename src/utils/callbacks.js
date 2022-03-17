export const execCallback =
  (callback, defaultOutput) =>
  (...args) => {
    let output = defaultOutput;
    if (callback && typeof callback === "function") {
      output = callback(...args);
    }
    return output;
  };
