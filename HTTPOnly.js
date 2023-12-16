// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2023-12-08
// @description  try to take over the world!
// @author       You
// @match        https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==


GM_cookie('list', { name: 'name' }, function(cookies, error) {
  if (!error) console.log(cookies);
});

// GM_cookie.list details supports url, domain, name and path
GM_cookie.list({ url: 'http://localhost:8080' }, function(cookies, error) {
  if (!error) console.log(cookies);

});

GM.cookie.list({ name: 'name' }).then(function(cookies) {
  console.log(cookies);
});

// GM_cookie.set details supports all properties defined here: https://developer.chrome.com/extensions/cookies#method-set
GM.cookie.set({ name: 'name', value: 'XXR', httpOnly: true }, function(error) {
  console.log(error || 'success');
});

GM.cookie.set({ name: 'name', value: 'foo', secure: true })
.then(function() {
  console.log('done');
}, function(error) {
  console.log(error);


// GM_cookie.delete details supports url, name
GM_cookie.delete({ name: 'name' }, function() {
  console.log(error || 'success');
})
})