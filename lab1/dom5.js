import { EventEmitter } from "events";


class Domclass extends EventEmitter{
    addEventListener(eventName, callback){
        this.on(eventName,callback);
    }
    removeEventListner(eventName, callback){
        this.off()
    }

    dispatchEvent(eventName, eventdata ={}){
        const event ={
            timespan: new Date();
            ...eventdata,
        };
        this.event(eventName ,event)
    }
}

const button = new Domclass();
const handleclick = (event) => {
    console.log('Button clicked type : $ {event.type} at ${event.timespan}');
};

button.addEventListener("click",handleclick);
button.dispatchEvent("click", {
    target:"submitBtn",
});

button.removeEventListner("click",handleclicl);
button.dispatchEvent("click",{
    target:"resetBtn",
});