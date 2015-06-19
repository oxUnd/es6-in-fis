import * as mA from "./module/moduleA"
import * as mB from "./module/moduleB"

mA.hello();
mB.hello2();

alert("done");

// Dynamic loading
require.async(['./module/asyncM.js'], function (m) {
    m.a();
    m.b();
});