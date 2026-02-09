---
layout: doc
head:
  - ['style', {}, '
    .vp-doc h2 {
      border-top: 0;
    }
    .wiki-item {
      width: 116px;
      height: 116px;
      background: rgb(38 38 53);
      -webkit-mask-box-image-source: url(/frame.svg);
      -webkit-mask-box-image-slice: 4 fill;
      -webkit-mask-box-image-width: 16px;
      -webkit-mask-box-image-repeat: stretch;
      padding: 10px;
      image-rendering: pixelated;
      margin-right: 16px;
    }
    .item-showcase, div[class="item-showcase"] strong {
      display: flex;
      flex-direction: row;
    }
    .recipe-block {
      display: flex;
      padding-top: 12px;
      padding-bottom: 15px;
      margin: auto;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      column-gap: 15px;
    }
    .Recipe {
      position: absolute;
      margin: 10px 0 0;
    }
    .RecipeContainer {
      position: relative;
    }
    .background {
      position: relative;
      z-index: -10;
      min-width: 116px;
      height: 116px;
      background: rgb(38 38 53);
      -webkit-mask-box-image-source: url(/frame.svg);
      -webkit-mask-box-image-slice: 4 fill;
      -webkit-mask-box-image-width: 16px;
      -webkit-mask-box-image-repeat: stretch;
      padding: 10px;
      image-rendering: pixelated;
      margin-right: 16px;
    }
    .foreground {
      position: relative;
      min-width: 96px;
      height: 96px;
      padding: 0;
      margin: 0;
    }
    .glint {
      position: absolute;
      width: 116px;
      height: 116px;
      z-index: 0;
      background: transparent;
      padding: 10px;
      image-rendering: pixelated;
      margin-right: 16px;
      background-image: url("../public/enchanted_glint_item.png");
      background-size: 640px;
      background-origin: content-box;
      mask-image: url("../assets/textures/item/dicey_gorp.png"), none;
      mask-position: center;
      mask-size: 96px;
      mix-blend-mode: screen;
      mask-repeat: no-repeat;
      animation: shine-reversed 15s linear infinite;
    }
    .translucent {
      width: 116px;
      z-index: -10;
      opacity: 100%;
      image-rendering: pixelated;
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 4px;
    }
    .summary {
      line-height: 22px;
      text-wrap: wrap;
      max-width: 480px;
    }
    .title {
      font-family: "MinecraftSeven";
      font-size: 1.5em;
    }
    .wiki-item.long {
      width: 116px;
    }
    @keyframes shine-reversed {
      0% {
        background-position: 0 0, center;
      }
      100% {
        background-position: 640px 640px, center;
      }
    }
  ']
---
<script setup>
import { ref } from 'vue';
import { withBase, useData } from 'vitepress';
import items from './entries.json';
</script>

## Weapons

<div v-for="item in items.weapons" :key="item.id" class="wiki-entry">
<hr>
  <div class="item-showcase">
    <img :src="withBase(item.url)" class="wiki-item"></img>
    <span class="description">
      <span class="title">{{ item.name }}</span>
      <span class="summary">{{ item.summary }}</span>
    </span>
  </div>
  <div class="info custom-block recipe-block">
    <h5>Crafting Recipe</h5>
    <img src="./recipes/recipe-container.png" class="Recipe"></img>
    <img :src="withBase(item.recipe)" class="Recipe RecipeContainer"></img>
  </div>
</div>

## Tools

<div v-for="item in items.tools" :key="item.id">
<hr>
  <div class="item-showcase">
    <img :src="withBase(item.url)" class="wiki-item"></img>
    <span class="description">
      <span class="title">{{ item.name }}</span>
      <span class="summary">{{ item.summary }}</span>
    </span>
  </div>
</div>

## Armor

<div v-for="item in items.armor" :key="item.id">
<hr>
  <div class="item-showcase">
    <img :src="withBase(item.url)" class="wiki-item"></img>
    <span class="description">
      <span class="title">{{ item.name }}</span>
      <span class="summary">{{ item.summary }}</span>
    </span>
  </div>
</div>

## Food and Consumables

<div v-for="item in items.food" :key="item.id">
<hr>
  <div class="item-showcase">
    <img :src="withBase(item.url)" class="wiki-item"></img>
    <span class="description">
      <span class="title">{{ item.name }}</span>
      <span class="summary">{{ item.summary }}</span>
    </span>
  </div>
</div>

### Elemental Gorps

<div v-for="item in items.gorps" :key="item.id">
<hr>
  <div class="item-showcase">
    <img :src="withBase(item.url)" class="wiki-item"></img>
    <span class="description">
      <span class="title">{{ item.name }}</span>
      <span class="summary">{{ item.summary }}</span>
    </span>
  </div>
</div>

<div>
<hr>
  <div class="item-showcase">
    <span class="glint"></span>
    <span class="background"><img src="../assets/textures/item/dicey_gorp.png" class="background foreground"></img></span>
    <span class="description">
      <span class="title">Upgraded Dicey Gorp</span>
      <span class="summary">Grants better effects than a regular Dicey Gorp.</span>
    </span>
  </div>
</div>

## Crafting Materials

<div v-for="item in items.materials" :key="item.id">
<hr>
  <div class="item-showcase">
    <img :src="withBase(item.url)" class="wiki-item"></img>
    <span class="description">
      <span class="title">{{ item.name }}</span>
      <span class="summary">{{ item.summary }}</span>
    </span>
  </div>
</div>
