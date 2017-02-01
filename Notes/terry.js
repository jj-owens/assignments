function btnRandom() {
    var ourRequest = new XMLHttpRequest(),
        method = "GET",
        url = "http://quotes.rest/quote/random.json?api_key=ZkuAYIBZVaM94IR3cavwFAeF&category=management" + new Date().getTime();

    ourRequest.open(method, url, false);
    ourRequest.onreadystatechange = function () {
        if (ourRequest.readyState === XMLHttpRequest.DONE && ourRequest.status === 200) {
            console.log(ourRequest.responseText);
            var ourData = JSON.parse(ourRequest.responseText);
            document.write(ourData.contents.quote);
        }
    };
    ourRequest.send();
}