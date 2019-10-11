<template>
    <!-- eslint-disable -->
    <div class="block__body">
        <a17-textfield label="Titel" :name="fieldName('title')" type="text" :maxlength="100" in-store="value" ></a17-textfield><a17-wysiwyg label="Text" :name="fieldName('text')" :options='{"modules":{"toolbar":["bold","italic","underline",{"list":"ordered"},{"list":"bullet"},"link",{"align":[]},{"header":[2,3,false]}],"syntax":false}}' placeholder='Text eingeben...' in-store="value" ></a17-wysiwyg><a17-inputframe label="Bilder" name="medias.slideshow" > <a17-slideshow :name="fieldName('slideshow')" :max="10" crop-context="slideshow" ></a17-slideshow> </a17-inputframe>

    </div>
</template>

<script>
  import BlockMixin from '@/mixins/block'

  export default {
    mixins: [BlockMixin]
  }
</script>
