// ==UserScript==
// @name           Rss
// @description    Rss
// @include        http://feedreader.com/*
// @version        1.11
// @namespace https://github.com/costia/boldRSSfeedreader
// @updateURL https://github.com/costia/boldRSSfeedreader/raw/master/rss.user.js
// @downloadURL https://github.com/costia/boldRSSfeedreader/raw/master/rss.user.js
// @grant        none
// ==/UserScript==
/*jslint browser:true */


function addGlobalStyle(css) {
	"use strict";
    var head, style;
    head = document.getElementsByTagName("head")[0];
    if (!head) { return; }
    style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(".entry_read .entry__summary__title {font-weight: normal;}");
addGlobalStyle(".entry__summary__title {font-weight: bold;}");
