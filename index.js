const { spy } = require("chai");

function receivesAFunction(spy) {
    spy()
}
function returnsANamedFunction() {
    return receivesAFunction
}
function returnsAnAnonymousFunction () {
    return function() {}
}