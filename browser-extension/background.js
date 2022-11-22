function redirect(goLink) {
    readApiHostFromConfigFile()
        .then(apiHost => {
            console.log('This is the Host', apiHost);
            chrome.tabs.update({url: apiHost + goLink});
        });
}

function readApiHostFromConfigFile() {
    const url = chrome.runtime.getURL('config/config.json');
    return fetch(url)
        .then(response => response.json())
        .then(config => config.apiHost);
}

function redirectGoLink(details) {
    const golink = details.url.replace(/(.*)\:\/\/go\//, "");
    redirect(golink);
}


function redirectSearchLink(details) {
    const goLink = details.url.replace(/(.*)\:\/\/(.*)=go%2F/, "")
        .replace(/%2F/g, "/") // Global flag g is included to replace all "%2F" with "/"
        .replace(/\&fr=opensearch|\&addon=opensearch/, "")// Remove trailing query string content of the search link
        .split('&')[0];
    redirect(golink);
}

// Link
chrome.webRequest.onBeforeRequest.addListener(
    redirectGoLink,
    {"urls": ["*://go/*"]},
    ["blocking"],
);

// Search Link
chrome.webRequest.onBeforeRequest.addListener(
    redirectSearchLink,
    {"urls": ["*://*.google.com/*=go%2F*", "*://*.yahoo.com/*=go%2F*", "*://*.bing.com/*=go%2F*", "*://*.duckduckgo.com/*=go%2F*", "*://*.ecosia.org/*=go%2F*", "*://*.baidu.com/*=go%2F*"]},
    ["blocking"],
);