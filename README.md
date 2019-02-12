# gs-block-rules
Blocking rules for Google Search Results

We block some search results in Google Web Search results.
This is a repo of the blocking rules.

## Tools

### iorate:uBlacklist

See it on: [ Chrome Web Store](https://chrome.google.com/webstore/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe) -
[GitHub Repo](https://github.com/iorate/uBlacklist) -
[GitHub Releases](https://github.com/iorate/uBlacklist/releases)

As the author said:

> The same function is already provided by Personal Blocklist (by Google). However, sites blocked by Personal Blocklist appear in search results for a moment and then disappear, which annoys me. 

Another way, I found _Personal Blocklist (by Google)_ did not work on https results, the result link starts with https could not be blocked.

I found uBlacklist, and it works perfect for me.

## How to use

This repo contains the rule I used, feel free to folk and edit to fit your needs.

Copy the rules in file in dist directory, and past it to uBlacklist options dialog.

### Rule patten

uBlacklist uses match patterns and regular expressions, see below for reference.

MDN: [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

MDN: [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Contribute

As of this repo is for my persional use, PRs are not accept.

But feel free to fork, modify for your needs.

## License

[The MIT License](LICENSE).
