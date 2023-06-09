import { style } from "@vanilla-extract/css";

const toPct = (n: number) => `${n}%`;

const CANVAS_WIDTH = 18.5;
const CANVAS_HEIGHT = 47;
const CANVAS_PADDING = 4.5;

/* Helper */

const centerElement = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

/* Canvas */

export const sectionStyle = style({
  background:
    "linear-gradient(180deg, #a9dfe1, #78a8ae, #A33851, #E16380, #5F44B5, #4163B0)",
  backgroundSize: "600% 600%",
  overflowX: "clip",
});

export const canvasStyle = style([
  {
    width: toPct(CANVAS_WIDTH),
    height: toPct(CANVAS_HEIGHT),
    borderRadius: 20,
    background:
      "linear-gradient(180deg, #a9dfe1, #78a8ae, #A33851, #E16380, #5F44B5, #4163B0)",
    backgroundSize: "600% 600%",
  },
  centerElement,
]);

/* Pill */

const pill = {
  top: CANVAS_PADDING,
  height: 1,
  get bottom() {
    return this.top + this.height;
  },
};

export const pillStyle = style({
  width: toPct(18),
  height: toPct(pill.height),
  borderRadius: 20,
  position: "absolute",
  top: toPct(pill.top),
  left: "50%",
  transform: "translateX(-50%)",
  background: "white",
  opacity: 0.5,
});

/* Box */

const box = {
  top: pill.bottom + 5,
  height: 40,
  get bottom() {
    return this.top + this.height;
  },
};

export const boxStyle = style([
  {
    width: toPct(100 - CANVAS_PADDING * 2),
    height: toPct(box.height),
    borderRadius: 10,
    position: "absolute",
    top: toPct(box.top),
    left: "50%",
    transform: "translateX(-50%)",
    transition: "background-color 0.5s ease-in-out",
    boxShadow:
      "0 0 20px 0 rgba(0, 0, 0, 0.05), 0 20px 40px 0 rgba(0, 0, 0, 0.05)",
    background: "rgba(255, 255, 255, 0.5)",
  },
]);

/* Title */

const title = {
  top: box.bottom + 6,
  height: 5,
  get bottom() {
    return this.top + this.height;
  },
};

export const titleStyle = style([
  {
    position: "absolute",
    top: toPct(title.top),
    height: toPct(title.height),
    left: toPct(CANVAS_PADDING),
    color: "white",
    fontSize: 12,
    fontWeight: 500,
  },
]);

/* SubTitle */

const subTitle = {
  top: title.bottom,
  height: 5,
  get bottom() {
    return this.top + this.height;
  },
};

export const subTitleStyle = style([
  {
    position: "absolute",
    top: toPct(subTitle.top),
    height: toPct(subTitle.height),
    left: toPct(CANVAS_PADDING),
    color: "white",
    fontSize: 10,
    fontWeight: 500,
    opacity: 0.5,
  },
]);

/* TrackPlayer */

const trackPlayer = {
  top: subTitle.bottom + 4,
  height: 2,
  get bottom() {
    return this.top + this.height;
  },
};

export const trackPlayerStyle = style([
  {
    position: "absolute",
    top: toPct(trackPlayer.top),
    height: toPct(trackPlayer.height),
    width: toPct(100 - CANVAS_PADDING * 2),
    left: toPct(CANVAS_PADDING),
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
  },
]);

/* Buttons */
const buttonContainer = {
  top: trackPlayer.bottom + 10,
  height: 10,
  get bottom() {
    return this.top + this.height;
  },
};

export const buttonContainerStyle = style([
  {
    position: "absolute",
    top: toPct(buttonContainer.top),
    height: toPct(buttonContainer.height),
    width: toPct(100 - CANVAS_PADDING * 2),
    left: toPct(CANVAS_PADDING),
    display: "flex",
    justifyContent: "space-evenly",
  },
]);

export const playButtonStyle = style([
  {
    height: 20,
    width: 15,
    backgroundImage:
      "url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNC43NjU2IiBoZWlnaHQ9IjE2LjU1MjciPgogPGc+CiAgPHJlY3QgaGVpZ2h0PSIxNi41NTI3IiBvcGFjaXR5PSIwIiB3aWR0aD0iMTQuNzY1NiIgeD0iMCIgeT0iMCIvPgogIDxwYXRoIGQ9Ik0xLjE3MTg4IDE2LjU1MjdDMS41NjI1IDE2LjU1MjcgMS44OTQ1MyAxNi4zOTY1IDIuMjg1MTYgMTYuMTcxOUwxMy42NzE5IDkuNTg5ODRDMTQuNDgyNCA5LjExMTMzIDE0Ljc2NTYgOC43OTg4MyAxNC43NjU2IDguMjgxMjVDMTQuNzY1NiA3Ljc2MzY3IDE0LjQ4MjQgNy40NTExNyAxMy42NzE5IDYuOTgyNDJMMi4yODUxNiAwLjM5MDYyNUMxLjg5NDUzIDAuMTY2MDE2IDEuNTYyNSAwLjAxOTUzMTIgMS4xNzE4OCAwLjAxOTUzMTJDMC40NDkyMTkgMC4wMTk1MzEyIDAgMC41NjY0MDYgMCAxLjQxNjAyTDAgMTUuMTQ2NUMwIDE1Ljk5NjEgMC40NDkyMTkgMTYuNTUyNyAxLjE3MTg4IDE2LjU1MjdaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KIDwvZz4KPC9zdmc+Cg==')",
    backgroundRepeat: "no-repeat",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      cursor: "pointer",
      scale: 1.2,
    },
    ":active": {
      scale: 0.8,
    },
  },
]);

