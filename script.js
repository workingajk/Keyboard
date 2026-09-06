function clk(val) {
    let input = document.getElementById("input");
    switch (val) {
        case "space":
            input.value+=' '
            break;
        case "Tab":
            input.value+='\t'
            break;
        case "Enter":
            input.value+='\n'
            break;

        default:
            input.value+=val

            break;
    }
}
