export const playAudio = (uri: string): Promise<void> =>
  new Promise((resolve, reject) => {
    console.log("dd");
    const audio = new Audio(uri);
    audio.addEventListener("ended", () => {
      resolve();
    });
    audio.play();
  });
