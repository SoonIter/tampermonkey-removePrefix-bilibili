# tampermonkey-removePrefix-bilibili
 一个脚本去除bilibili视频分集的过长的前缀

[Go to Greasyfork and Dowload](https://greasyfork.org/zh-CN/scripts/448038-%E5%B0%9A%E7%A1%85%E8%B0%B7-bilibili%E8%A7%86%E9%A2%91%E5%88%A0%E5%8E%BB%E5%89%8D%E7%BC%80-tampermonkey-removeprefix-bilibili)

[Go to Github](https://github.com/SoonIter/tampermonkey-removePrefix-bilibili)

![effect](https://raw.githubusercontent.com/SoonIter/tampermonkey-removePrefix-bilibili/main/docs/imgs/effect.jpg)

## 删除前缀

```javascript
  const configs = [
      {
          h1Title:'2022版Flink1.13实战教程', //h1标题 的一部分即可
          reg:/\d{2,}_(第(.*)章_)?/	//前缀 正则 或 string
      },{
          h1Title:'尚硅谷Java入门视频教程',
          reg:/\d{2,}\.尚硅谷\_/
      }
  ]
```

![worked](https://raw.githubusercontent.com/SoonIter/tampermonkey-removePrefix-bilibili/main/docs/imgs/worked.png)

## 视频分集
![video-section-list](https://raw.githubusercontent.com/SoonIter/tampermonkey-removePrefix-bilibili/main/docs/imgs/video-section-list.png)