import {
  backwardButtonStyle,
  boxStyle,
  buttonContainerStyle,
  canvasStyle,
  forwardButtonStyle,
  pillStyle,
  playButtonStyle,
  subTitleStyle,
  titleStyle,
  trackPlayerStyle,
} from "../scroll.css";
import { createShape, createText } from "./createElement";

const createCanvas = (parent: Element) => {
  return createShape({
    id: "canvas",
    classNames: canvasStyle,
    parent,
  });
};

const drawPill = (parent: Element) => {
  return createShape({
    id: "pill",
    classNames: pillStyle,
    parent,
  });
};

const drawBox = (parent: Element) => {
  return createShape({
    id: "box",
    classNames: boxStyle,
    parent,
  });
};

const drawTitle = (parent: Element) => {
  return createText({
    text: "Course Intro",
    classNames: titleStyle,
    parent,
  });
};
const drawSubTitle = (parent: Element) => {
  return createText({
    text: "Introduction",
    classNames: subTitleStyle,
    parent,
  });
};

const drawTrackPlayer = (parent: Element) => {
  return createShape({
    id: "trackPlayer",
    classNames: trackPlayerStyle,
    parent,
  });
};

const drawButtons = (parent: Element) => {
  const container = createShape({
    id: "buttonContainer",
    classNames: buttonContainerStyle,
    parent,
  });
  createShape({
    id: "backwardButton",
    classNames: backwardButtonStyle,
    parent: container,
  });
  createShape({
    id: "playButton",
    classNames: playButtonStyle,
    parent: container,
  });
  createShape({
    id: "forwardButton",
    classNames: forwardButtonStyle,
    parent: container,
  });
  return container;
};

export const drawPlayer = () => {
  const parent = document.querySelector(".img-container");
  if (!parent) {
    throw new Error("No parent found");
  }

  const canvas = createCanvas(parent);
  const pill = drawPill(canvas);
  const box = drawBox(canvas);
  const title = drawTitle(canvas);
  const subTitle = drawSubTitle(canvas);
  const trackPlayer = drawTrackPlayer(canvas);
  const buttons = drawButtons(canvas);

  return {
    canvas,
    pill,
    box,
    title,
    subTitle,
    trackPlayer,
    buttons,
  };
};
