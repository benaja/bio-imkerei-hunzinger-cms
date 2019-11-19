<template>
    <!-- eslint-disable -->
    <div class="block__body">
        <a17-wysiwyg label="Text" :name="fieldName('text')" :options='{"modules":{"toolbar":["bold","italic","underline",{"list":"ordered"},{"list":"bullet"},"link",{"align":[]},{"header":[1,2,3,false]},"image"],"syntax":false}}' placeholder='Text eingeben...' in-store="value" ></a17-wysiwyg>
    </div>
</template>

<script>
  import BlockMixin from '@/mixins/block'

  export default {
    mixins: [BlockMixin]
  }
</script>
