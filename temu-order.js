// ==UserScript==
// @name        temu-autoorder
// @namespace   Violentmonkey Scripts
// @match       https://kuajing.pinduoduo.com/main/order-manage
// @grant       none
// @version     1.0
// @author      -
// @description 6/12/2023, 4:02:29 PM
// ==/UserScript==

async function run() {
  if(location.href !== "https://kuajing.pinduoduo.com/main/order-manage"){
    console.log("skip", location.href)
    return
  }
  const arr = [...document.querySelectorAll(".BTN_outerWrapper_5-52-0.BTN_textPrimary_5-52-0.BTN_small_5-52-0.BTN_outerWrapperLink_5-52-0")]
  const list = arr.filter(i => {
    return i.className.indexOf("BTN_disabled")==-1 && i.innerHTML.indexOf("加入发货台")>0
  })
  if(!arr.length) return
  list[0].click()
  setTimeout(() => {
    const xx = [...document.querySelectorAll(".BTN_outerWrapper_5-52-0.BTN_primary_5-52-0.BTN_medium_5-52-0.BTN_outerWrapperBtn_5-52-0")]
    btn = xx.filter(i => {
      return i.innerHTML.indexOf("确认")>0
    })
    btn[0].click()
  }, 300)

}

function sleep(){
  const n = Math.floor(Math.random() * 60000*3 + 60000)
  console.log(n)
  return new Promise(res => setTimeout(res, n))
}

setTimeout(async () => {
  while(true){
    await run()
    await sleep()
  }
}, 2000)
