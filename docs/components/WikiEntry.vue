<template>
  <Layout>
    <template #doc-before>
      <div>
        <div v-for="item in weapons" :key="item.id" class="wiki-entry">
          <hr>
          <div class="item-showcase">
            <img :src="withBase(item.url)" class="wiki-item" :alt="item.name">
            <span class="description">
              <h2 class="title">{{ item.name }}</h2>
              <span class="summary">{{ item.summary }}</span>
            </span>
          </div>
          <div class="info custom-block recipe-block">
            <h5>Crafting Recipe</h5>
            <img src="./recipes/recipe-container.png" class="Recipe" alt="Recipe container">
            <img :src="withBase(item.recipe)" class="Recipe RecipeContainer" :alt="`${item.name} recipe`">
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import { withBase } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import entriesData from '../wiki/entries.json';

export default {
  name: 'WikiEntry',
  data() {
    return {
      weapons: []
    }
  },
  created() {
    this.weapons = entriesData.weapons || [];
  },
  methods: {
    withBase(path) {
      // Implement your base path logic here
      // Example: return this.$withBase(path) or process.env.BASE_URL + path
      return process.env.BASE_URL + path;
    }
  }
}
</script>

<style scoped>
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
</style>
