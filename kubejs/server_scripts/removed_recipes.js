ServerEvents.recipes(event => {
  // Remove create trains
  event.remove({id: 'create:sequenced_assembly/track'})
  event.remove({id: 'create:item_application/railway_casing_using_deployer'}) 
  event.remove({id: 'create:item_application/railway_casing'})
  event.remove({id: 'create:crafting/kinetics/schedule'})
  event.remove({id: 'create:crafting/appliances/schedule_clear'})
  event.remove({id: 'create:crafting/appliances/schedule_clear'})
  event.remove({id: 'create:crafting/kinetics/track_station'})
  event.remove({id: 'create:crafting/kinetics/track_signal'})
  event.remove({id: 'create:crafting/kinetics/track_observer_from_other_plates'})
  event.remove({id: 'create:crafting/kinetics/track_observer'})
  event.remove({id: 'create:crafting/kinetics/controls'})
  event.remove({id: 'create:crafting/kinetics/train_door'})
  event.remove({id: 'create:crafting/kinetics/train_trapdoor'})

  // Remove crafting table completely forced to use mechanical crafters or other means
  event.remove({id: 'minecraft:crafting_table'})
})

