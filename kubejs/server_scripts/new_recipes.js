ServerEvents.recipes(event => {
    // Recipes for experience process
    event.recipes.botania.mana_infusion("kubejs:mana_slime", "minecraft:slime_ball", 200)
    event.recipes.create.haunting('kubejs:infused_mana_slime', 'kubejs:mana_slime')
    event.recipes.create.compacting('kubejs:compressed_mana_slime', 'kubejs:infused_mana_slime')
})
