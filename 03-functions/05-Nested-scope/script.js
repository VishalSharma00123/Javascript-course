function first() {
    const x = 100;
    function second() {
        const y = 100
        console.log(x + y);
    }
    second()
}
first()