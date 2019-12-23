import Observable from "../src/observable";

const o = new Observable();
o.on("test", (params)=> {
    alert("test called with params: " + JSON.stringify(params));
});
o.emit("test", 1, "asdasd");