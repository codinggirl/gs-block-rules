# webiste-blacklist

A website blacklist. We use it to block low sites in Google search results.

## Usage

### Install Google Chrome extension

uBlacklist: 
[Chrome Web Store](https://chrome.google.com/webstore/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe) -
[GitHub Repo](https://github.com/iorate/uBlacklist)

### Folk this repo, update blacklist to fit your needs

`blacklist.txt` contains rules, it may be url patterns or regular expresses.

Learn more: 
[match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) -
[regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Build a dist file

```
npm run build
```

### Subscribe url from extension from GitHub or NPM.

The `blacklist.dist.txt` file is for subscribe use.

e.g., use a gh url:

```
https://raw.githubusercontent.com/codinggirl/website-blacklist/master/blacklist.dist.txt
```

Your can also submit to npm, and ref a link via `unpkg`.

### Enjoy your web search.

Google search results now clean.

## Contribution

As of this repo is for my persional use, PRs are not accept, but feel free to fork, modify for your needs.

## License

The script is licensed under [The MIT License](LICENSE), and the blacklist self is licensed under Public Domain.
