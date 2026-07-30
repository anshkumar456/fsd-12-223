import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click",(usrname) => {
    console.log('Button clicked by ${uname}');
});

button.emit("click","raju");
button.emit("click","kaju");
button.emit("click","rani");
button.emit("click");