window.animateLineTo = function (index) {
    const target = document.getElementById(`agent-${index}`);
    if (!target) return;

    const line = document.getElementById("highlight-line");
    const rect = target.getBoundingClientRect();
    const offset = target.offsetLeft + target.offsetWidth / 2;

    line.setAttribute("x2", offset.toString());
}
