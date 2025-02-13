StartupEvents.registry('fluid', event => {
  // Basic "thick" (looks like lava) fluid with red tint
  event.create('liquid_mana')
    .thinTexture(0x29C5D1)
    .bucketColor(0x29C5D1)
    .displayName('Liquid Mana')

})


StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('mana_slime')
  event.create('infused_mana_slime')
  event.create('compressed_mana_slime')
})
