import { readFile } from "fs";
import {writeFile, appendFile} from "fs/promises";

//await writeFile("hello.txt","Js is easy")

await appendFile("hello.txt","fsd is easy😃")

const content = await readFile("hello.text","utf-8");
console.log(content);