ServerEvents.recipes(event => {
  // Early Game
    event.recipes.botania.petal_apothecary("minecraft:wooden_pickaxe", ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs", "twigs:twig", "twigs:twig"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_pickaxe", ["#forge:cobblestone", "#forge:cobblestone", "#forge:cobblestone", "twigs:twig", "twigs:twig", "#minecraft:coals"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_axe", ["#forge:cobblestone", "#forge:cobblestone", "#forge:cobblestone", "twigs:twig", "twigs:twig", "#minecraft:logs"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_hoe", ["#forge:cobblestone", "#forge:cobblestone", "twigs:twig", "twigs:twig", "#forge:seeds"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_shovel", ["#forge:cobblestone", "twigs:twig", "twigs:twig", "minecraft:dirt"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:wooden_pickaxe", ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs", "minecraft:stick", "minecraft:stick"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_pickaxe", ["#forge:cobblestone", "#forge:cobblestone", "#forge:cobblestone", "minecraft:stick", "minecraft:stick", "#minecraft:coals"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_axe", ["#forge:cobblestone", "#forge:cobblestone", "#forge:cobblestone", "minecraft:stick", "minecraft:stick", "#minecraft:logs"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_hoe", ["#forge:cobblestone", "#forge:cobblestone", "minecraft:stick", "minecraft:stick", "#forge:seeds"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_shovel", ["#forge:cobblestone", "minecraft:stick", "minecraft:stick", "minecraft:dirt"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("botania:placeholder", ["botania:livingrock"], "#botania:livingwood_logs")
    event.recipes.botania.petal_apothecary("botania:crafty_crate", ["#botania:livingwood_logs", "#botania:livingwood_logs", "#botania:livingwood_logs", "#botania:livingwood_logs", "#botania:livingwood_logs"], "botania:placeholder")
    event.recipes.botania.petal_apothecary("minecraft:dropper", [
      "#forge:cobblestone",
      "#forge:cobblestone",
      "#forge:cobblestone",
      "#forge:cobblestone",
      "#forge:cobblestone",
      "#forge:cobblestone",
      "#forge:cobblestone",
      "#forge:cobblestone",
    ], "minecraft:raw_iron")
    event.recipes.botania.petal_apothecary("minecraft:oak_button", ["#minecraft:logs"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("botania:pure_daisy", [
      "botania:white_mystical_flower",
      "botania:white_mystical_flower",
      "botania:white_mystical_flower",
      "botania:white_mystical_flower"
    ])
    event.recipes.botania.petal_apothecary("botania:livingwood_twig", [
      "#botania:livingwood_logs",
      "#botania:livingwood_logs",
    ], "#minecraft:saplings")
    event.recipes.botania.pure_daisy("botania:livingrock", "#forge:cobblestone")
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

    event.recipes.create.filling('minecraft:blaze_rod', [Fluid.lava(), 'minecraft:bone'])
    event.recipes.create.filling('minecraft:netherrack', [Fluid.lava(250), '#forge:cobblestone'])
})
