import { log } from "@utils/log";
import { ScrollOffset, animate, scroll } from "motion";
import { sectionStyle } from "./scroll.css";
import { drawPlayer } from "./utils/createPlayer";

window.Webflow ||= [];
window.Webflow.push(() => {
  const { init } = log();

  const { canvas, box, pill, title, subTitle, trackPlayer, buttons } =
    drawPlayer();

  const section = document.querySelector(".section-1");
  section?.classList.add(sectionStyle);

  const forwardButton = document.getElementById("forwardButton");
  forwardButton?.addEventListener("click", () => {
    const subTitle = document.getElementById("subTitle");
    if (subTitle?.innerText === "Introduction") {
      subTitle.innerText = "Shield 1";
    } else if (subTitle?.innerText === "Shield 1") {
      subTitle.innerText = "Shield 2";
    } else if (subTitle?.innerText === "Shield 2") {
      subTitle.innerText = "Shield 3";
    } else if (subTitle?.innerText === "Shield 3") {
      subTitle.innerText = "Introduction";
    }
  });

  const backwardButton = document.getElementById("backwardButton");
  backwardButton?.addEventListener("click", () => {
    const subTitle = document.getElementById("subTitle");
    if (subTitle?.innerText === "Introduction") {
      subTitle.innerText = "Shield 3";
    } else if (subTitle?.innerText === "Shield 1") {
      subTitle.innerText = "Introduction";
    } else if (subTitle?.innerText === "Shield 2") {
      subTitle.innerText = "Shield 1";
    } else if (subTitle?.innerText === "Shield 3") {
      subTitle.innerText = "Shield 2";
    }
  });

  if (section) {
    scroll(
      animate(canvas, {
        backgroundPosition: ["0% 0%", "100% 100%"],
      }),
      {
        target: section,
        offset: [...ScrollOffset.Exit],
      }
    );

    scroll(
      animate(section, {
        backgroundPosition: ["0% 0%", "100% 100%"],
      }),
      {
        target: section,
        offset: [...ScrollOffset.Exit],
      }
    );

    scroll(
      animate(pill, {
        opacity: [0, 1],
        y: [-10, 0],
        x: ["-50%", "-50%"],
      }),
      {
        target: section,
        offset: ["0%", "10%"],
      }
    );
    scroll(
      animate(box, {
        opacity: [0, 1],
        y: [-50, 0],
        x: ["-50%", "-50%"],
      }),
      {
        target: section,
        offset: ["0%", "10%"],
      }
    );
    scroll(
      animate(title, {
        opacity: [0, 1],
        y: [-50, 0],
      }),
      {
        target: section,
        offset: ["1%", "10%"],
      }
    );
    scroll(
      animate(subTitle, {
        opacity: [0, 1],
        y: [-50, 0],
      }),
      {
        target: section,
        offset: ["2%", "10%"],
      }
    );
    scroll(
      animate(trackPlayer, {
        opacity: [0, 1],
        y: [-50, 0],
      }),
      {
        target: section,
        offset: ["3%", "10%"],
      }
    );
    scroll(
      animate(buttons, {
        opacity: [0, 1],
        y: [-50, 0],
      }),
      {
        target: section,
        offset: ["4%", "10%"],
      }
    );
  }
});
