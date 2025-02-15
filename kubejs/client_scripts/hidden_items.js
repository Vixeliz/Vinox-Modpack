JEIEvents.hideItems(event => {
  // Hide train stuff
  event.hide('create:track')
  event.hide('create:railway_casing')
  event.hide('create:schedule')
  event.hide('create:track_station')
  event.hide('create:track_signal')
  event.hide('create:track_observer')
  event.hide('create:controls')
  event.hide('create:train_door')
  event.hide('create:train_trapdoor')
  
  // Hide unneeded mob drops
  event.hide('minecraft:rotten_flesh')
  event.hide('minecraft:ghast_tear')

  // Hide create mechanical items
  event.hide('create:mechanical_roller')
  event.hide('create:mechanical_harvester')

  // Hide enchanting stuff
  event.hide('create_enchantment_industry:enchanting_guide')
  event.hide('create_enchantment_industry:printer')
  event.hide('minecraft:enchanting_table')
})
