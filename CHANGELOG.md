## Gorp's World Update 10 (2026-02-06)

::: warning
Opening a world after updating will show an "experimental features" warning. This is because of the new dimension I added.
:::

### NEW FEATURES

- Gorp's World dimension
  - Gorplings and Gorps will spawn here
  - Currently a barren testing ground with a few blocks
    - Gorpolite, Gorposite, Gorpium Ore, and Glooe
  - Gorp Rift Bioconduit
    - This item can be used to travel between Gorp's World and the overworld
      - Using it once will cause it to turn into a Spent Gorp Rift Bioconduit.
      - It can be charged with Gorpium. (Spent Gorp Rift Bioconduit + 3 Gorpium)
    - Crafted in a smithing table with a Gorp Rift Bioconduit Smithing Template, a Gorp Coin as the material, and a Bitten Gorp as the because
- Jorp Start enchantment
  - When applied to a Gorp Spear you can left click to fling yourself without charging
  - Incompatible with Jorp Draft
- Glingshot weapon
  - Uses Gorp Coins as ammo
  - Mobs hit with the glingshot will have their main-hand swapped out with a Gorp Coin. (Can be disabled via gamerule DisableGlingshotTrade)
- Gorp Blood Pump
  - Gorp will beat your heart for you if your health falls below a certain percentage
  - Your heart beats faster the closer you are to dying

### Additions

- Added music disc "New World"
- Added painting "Man Above, Gorp Below"
- Added Gorpling mob
  - Follows the player if they are holding Jorp Juice
- Added Gorpasol
  - Can be used to disable gravity
- Added Suspicious Bread
  - Spawns "Hostile Bread" mob
  
## Changes

- The Gorp color palette has been adjusted to better fit in the Minecraft style
- New idle and walking animation for Gorp mob
- Gorp Coin drops can now be disabled via gamerule DisableGorpCoinDrops and DisableGorpCoinOnAdvancement
- Gave gorp coins a green name
- Gorp Altar now looks less like just a normal lectern
- Spawning a Gorp mob with a Consolidated Gorp Cube will now play a special sound effect
- Destroying a Gorp (i.e. throwing him in lava) will cause him to scream in agony
- Resprites for Gorp Hammer, Gorp Staff, and Gorp Spear
- New handheld display for Gorp Hammer, Gorp Staff, and Gorp Spear
- When using the Gorp Spear while wearing Gorp Pajamas you are given a softer landing
- Boots now negate fall damage completely
- Double Jorp strength is now affected by Jump Boost effect
- Advancements will give Gorp Coins if you've started collecting them
- A Mythical Gorpiphany now has a 100% chance to occur. it was just too rare
- Rebalanced Impact Dampening Gorp Footwear recipe
- Gorp Fabric is now crafted with 2 String and 2 Bitten Gorps
- Reduced Gorp mob spawn frequency
- The Gorp Spear logic got corrupted again and I had to recreate it for the 3rd time so if it feels a little different thats why
- I'm also using that as an excuse to rebalance the power and Jorp Draft
- I think I did this in a previous update but it wasn't in the changelog so Flinging enchantment was renamed to Jorp Draft if you couldn't find it
- You can now create a Roasted Gorp Seed using a furnace in addition to a smoker or a campfire
- All Gorp-adjacent mobs will follow Jorp Juice to prevent confusion
  - "Jorp Juice is a Gorp's favorite beverage!"
- Removed Stick Storage feature from Gorp mobs as it was causing rapid tick death when you tamed multiple at once

## Bug Fixes
- On Fire! effect sends you into the stratosphere when using elytra
- Armor tooltips are showing the wrong buff description
  - Chestplate is for double jorping
  - Leggings give the Jorp Footed effect
- Spawning Gorps with a Consolidated Gorp Cube does not remove the item, letting you spawn infinite Gorps
- Gorp Staff and Gorp Spear are unbreakable and cannot be enchanted
- Gorp Staff has 0 attack speed and cannot be swung
- Spawning a Gorp via Consolidated Gorp Cube now spawns on the surface of the block rather than inside it

## [Gorp's World 0.9.1-hotfix](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/6383041) (2025-04-04)

### Bug Fixes

- Fixed a bug with Dicey Gorps giving 0 duration on effects

## Gorp's World 0.9.0 (2025-04-04)

### Additions

