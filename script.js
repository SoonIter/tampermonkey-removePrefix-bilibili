// ==UserScript==
// @name         尚硅谷-bilibili视频删去前缀
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  一个脚本去除bilibili视频分集的过长的前缀
// @author       SoonIter
// @match        https://www.bilibili.com/video/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
  //使用网站
  const configs = [
      {
          h1Title:'2022版Flink1.13实战教程',
          reg:/\d{2,}_(第(.*)章_)?/
      },{
          h1Title:'尚硅谷Java入门视频教程',
          reg:/\d{2,}\.尚硅谷\_/
      }
  ]
  let flag = false; //是否已经执行

  function doIt(){
      try{
          flag === false && (function(){
              const title = document.querySelector('h1').title;
              const item = configs.find(i => title.search(i.h1Title) !== -1);
              if(item === undefined){
                  return;
              }
              console.log('执行脚本')
              const {h1Title, reg} = item;
              let arr = []
              const parts = document.querySelectorAll('div.link-content')
              for (const parentDom of parts) {
                  const Px = parentDom.querySelector('span.page-num');
                  arr.push(Px.innerHTML)
                  arr.push(' ')
                  const dom = parentDom.querySelector('span.part')
                  const content = dom.innerHTML;
                  const newContent = content.replace(reg,'')
                  dom.innerHTML = newContent;
                  arr.push(newContent)
                  arr.push('\n')
              }
              console.log(arr.join(''))
          })();
          flag = true
      }
      catch(err){
          console.log("脚本发生错误",err.message)
      }
  }
  const callback = function (records) {
      if(flag !== false){
          return;
      }
      records.forEach(function (record) {
          const dom = record.target;
          const {text:oldContent,className} = dom;
          if(typeof className ==='string' && className.includes('right-container')){
              doIt()
          }
      });
  };
  const observer = new MutationObserver(callback);
  const observeDOM = document.body
  observer.observe(observeDOM, {
      childList:true,
      subtree: true
  });
})();