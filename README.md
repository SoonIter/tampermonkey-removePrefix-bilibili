# tampermonkey-removePrefix-bilibili

一个脚本解决 bilibili 视频分集过长的问题

[下载链接(Go to Greasyfork and Download)](https://greasyfork.org/zh-CN/scripts/448038-%E5%B0%9A%E7%A1%85%E8%B0%B7-bilibili%E8%A7%86%E9%A2%91%E5%88%A0%E5%8E%BB%E5%89%8D%E7%BC%80-tampermonkey-removeprefix-bilibili)

[查看源码(Go to Github)](https://github.com/SoonIter/tampermonkey-removePrefix-bilibili)

![effect](https://raw.githubusercontent.com/SoonIter/tampermonkey-removePrefix-bilibili/main/docs/imgs/effect.jpg)

## 功能 1. 视频分集换行

![video-section-list](https://raw.githubusercontent.com/SoonIter/tampermonkey-removePrefix-bilibili/2885558aab6f297dd44fa2e74d376cb529742bc3/docs/imgs/section-list.png)

## 功能 2. 删除前缀


```javascript
// 通过修改脚本中的 configs 激活
const configs = [
  {
    h1Title: '2022版Flink1.13实战教程', // 当前视频的 h1标题 的一部分即可
    reg: /\d{2,}_(第(.*)章_)?/, // 前缀 正则 或 string
  },
  {
    h1Title: '尚硅谷Java入门视频教程',
    reg: /\d{2,}\.尚硅谷\_/,
  },
];
```

![worked](https://raw.githubusercontent.com/SoonIter/tampermonkey-removePrefix-bilibili/main/docs/imgs/worked.png)
