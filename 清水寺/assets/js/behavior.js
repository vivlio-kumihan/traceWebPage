const btnCover = document.getElementById("for-sp-menu-switch")
const btn = btnCover.firstElementChild
const mainHeader = document.getElementById("main-header")
btn.addEventListener("click", function() {
  mainHeader.classList.toggle("active")
})

// hamberger menu
const hamburgerMenuBtn = document.getElementById("header-menu-button")
const btnLines = Array.from(document.querySelectorAll(".btn-line"))

hamburgerMenuBtn.addEventListener("click", function () {
  btnLines.forEach((line, idx) => {
    switch (idx) {
      case 0:
        line.classList.toggle("oblique-line-dw")
        break;
      case 1:
        line.classList.toggle("erase")
        break;
      case 2:
        line.classList.toggle("oblique-line-up")
        break;
    }
  })
})

// スクロールをして任意の地点に来たら要素を出現させる
window.addEventListener("scroll", function () {
  let animationTarget = Array.from(document.querySelectorAll("[id^='apear'"))
  animationTarget.forEach(function (article, idx) {
    // console.log(article, idx, article.getBoundingClientRect().top)
    if (700 > article.getBoundingClientRect().top) {
      article.classList.add("active")
    }
  })
})

// とりあえず動かしたいから設置する。リファクタリング必要。
window.addEventListener("scroll", function () {
  let animationTarget = document.querySelector("nav.sns")
  if (700 > animationTarget.getBoundingClientRect().top) {
    animationTarget.classList.add("active")
  }
})

// 最初はスクロールに追従するヘッダーからFIXされたヘッダーへ変化するアニメーション
const targetHeader = document.querySelector(".header-container.main")
const readyValue = 150
const triggerValue = 160
window.addEventListener("scroll", function () {
  // 透明にする用意
  if (readyValue < this.scrollY < triggerValue) {
    targetHeader.classList.add("ready")
    // 透明 => fix headerへ
    if (triggerValue < this.scrollY) {
      targetHeader.classList.remove("ready")
      targetHeader.classList.add("apear")
      // headerが原点に戻ったら元のスタイルに戻す仕掛け
    } else if (0 === this.scrollY) {
      targetHeader.classList.remove("ready")
      targetHeader.classList.remove("apear")
    }
  }
})

// 任意の文字数を超えたら文字数＋『...』と表示させる。
function truncateText(str, maxLength) {
  if (str.textContent.length >= maxLength) {
    return str.textContent.substr(0, maxLength) + '...';
  } else {
    return str.textContent
  }
}

let inputTexts = document.querySelectorAll(".topics dd p")
for (text of inputTexts) {
  text.textContent = truncateText(text, 22)
}

// 見出し2に付いてる属性『letter-spacing: .5em;』を最後の文字だけ取り去る
// 最初のコード　バグあり
// let headingTwo = document.querySelectorAll("h2")
// for (let heading of headingTwo) {
//   let orgText = heading.innerHTML
//   let lastChar = orgText.slice(-1)
//   heading.innerHTML = orgText.replace(lastChar, `<span class="remove-letter-spacing">${lastChar}</span>`)
// }

// 改良版
function killLetterSpace(elem) {
  for (let head of elem) {
    let lastChar = head.textContent.slice(-1)
    let preText = head.textContent.slice(0, -1)
    head.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
  }
}

let headingTwo = Array.from(document.querySelectorAll("h2"))
for (let head of headingTwo) {
  let lastChar = head.textContent.slice(-1)
  let preText = head.textContent.slice(0, -1)
  head.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
}

let heading = Array.from(document.querySelectorAll("#sub-guide .inner-wrapper > dt"))
heading.forEach(head => {
  let lastChar = head.textContent.slice(-1)
  let preText = head.textContent.slice(0, -1)
  head.innerHTML = `${ preText }<span class="remove-letter-spacing">${ lastChar }</span>`
})

let guideHeading = Array.from(document.querySelectorAll(".guide dt"))
guideHeading.forEach(head => {
  let lastChar = head.textContent.slice(-1)
  let preText = head.textContent.slice(0, -1)
  head.innerHTML = `${ preText }<span class="remove-letter-spacing">${ lastChar }</span>`
})

let articles = document.querySelectorAll(".instagram article")
for (let article of articles) {
  article.addEventListener("mouseenter", function() {
    let information = this.firstElementChild.lastElementChild
    this.classList.add("active")
    information.classList.add("active")
  })
  article.addEventListener("mouseleave", function() {
    let information = this.firstElementChild.lastElementChild
    this.classList.remove("active")
    information.classList.remove("active")
  })
}

const li = Array.from(document.querySelectorAll(".anchor-wrapper > li"))
// console.log(li)
const listWrapper = Array.from(document.querySelectorAll(".anchor-wrapper .list-wrapper"))
// console.log(listWrapper)
li.forEach(function(areaLi) {
  areaLi.addEventListener("mouseenter", function() {
    let verticalMenu = this.querySelectorAll(".vertical-menu")[0]
    if (verticalMenu) { verticalMenu.classList.add("menu-active")}
  })
  areaLi.addEventListener("mouseleave", function() {
    let verticalMenu = this.querySelectorAll(".vertical-menu")[0]
    if (verticalMenu) { verticalMenu.classList.remove("menu-active")}
  })
})

// for (let areaDd of li) {
//   areaDd.addEventListener("mouseenter", function() {
//     let verticalMenu = this.querySelectorAll(".vertical-menu")[0]
//     if (verticalMenu) { verticalMenu.classList.add("menu-active") }
//   })
//   areaDd.addEventListener("mouseleave", function() {
//     let verticalMenu = this.querySelectorAll(".vertical-menu")[0]
//     if (verticalMenu) { verticalMenu.classList.remove("menu-active") }
//   })
// }

// const moreInfo = document.querySelectorAll("#main-guide dd:last-of-type")
// console.log(moreInfo)