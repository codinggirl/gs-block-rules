# webiste-blacklist

Google 搜索结果黑名单。屏蔽低质量站点，把更多时间浪费在美好的事物上。

## 使用

我们使用 iorate 编写的软件 uBlacklist。

[Chrome Web Store](https://chrome.google.com/webstore/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe) -
[GitHub Repo](https://github.com/iorate/uBlacklist) -
[GitHub Releases](https://github.com/iorate/uBlacklist/releases)

Folk the repo, and update to fit your needs.

### update blacklist

`blacklist.txt` is the blacklist file, it contains url patterns or regular expresses.

To learn more about Rule pattens and Regular Expressons, please see:

- MDN: [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- MDN: [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### sort and unique

```
npm run format
```

### 订阅地址

```
https://raw.githubusercontent.com/codinggirl/website-blacklist/master/blacklist.txt
```

## 什么样的网站会被屏蔽

- 搜索相关度低
- 赌博
- 诈骗
- 低质量内容、语句生硬、机器翻译
- 复制、抄袭内容
- 页面丑陋
- 页面广告多、遮盖内容
- 加载缓慢
- 区块链
- 中国政府网站

## Contribution

本项目不接收共享。如果你有修改需要，请自行 folk，并依据自身需求修改。

## License

The script is licensed under [The MIT License](LICENSE), and the blacklist self is licensed under Public Domain.
