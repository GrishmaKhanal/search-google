browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: "search-google-lens",
        title: "Search Image with Google Lens",
        contexts: ["image"],
    });
});

// Handle the click event on the context menu
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "search-google-lens") {
        const googleLensUrl = `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(info.srcUrl)}`;

        browser.tabs.create({ url: googleLensUrl });
    }
});