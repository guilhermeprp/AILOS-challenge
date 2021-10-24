type WindowSize = {
  width: number;
  height: number;
};

function setWindowSize(size: WindowSize) {
  return size;
}

export function handleResize() {
  return setWindowSize({
    width: window.innerWidth,
    height: window.innerHeight,
  });
}
