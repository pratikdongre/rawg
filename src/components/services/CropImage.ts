const CropImage = (url: string) => {
  // https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg

  // https://api.rawg.io/media/crop/600/400games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg
  const index = url.indexOf("media/") + "media/".length;
  let pos = url.slice(0, index);
  let end = url.slice(index);

  let result = pos + "crop/600/400/" + end;
  return result;
};

export default CropImage;
