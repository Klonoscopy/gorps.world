---
layout: false
---
<style>
:root {
  scrollbar-color: #00000000 #00000000!important;
}
* {
    margin: 0;
}
.page {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}
@media (min-width: 640px) {
  .container {
    right: -15px!important;
  }
}
.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: auto;
}
html, body {
    height: 100%;
    overflow: hidden;
}
</style>
<body>
<div class="container">
    <picture>
        <source media="(min-width: 640px)" srcset="./public/store.png">
        <img src="./public/store-mobile.png" alt="Gorp's World store page">
    </picture>
</div>
</body>
