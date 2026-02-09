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
const items = ref({
  weapons: [
    { 
      name: 'Gorp Hammer',  
      summary: 'Makes you and your target Jorp on hit.',  
      url: '../assets/textures/item/gorp_hammer.png',
      recipe: './recipes/gorp-hammer.png'
    },
    { 
      name: 'Gorp Spear',  
      summary: 'Launches you in the direction you are looking.',  
      url: '../assets/textures/item/gorp_spear.png',
      recipe: './recipes/gorp-spear.png'
    },
    { 
      name: 'Gorp Staff',  
      summary: 'Sends mobs flying away from you.',  
      url: '../assets/textures/item/gorp_staff.png',
      recipe: './recipes/gorp-staff.png'
    },
    { 
      name: 'Glingshot',  
      summary: 'Gives the target the gift of a Gorp Coin.',  
      url: '../assets/textures/item/glingshot.png',
      recipe: './recipes/glingshot.png'
    }
  ],
  armor: [
    { 
      name: 'Gorp Respirator', 
      summary: 'Protects the wearer from common ailments.', 
      url: '../assets/textures/item/gorp_respirator.png'
    },
    { 
      name: 'I Love Gorp T-Shirt', 
      summary: 'Let\'s the wearer perform a double Jorp', 
      url: '../assets/textures/item/gorp_shirt.png'
    },
    { 
      name: 'Gorp Pajamas', 
      summary: 'Gives the wearer a Jorp Footed effect.', 
      url: '../assets/textures/item/gorp_pajamas.png'
    },
    { 
      name: 'Impact Dampening Gorp Boots', 
      summary: 'Negates fall damage.', 
      url: '../assets/textures/item/impact_dampening_gorp_boots.png'
    }
  ],
  tools: [
    {  
      name: 'Gorpophone',  
      summary: 'Can be used to make announcements to your Minecraft world in exchange for 1 Gorp Coin.',  
      url: '../assets/textures/item/gorpophone.png'
    },
    {  
      name: 'Gorpasol',  
      summary: 'Launches you in the direction you are looking.',  
      url: '../assets/textures/item/gorpasol.png'
    },
    {  
      name: 'Gorp Rift Bioconduit',  
      summary: 'Used to travel between Gorp\'s World and the overworld.',  
      url: '../assets/textures/item/gorp_rift_bioconduit.png'
    },
    {  
      name: 'Gorp Coin',  
      summary: 'The preferred currency of Gorp\'s World.',  
      url: '../assets/textures/item/gorp_coin.png'
    },
    {  
      name: 'Consolidated Gorp Cube',  
      summary: 'Allows you to carry more Gorps at once.',  
      url: '../assets/textures/item/consolidated_gorp_cube.png'
    }
  ],
  food: [
    {  
      name: 'Jorp Juice',  
      summary: 'Upon consumption the player will Jorp. Also a Gorp\'s favorite beverage!',
      url: '../assets/textures/item/jorp_juice.png'
    },
    {  
      name: 'Roasted Gorp Seed',  
      summary: 'Gives the Gorp Inspiration effect which let\'s you perform a triple Jorp.',
      url: '../assets/textures/item/roasted_gorp_seed.png'
    },
    {  
      name: 'Suspicious Bread',  
      summary: 'I mean... I think it\'s just bread?',  
      url: '../assets/textures/item/suspicious_bread.png'
    }
  ],
  gorps: [
    {  
      name: 'Gorp',  
      summary: 'A green dude.',  
      url: '../assets/textures/item/gorp.png'
    },
    {  
      name: 'Bitten Gorp',  
      summary: 'Dude, you like... totally bit him.',  
      url: '../assets/textures/item/bitten_gorp.png'
    },
    {  
      name: 'Icy Gorp',  
      summary: 'Looks like he could use a blanket.',
      url: '../assets/textures/item/icy_gorp.png'
    },
    {  
      name: 'Spicy Gorp',  
      summary: 'Careful, he\'s angry!',
      url: '../assets/textures/item/spicy_gorp.png'
    },
    {  
      name: 'Dicey Gorp',  
      summary: 'Roll to give yourself a random beneficial effect.',
      url: '../assets/textures/item/dicey_gorp.png'
    }
  ],
  materials: [
    {  
      name: 'High Quality Gorp Fabric',
      summary: 'So silky smooth...',
      url: '../assets/textures/item/gorp_fabric.png'
    },
    {  
      name: 'Gorpium',  
      summary: 'Found in clusters of Gorpolite.',
      url: '../assets/textures/item/gorpium.png'
    },
    {  
      name: 'Refined Gorpium',  
      summary: 'A refined version of Gorpium used in Enhanced Gorp recipes.',
      url: '../assets/textures/item/refined_gorpium.png'
    }
  ]
});
</script>

## Weapons

<div v-for="item in items.weapons" :key="item.id" class="wiki-entry">
<hr>
  <div class="item-showcase">
    <img :src="item.url" class="wiki-item"></img>
    <span class="description">
      <span class="title">{{ item.name }}</span>
      <span class="summary">{{ item.summary }}</span>
    </span>
  </div>
  <div class="info custom-block recipe-block">
    <h5>Crafting Recipe</h5>
    <img src="./recipes/recipe-container.png" class="Recipe"></img>
    <img :src="item.recipe" class="Recipe RecipeContainer"></img>
  </div>
</div>

## Tools

<div v-for="item in items.tools" :key="item.id">
<hr>
  <div class="item-showcase">
    <img :src="item.url" class="wiki-item"></img>
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
    <img :src="item.url" class="wiki-item"></img>
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
    <img :src="item.url" class="wiki-item"></img>
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
    <img :src="item.url" class="wiki-item"></img>
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
    <img :src="item.url" class="wiki-item"></img>
    <span class="description">
      <span class="title">{{ item.name }}</span>
      <span class="summary">{{ item.summary }}</span>
    </span>
  </div>
</div>
