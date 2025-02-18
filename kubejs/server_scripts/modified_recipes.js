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

    event.recipes.create.filling('minecraft:blaze_rod', [Fluid.lava(200), 'minecraft:bone'])
    event.recipes.create.filling('minecraft:netherrack', [Fluid.lava(50), '#forge:cobblestone'])
    event.recipes.create.mixing('minecraft:soul_sand', ['create:powdered_obsidian', '#minecraft:smelts_to_glass'])
    event.recipes.create.haunting('create:blaze_burner', 'create:empty_blaze_burner')
    event.recipes.create.haunting('minecraft:soul_campfire', 'minecraft:campfire')

    // Cheaper rails
  event.shaped(
    Item.of('minecraft:rail', 16), // arg 1: output
    [
      'A A',
      'ABA', // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'minecraft:iron_nugget',
      B: 'minecraft:stick',  //arg 3: the mapping object
    })
  event.shaped(
    Item.of('minecraft:powered_rail', 16), // arg 1: output
    [
      'A A',
      'ABA', // arg 2: the shape (array of strings)
      'ACA'
    ],
    {
      A: 'minecraft:gold_nugget',
      B: 'minecraft:stick',  //arg 3: the mapping object
      C: 'minecraft:redstone',  //arg 3: the mapping object
    })
})
