const CharLimit = (string, limit) => {
  if (string.length > limit) {
    return `${string.substring(0, limit - 1)}...`;
  } else {
    return string;
  }
};

export default CharLimit;
