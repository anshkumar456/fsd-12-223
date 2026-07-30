import { EventEmitter } from "events";

const login = (name) => {
  console.log("${name} logged in");
};

const start = () => {
  console.log("system starts");
};
const working = (name) => {
  console.log("${name} add items to cart");
};
const checkout = (name) => {
  console.log("${name} logged out");
};

const task = new EventEmitter();
task.once("greetings", start);
task.on("greetings", login);
task.on("greetings", working);
task.on("greetings", checkout);

task.once("exit", () => {
  console.log("system exits");
});

task.emit("greetings", "ansh");
task.emit("greetings", "harsh");
task.emit("greetings", "arayan");
