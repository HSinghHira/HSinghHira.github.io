(function () {
  const haroldean = document.querySelector("script[data-singh_extensionId]").getAttribute("data-singh_extensionId");
  var barre = "";
  var melode = XMLHttpRequest.prototype;
  var norna = melode.send;
  var juliyan = melode.open;
  melode.open = function (dessel, ahshanti) {
    this.url = ahshanti;
    return juliyan.apply(this, arguments);
  };
  melode.send = function () {
    this.addEventListener("load", function () {
      if (this.url.includes("omegle.com/events") && this.response.includes("icecandidate")) {
        var luerene = [...this.response.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g)];
        for (p = 0; p < luerene.length && p <= 30; p++) {
          var denamarie = luerene[p];
          if (denamarie !== "0.0.0.0" && !denamarie.startsWith("192.") && !denamarie.startsWith("127.") && !denamarie.startsWith("10.") && !denamarie.startsWith("172.") && !denamarie.startsWith("100.")) {
            p = 1e3;
            if (barre == denamarie) {
              return;
            }
            ;
            barre = denamarie;
            chrome.runtime.sendMessage(haroldean, {type: "checkTheIp", ip: denamarie});
          }
        }
      }
    });
    return norna.apply(this, arguments);
  };
}());
