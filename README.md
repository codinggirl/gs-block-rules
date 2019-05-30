# webiste-blacklist

A blacklist for webistes.

We use these list to block website in Google Search Results and web sites in Chrome.

## Data

We have the following files on `data` directory.

- domain.csv
    block websites accoding domains.
    csv files contain domain, reason.
- domain.txt
    block websites accoding domains.
    txt files contain only domain.
- pattern-and-re.csv
    block websites accoding url pattens and reguar expressions.
- pattern-and-re.txt
    block websites accoding url pattens and reguar expressions.
- url.csv
    block websites accoding urls.
- url.txt
    block websites accoding urls.
- word.csv
    block websites accoding keywords.
- word.txt
    block websites accoding keywords.

## How to use

This repo contains the rule I used, feel free to folk and edit to fit your needs.

This repo contains the rules, you can import to your software.

### Rule pattens and Regular Expressons

uBlacklist uses match patterns and regular expressions, see below for reference.

MDN: [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

MDN: [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Tools

#### iorate:uBlacklist

See it on: [ Chrome Web Store](https://chrome.google.com/webstore/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe) -
[GitHub Repo](https://github.com/iorate/uBlacklist) -
[GitHub Releases](https://github.com/iorate/uBlacklist/releases)

As the author said:

> The same function is already provided by Personal Blocklist (by Google). However, sites blocked by Personal Blocklist appear in search results for a moment and then disappear, which annoys me. 

Another way, I found _Personal Blocklist (by Google)_ did not work on https results, the result link starts with https could not be blocked.

I found uBlacklist, and it works perfect for me.

## Contribution

As of this repo is for my persional use, PRs are not accept, but feel free to fork, modify for your needs.

## License

The script is licensed under [The MIT License](LICENSE), and the data (url rules) it self is licensed under CC0.
