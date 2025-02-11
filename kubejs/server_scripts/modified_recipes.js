ServerEvents.recipes(event => {
  // Early Game
    event.recipes.botania.petal_apothecary("minecraft:wooden_pickaxe", ["#minecraft:logs", "#minecraft:logs", "#minecraft:logs", "twigs:twig", "twigs:twig"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_pickaxe", ["#forge:cobblestone", "#forge:cobblestone", "#forge:cobblestone", "twigs:twig", "twigs:twig", "#minecraft:coals"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_axe", ["#forge:cobblestone", "#forge:cobblestone", "#forge:cobblestone", "twigs:twig", "twigs:twig", "#minecraft:logs"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_hoe", ["#forge:cobblestone", "#forge:cobblestone", "twigs:twig", "twigs:twig", "#forge:seeds"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("minecraft:stone_shovel", ["#forge:cobblestone", "twigs:twig", "twigs:twig", "minecraft:dirt"], "#minecraft:saplings")
    event.recipes.botania.petal_apothecary("botania:placeholder", ["botania:livingrock"], "botania:framed_livingwood")
    event.recipes.botania.petal_apothecary("botania:crafty_crate", ["botania:framed_livingwood", "#botania:livingwood_logs", "#botania:livingwood_logs", "#botania:livingwood_logs", "#botania:livingwood_logs"], "botania:placeholder")
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
})