- Added a Gorp Coin drop. After acquiring permission to bite Gorp they will drop when killing mobs
- Added the Gorpophone. It allows you to make announcements to your Minecraft world in exchange for one Gorp Coin
- Added Impact Dampening Gorp Footwear to the Gorp Merchandise Collection (placeholder for now)
- Added Dicey Gorp Upgrade Smithing Template for crafting Dicey Gorp
- Added new He Is Gorp painting
- Added Upgraded Dicey Gorp. You can now upgrade a Dicey Gorp for better roll effects
- Added The Murdler

### Changes

- Updated Spicy and Icy Gorp Sprout textures to be more visible where they generate
- Let Gorp Buddy mobs spawn randomly in forests
- Changed Dicey Gorp crafting recipe to a smithing recipe

### Performance Improvements

- Fixed lag issue when sending messages in the Gorp Altar

## [Gorp's World 0.8.0](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/5906967) (2024-11-15)

### Additions

- Added additional responses for the Gorp Altar
- Added new painting "Echoed Gorp"
- Added new Elemental Gorps
  - Spicy Gorp, Icy Gorp, and Dicey Gorp
    - Spicy Gorp Sprouts generate in the Nether and Icy Gorp Sprouts generate on snow
- Added Gorp mob with patent pending Stick Storage technology

### Changes

- Jorp Juice will make you Jorp a bit higher and has a slightly shorter cooldown
- Story progression is more obvious
- Swapped Gorp Shirt and Gorp Pajama abilities (pants give you double jorp, shirt gives you fall damage resistance)
  - I thought a double jump in exchange for a chestplate slot wasn't worth it so this is my solution.
  - Gorp Shirt^ now only deals 1 heart of fall damage instead of 1.5
- Refactored Gorp Spear (had to redo pull strength logic due to corrupted procedure)

## [Gorp's World 0.7.0](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/5853029) (2024-10-27)

### Additions

- Added Gorp Merchandise Clothing Line
  - Uses High Quality Gorp Fabric for crafting
  - Collect the Gorp Respirator, I Love Gorp T-Shirt, and Gorp Pajamas in 0.7.0
    - The Gorp Respirator helps you fight common flu symptoms like weakness, hunger, and nausea and even cures poison! And it's all thanks to the cutting-edge gorp fabric technology used in the lining.
    - The I Love Gorp T-Shirt allows you to Jorp in mid-air after a jump. (if you don't use space to jump i am so sorry)
    - While wearing Gorp Pajamas, regardless of height, fall damage will deal 1.5 hearts of damage. They're parachute pants, that's why they do that.
    - Set bonus negates fall damage
- Added Consolidated Gorp Cube
  - Allows you to carry more Gorps at once and can be crafted within the inventory
- Added new responses for the Gorp Altar (im gonna make this where i put all the funny easter eggs)

### Changes

- Changed Gorp Staff recipe to be more intuitive
- Refactored the Jorping Mechanic
  - In turn, the Gorp Hammer makes you Jorp slightly higher now
- Gorp max stack size is now 8

## [Gorp's World 0.6.2](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/5829644) (2024-10-20)

### Bug Fixes

- Gorp Altar on gorp place didn't give you the advancement making progression impossible
- Gorp Staff targeting armor stands

### Changes

- Gorpiphanies too rare, made them easier to get

## [Gorp's World 0.6.1-hotfix](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/5826758) (2024-10-20)

### Additions

- Added new painting "G Mystery"

### Bug Fixes

- Forgot to remove some stuff for debugging


## [Gorp's World 0.6.0](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/5808372) (2024-10-13)

### Additions

- Added Gorp Spear
- Added several new advancements for story progression

### Changes

- 'Ready, Set, Gorp!' advancement renamed to 'Gorp's World' for technical reasons
- Gorp Altar chat system has been updated
- Altered Gorp biting behavior
  - You now need permission from a Gorp to bite it
- Another Gorp Staff nerf (less knockback)
- Removed Potion of Jorping (replaced by Jorp Juice)
- Other tiny balancing changes here and there

## [Gorp's World 0.5.0](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/5793505) (2024-10-07)

### Additions

- Added Gorp Altar
  - Demo version of Gorp Dialogue Technology
- New 'Ready, Set, Gorp!' advancement

### Changes

- Gorp Staff knockback reduced
- Jorp is now an enchantment for swords

## [Gorp's World 0.4.0](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/5781720) (2024-10-03)

### Additions

- Added Jorp Juice
- Added Jorp enchantment
- Added new music disc for your enjoyment :)


## [Gorp's World 0.3.0](https://www.curseforge.com/minecraft/mc-mods/gorps-world/files/5772829) (2024-09-30)

### Additions

- Added Gorp

