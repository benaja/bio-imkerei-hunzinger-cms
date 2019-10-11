<template>
    <!-- eslint-disable -->
    <div class="block__body">
        <a17-textfield label="Anzahl Spalten" :name="fieldName('rows')" type="number" in-store="value" ></a17-textfield><a17-repeater type="card_with_image" :name="repeaterName('card_with_image')" ></a17-repeater>
    </div>
</template>

<script>
  import BlockMixin from '@/mixins/block'

  export default {
    mixins: [BlockMixin]
  }
</script>
