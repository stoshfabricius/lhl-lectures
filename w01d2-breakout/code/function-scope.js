function parent() {
    var x = 0;

    function child() {
        console.log(x)
        var x = 8;

        if (true) {
            
        }
    }
    
    child()
    console.log(x)
}

parent()