export const backwardButtonStyle = style([
  {
    height: 16,
    width: 19,
    backgroundImage:
      "url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOC4yNDIyIiBoZWlnaHQ9IjE1LjkwODIiPgogPGc+CiAgPHJlY3QgaGVpZ2h0PSIxNS45MDgyIiBvcGFjaXR5PSIwIiB3aWR0aD0iMTguMjQyMiIgeD0iMCIgeT0iMCIvPgogIDxwYXRoIGQ9Ik0xLjI5ODgzIDE1LjkwODJMMy41MjUzOSAxNS45MDgyQzQuMzc1IDE1LjkwODIgNC44MjQyMiAxNS40NTkgNC44MjQyMiAxNC41OTk2TDQuODI0MjIgMS4yOTg4M0M0LjgyNDIyIDAuNDEwMTU2IDQuMzc1IDAgMy41MjUzOSAwTDEuMjk4ODMgMEMwLjQ0OTIxOSAwIDAgMC40NDkyMTkgMCAxLjI5ODgzTDAgMTQuNTk5NkMwIDE1LjQ1OSAwLjQ0OTIxOSAxNS45MDgyIDEuMjk4ODMgMTUuOTA4MlpNMTYuODM1OSAxNS42MTUyQzE3LjYwNzQgMTUuNjE1MiAxOC4yNDIyIDE1LjAzOTEgMTguMjQyMiAxMy45NDUzTDE4LjI0MjIgMS45NTMxMkMxOC4yNDIyIDAuODU5Mzc1IDE3LjYwNzQgMC4yNzM0MzggMTYuODM1OSAwLjI3MzQzOEMxNi40MzU1IDAuMjczNDM4IDE2LjExMzMgMC40MDAzOTEgMTUuNzEyOSAwLjYzNDc2Nkw1Ljc2MTcyIDYuNDk0MTRDNS4wNjgzNiA2LjkwNDMgNC43NzUzOSA3LjM4MjgxIDQuNzc1MzkgNy45NDkyMkM0Ljc3NTM5IDguNTA1ODYgNS4wNjgzNiA4Ljk5NDE0IDUuNzYxNzIgOS40MDQzTDE1LjcxMjkgMTUuMjUzOUMxNi4xMTMzIDE1LjQ4ODMgMTYuNDM1NSAxNS42MTUyIDE2LjgzNTkgMTUuNjE1MloiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC44NSIvPgogPC9nPgo8L3N2Zz4=')",
    backgroundRepeat: "no-repeat",
    scale: 0.7,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      cursor: "pointer",
      scale: 0.8,
    },
    ":active": {
      scale: 0.5,
    },
  },
]);

export const forwardButtonStyle = style([
  {
    height: 16,
    width: 19,
    backgroundImage:
      "url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOC4yNDIyIiBoZWlnaHQ9IjE1LjkwODIiPgogPGc+CiAgPHJlY3QgaGVpZ2h0PSIxNS45MDgyIiBvcGFjaXR5PSIwIiB3aWR0aD0iMTguMjQyMiIgeD0iMCIgeT0iMCIvPgogIDxwYXRoIGQ9Ik0xNC43MTY4IDE1LjkwODJMMTYuOTQzNCAxNS45MDgyQzE3LjgwMjcgMTUuOTA4MiAxOC4yNDIyIDE1LjQ1OSAxOC4yNDIyIDE0LjU5OTZMMTguMjQyMiAxLjI5ODgzQzE4LjI0MjIgMC40MTAxNTYgMTcuODAyNyAwIDE2Ljk0MzQgMEwxNC43MTY4IDBDMTMuODY3MiAwIDEzLjQxOCAwLjQ0OTIxOSAxMy40MTggMS4yOTg4M0wxMy40MTggMTQuNTk5NkMxMy40MTggMTUuNDU5IDEzLjg2NzIgMTUuOTA4MiAxNC43MTY4IDE1LjkwODJaTTEuNDA2MjUgMTUuNjE1MkMxLjgwNjY0IDE1LjYxNTIgMi4xMjg5MSAxNS40ODgzIDIuNTI5MyAxNS4yNTM5TDEyLjQ4MDUgOS40MDQzQzEzLjE3MzggOC45OTQxNCAxMy40NjY4IDguNTA1ODYgMTMuNDY2OCA3Ljk0OTIyQzEzLjQ2NjggNy4zODI4MSAxMy4xNzM4IDYuOTA0MyAxMi40ODA1IDYuNDk0MTRMMi41MjkzIDAuNjM0NzY2QzIuMTI4OTEgMC40MDAzOTEgMS44MDY2NCAwLjI3MzQzOCAxLjQwNjI1IDAuMjczNDM4QzAuNjM0NzY2IDAuMjczNDM4IDAgMC44NTkzNzUgMCAxLjk1MzEyTDAgMTMuOTQ1M0MwIDE1LjAzOTEgMC42MzQ3NjYgMTUuNjE1MiAxLjQwNjI1IDE1LjYxNTJaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuODUiLz4KIDwvZz4KPC9zdmc+')",
    backgroundRepeat: "no-repeat",
    transition: "all 0.2s ease-in-out",
    scale: 0.7,
    ":hover": {
      cursor: "pointer",
      scale: 0.8,
    },
    ":active": {
      scale: 0.5,
    },
  },
]);
