<template>
    <!-- eslint-disable -->
    <div class="block__body">
        <a17-inputframe label="Bilder" name="medias.cover" > <a17-slideshow :name="fieldName('cover')" :max="100" crop-context="cover" ></a17-slideshow> </a17-inputframe> 
    </div>
</template>

<script>
  import BlockMixin from '@/mixins/block'

  export default {
    mixins: [BlockMixin]
  }
</script>
