chrome.commands.onCommand.addListener(function (command) {
    switch (command) {
        case "select_1":
            //do something
            console.log("Select left image.");
            chrome.storage.sync.get('state', function (data) {
                if (data.state === 'on') {
                    chrome.tabs.executeScript({ code: `(${click_radio})(0)` });
                }
            });
            break;
        case "select_2":
            console.log("Select right image.");
            chrome.storage.sync.get('state', function (data) {
                if (data.state === 'on') {
                    chrome.tabs.executeScript({ code: `(${click_radio})(1)` });
                }
            });
            break;
        case "select_3":
            console.log("Both are relevant to target image.");
            chrome.storage.sync.get('state', function (data) {
                if (data.state === 'on') {
                    chrome.tabs.executeScript({ code: `(${click_radio})(2)` });
                }
            });
            break;
        case "select_4":
            console.log("There is no relevant image.");
            chrome.storage.sync.get('state', function (data) {
                if (data.state === 'on') {
                    chrome.tabs.executeScript({ code: `(${click_radio})(3)` });
                }
            });
            break;
    }
});

function click_radio(id) {
    document.getElementById(`id_select_${id}`).click();
}

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.storage.sync.get('state', function (data) {
        if (data.state === 'on') {
            chrome.storage.sync.set({ state: 'off' });
            chrome.browserAction.setIcon({ path: "icon_off.png" });
            console.log('off!');
            //do something, removing the script or whatever
        } else {
            chrome.storage.sync.set({ state: 'on' });
            chrome.browserAction.setIcon({ path: "icon.png" });
            console.log('on!')
        }
    });
});

chrome.storage.sync.get('state', function (data) {
    if (data.state === 'on') {
        chrome.browserAction.setIcon({ path: "icon.png" });
        console.log('change off!')
    } else {
        chrome.browserAction.setIcon({ path: "icon_off.png" });
        console.log('change on!')
    }
});