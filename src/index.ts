import { greetUser } from "@utils/greet";

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = "John Doe";
  greetUser(name);

  const x = document.querySelectorAll("a");
  console.log(x);
});
