import { greetUser } from "@utils/greet";

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log("HELLO WROLD!!");
  greetUser("Hello Michael");
});
