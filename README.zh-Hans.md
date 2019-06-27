# webiste-blacklist

网站黑名单。

用来屏蔽 Google 搜索结果的网站黑名单。通过屏蔽低质量的站点，我们可以把更多的时间浪费在美好的事物上。

## 为什么需要屏蔽一些网站和网页？

以下类型的网站，会浪费大量不必要的时间，因此予以屏蔽。

- 搜索相关度低
- 赌博、诈骗网站
- 低质量内容、语句生硬、机器翻译的
- 复制、抄袭内容
- 页面丑陋
- 页面广告多、遮盖内容
- 加载缓慢

## Blacklist

Blacklist on the `blocklist` directory.

Each files on the directory and its purpose:

- `domain.txt` domain blacklist for websites
- `pattern.txt` url pattern blacklist for urls
- `regexp.txt` regular express blacklist for urls
- `url.txt` pure url blacklist

We use `#` sign line for make notes.

## How to use

### Build your own blacklist repo

- fork this repo, or clone it to your local machine.
- update `blacklist` files
- build, use it in your own blacklist tools.

### Build

The build process will remove the notes, and sort items, remove duplicate items.

Finally, it outputs the rules file that blacklist tools could use.

Your can do this by a script, or by hands.

## Background technical infomation

To learn more about Rule pattens and Regular Expressons, please see:

MDN: [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

MDN: [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Blacklist tools

Before, we could use Google's Personal Blocklist chrome plugin, but it not works correctly later (works only in http urls. https will no effect.). For now, Google 
removed it from the Webstore.

So we found some third party plugins, maybe it's usefull.

### iorate:uBlacklist

[Chrome Web Store](https://chrome.google.com/webstore/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe) -
[GitHub Repo](https://github.com/iorate/uBlacklist) -
[GitHub Releases](https://github.com/iorate/uBlacklist/releases)

## Contribution

As of this repo is for my persional use, PRs are not accept, but feel free to fork, modify for your needs.

## License

The script is licensed under [The MIT License](LICENSE), and the blacklist self is licensed under Public Domain.
