import * as $ from "jquery";
import Greeter from "./entities/greeter";

let greeter = new Greeter("world!");
let msg = greeter.greet();
$("body").html(`<h1>${msg}'冯赛'</h1>`);
