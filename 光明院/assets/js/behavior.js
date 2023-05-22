////////////
// 属性『letter-spacing: .5em;』を最後の文字だけ取り去る
function killLetterSpace(arr) {
  arr.forEach(elem => {
    let lastChar = elem.textContent.slice(-1)
    let preText = elem.textContent.slice(0, -1)
    elem.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
  })
}

const anchor = document.querySelectorAll(".contents-links a")
killLetterSpace(anchor)


////////////
// <button class="header-menu-button">
const mainNav = document.getElementById("main-nav")
const headerMenuButton = mainNav.firstElementChild
const mainNavMask = mainNav.lastElementChild
const contentsLinks = mainNavMask.previousElementSibling

headerMenuButton.addEventListener("click", function() {
  // 記事へのリンクと黒マスクを上げ下げする。
  [mainNavMask, contentsLinks].forEach(elem => {
    elem.classList.toggle("pull-up")
  })
  
  // ハンバーガーメニューを動作させる。
  // この順番を上下に変えるとエラーになる。なぜ？
  Array.from(this.children).forEach(line => {
    line.classList.toggle("active")
  })
})


////////////
// 質問
// ハンバーガーメニューからリンクをクリックするとハンバーガーメニューが元に戻り該当のリンクへ画面が遷移する仕様をどう書くのか？


////////////
// オープニング
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("main-nav-mask").classList.add("open")
})


////////////
// スクロール・アニメーション
const targetElems = document.querySelectorAll(".animation-target")
const windowHight = window.innerHeight

document.addEventListener("scroll", function () {
  targetElems.forEach(elem => {
    // default setting
    const haflElemHight = elem.clientHeight / 5
    // const haflElemHight = elem.clientHeight
    const setHight = windowHight - haflElemHight
    const getElemDistance = elem.getBoundingClientRect().top
    if (setHight > getElemDistance) {
      elem.classList.add("active")
    }
  })
})