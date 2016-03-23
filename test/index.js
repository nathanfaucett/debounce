var tape = require("tape"),
    debounce = require("..");


tape("debounce(func, wait[, immediate])", function(assert) {
    var count = 100,
        time = (new Date()).getTime();

    var fn = debounce(function() {
        console.log(((new Date()).getTime()) - time);
        assert.end();
    }, 100);

    setTimeout(function onTimeout() {
        if (count-- > 0) {
            setTimeout(onTimeout, 16);
        }
        fn();
    }, 16);
});
