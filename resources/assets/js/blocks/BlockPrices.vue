<template>
    <!-- eslint-disable -->
    <div class="block__body">
        <a17-textfield label="Preis Text" :name="fieldName('name')" type="text" :maxlength="200" in-store="value" ></a17-textfield><a17-textfield label="Preis in CHF" :name="fieldName('amount')" type="number" :maxlength="200" in-store="value" ></a17-textfield>
    </div>
</template>

<script>
  import BlockMixin from '@/mixins/block'

  export default {
    mixins: [BlockMixin]
  }
</script>
