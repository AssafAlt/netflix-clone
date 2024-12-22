export const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
};

export const splitText = (text, maxLength) => {
  const words = text.split(" ");
  const chunks = [];
  let currentChunk = "";

  words.forEach((word) => {
    // Check if adding the word exceeds the max length
    if (currentChunk.length + word.length + 1 <= maxLength) {
      currentChunk += (currentChunk.length ? " " : "") + word;
    } else {
      chunks.push(currentChunk); // Push the current chunk to the chunks array
      currentChunk = word; // Start a new chunk with the current word
    }
  });

  // Push the last chunk if it exists
  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks;
};
