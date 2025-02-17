ServerEvents.recipes(event => {
  // Remove create trains
  // event.remove({id: 'create:sequenced_assembly/track'})
  // event.remove({id: 'create:item_application/railway_casing_using_deployer'}) 
  // event.remove({id: 'create:item_application/railway_casing'})
  // event.remove({id: 'create:crafting/kinetics/schedule'})
  // event.remove({id: 'create:crafting/appliances/schedule_clear'})
  // event.remove({id: 'create:crafting/appliances/schedule_clear'})
  // event.remove({id: 'create:crafting/kinetics/track_station'})
  // event.remove({id: 'create:crafting/kinetics/track_signal'})
  // event.remove({id: 'create:crafting/kinetics/track_observer_from_other_plates'})
  // event.remove({id: 'create:crafting/kinetics/track_observer'})
  // event.remove({id: 'create:crafting/kinetics/controls'})
  // event.remove({id: 'create:crafting/kinetics/train_door'})
  // event.remove({id: 'create:crafting/kinetics/train_trapdoor'})

  // Removed mob drops
  event.remove({id: 'farmersdelight:organic_compost_from_rotten_flesh'})
  event.remove({id: 'botaniadelight:mana_flesh'})
  event.remove({id: 'botania:mana_infusion/rotten_flesh_to_leather'})
  event.remove({id: 'sliceanddice:cooking/farmersdelight/cooking/dog_food'})
  event.remove({id: 'botania:fel_pumpkin'})
  event.remove({id: 'farmersdelight:cooking/dog_food'})

  // Remove create mechanical items
  event.remove({id: 'create:crafting/kinetics/mechanical_harvester'})
  event.remove({id: 'create:crafting/kinetics/mechanical_roller'})

  // Redunant enchanting means
  event.remove({id: 'create_enchantment_industry:crafting/printer'})
  event.remove({id: 'create_enchantment_industry:crafting/enchanting_guide'})
  event.remove({id: 'minecraft:enchanting_table'})

  // Cheaper rails
  event.remove({id: 'minecraft:powered_rail'})
  event.remove({id: 'minecraft:rail'})


  // Remove boring mana gen
  event.remove({id: 'ars_nouveau:agronomic_sourcelink'})
  event.remove({id: 'ars_nouveau:volcanic_sourcelink'})
  event.remove({id: 'ars_nouveau:alchemical_sourcelink'})
  event.remove({id: 'ars_nouveau:vitalic_sourcelink'})
  event.remove({id: 'ars_nouveau:mycelial_sourcelink'})
})

