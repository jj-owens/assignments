var count = localStorage.getItem("clickcount");
$("#clickspace").text(count);
$("#body1").click(function () {
    count++;
    localStorage.setItem("clickcount", count)
    $("#clickspace").text(count);
});