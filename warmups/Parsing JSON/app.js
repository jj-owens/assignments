parsePokemon();

function parsePokemon() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonData = xhr.responseText;
            var data = JSON.parse(jsonData);
            var name = data.objects[0].pokemon;
            for (var i = 0; i <= data.objects[0].pokemon.length; i++) {
                var para = document.createElement("P");
                var t = document.createTextNode(name[i].name);
                para.appendChild(t);
                document.body.appendChild(para);
            }


        }
    }
    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
    xhr.send();

}