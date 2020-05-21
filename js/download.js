var p = {
    "chrome": {
        title: "Google Chrome",
        description: "Download Schoology Plus from the Chrome Web Store",
        link: "https://chrome.google.com/webstore/detail/schoology-plus/fbfppoaockpecjpbdmldojdehdpepfef",
        color: "red",
        tint: "darken-4"
    },
    "firefox": {
        title: "Firefox",
        description: "Download Schoology Plus from Firefox Add-ons",
        link: "https://addons.mozilla.org/en-US/firefox/addon/schoology-plus/",
        color: "deep-purple",
        tint: "darken-4"
    },
    "edge": {
        title: "Microsoft Edge",
        description: "Download Schoology Plus from Microsoft Edge Add-ons",
        link: "https://microsoftedge.microsoft.com/addons/detail/fflijjibhgbhdgjgjkbbnamafdelcoal",
        color: "blue",
        tint: "darken-4"
    }
} 

function getBrowser() {
    var test = function(regexp) {
        return regexp.test(window.navigator.userAgent);
    }
    switch (true) {
        case test(/edg/i): return "edge";
        // case test(/opr/i) && (!!window.opr || !!window.opera): return "opera";
        case test(/chrome/i) && !!window.chrome: return "chrome";
        // case test(/trident/i): return "ie";
        case test(/firefox/i): return "firefox";
        // case test(/safari/i): return "safari";
        default: return "other";
    }
}

var browsers = ["chrome", "firefox", "edge"];
var browser = getBrowser();
var i = browsers.indexOf(browser);
var a = browsers.splice(i == -1 ? 0 : i, 1)[0];
var b = browsers[0];
var c = browsers[1];
var e = document.getElementById.bind(document);

e("a-title").textContent = p[a].title;
e("a-description").textContent = p[a].description;
e("a-link").href = p[a].link;
e("a-img").src = `/imgs/${a}.png`;
e("a-card").className = "";
e("a-card").classList.add("card", p[a].color, p[a].tint);

e("b-title").textContent = p[b].title;
e("b-description").textContent = p[b].description;
e("b-link").href = p[b].link;
e("b-img").src = `/imgs/${b}.png`;
e("b-card").className = "";
e("b-card").classList.add("card", p[b].color, p[b].tint);

e("c-title").textContent = p[c].title;
e("c-description").textContent = p[c].description;
e("c-link").href = p[c].link;
e("c-img").src = `/imgs/${c}.png`;
e("c-card").className = "";
e("c-card").classList.add("card", p[c].color, p[c].tint);