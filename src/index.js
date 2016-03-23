var apply = require("apply");


module.exports = debounce;


function debounce(func, wait, immediate) {
    var timeout = null;

    return function debounceFn() {
        var context = this,
            args = arguments,
            callNow = immediate && !timeout;

        function later() {
            timeout = null;
            if (!immediate) {
                apply(func, args, context);
            }
        }

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
}
