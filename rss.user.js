// ==UserScript==
// @name           Rss
// @description    Rss
// @include        http://feedreader.com/*
// @version        1.01
// ==/UserScript==



function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.entry_read .entry__summary__title {font-weight: normal;}');
addGlobalStyle('.entry__summary__title {font-weight: bold;}');
