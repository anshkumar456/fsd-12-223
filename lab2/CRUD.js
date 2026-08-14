import readline from "readline/promises";
import { stdin, stdout } from "process";

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });

  do {
    console.log("welcome to flipkart🛒");
    console.log("1..........show car");
    console.log("2..........add product");
    console.log("3..........remove product");
    console.log("4..........update quantity");
    console.log("5..........checkout");

    choice = await cin.question("enter your choice: ");

    // Basic handling (you can expand this)
    switch (choice.trim()) {
      case "1":
        console.log("show car called");
        break;
      case "2":
        console.log("add product called");
        break;
      case "3":
        console.log("remove product called");
        break;
      case "4":
        console.log("update quantity called");
        break;
      case "5":
        console.log("checkout... exiting");
        break;
      default:
        console.log("invalid choice, try again");
    }
  } while (choice !== "5");

  cin.close();
};

main().catch(console.error);
