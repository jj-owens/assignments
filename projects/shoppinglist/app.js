function addBtn() {
    var newListItem = document.getElementById("inputBox").value;
    $("#list1").append(`<div><button class="delItem" type="button">X</button> <li class="li" id="li">${newListItem}</li></div>`);
    /*    $("#inputBox").keypress(function (a) {
            var key = a.which;
            if (key == 13) {
                $("#list1").append(`<div><button class="delItem" type="button">X</button> <li class="li" id="li">${newListItem}</li></div>`);
            }
        });*/
    $(".delItem").click(delItem);
    $("#inputBox").val("");
}

function delItem() {
    $(this).parent().remove()
}