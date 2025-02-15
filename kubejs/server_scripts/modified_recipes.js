ServerEvents.recipes(event => {
    // Mob drops
    event.custom({
      type: 'createaddition:rolling',
        input: {
          item: 'minecraft:bone_block',
          count: 1
        },
        result: {
          item: 'minecraft:bone',
          count: 1
        }
    })

    event.recipes.create.sandpaper_polishing('minecraft:ender_pearl', 'minecraft:emerald')

    event.recipes.create.filling('minecraft:blaze_rod', [Fluid.lava(), 'minecraft:bone'])
    event.recipes.create.filling('minecraft:netherrack', [Fluid.lava(50), '#forge:cobblestone'])
    event.recipes.create.mixing('minecraft:soul_sand', ['create:powdered_obsidian', '#minecraft:smelts_to_glass'])
    event.recipes.create.haunting('create:blaze_burner', 'create:empty_blaze_burner')
    event.recipes.create.haunting('minecraft:soul_campfire', 'minecraft:campfire')
    event.recipes.create.milling(Item.of('create:powdered_obsidian').withChance(0.5), 'minecraft:obsidian')
})
