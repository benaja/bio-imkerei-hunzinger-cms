<template>
    <!-- eslint-disable -->
    <div class="block__body">
        <a17-textfield label="Titel" :name="fieldName('title')" type="text" :maxlength="100" in-store="value" ></a17-textfield><a17-wysiwyg label="Text" :name="fieldName('text')" :options='{"modules":{"toolbar":["bold","italic","underline",{"list":"ordered"},{"list":"bullet"},"link",{"align":[]},{"header":[2,3,false]}],"syntax":false}}' placeholder='Text eingeben...' in-store="value" ></a17-wysiwyg><a17-singleselect label="Kartengrösse" :name="fieldName('size')" :options='[{&quot;value&quot;:&quot;small&quot;,&quot;label&quot;:&quot;Klein&quot;},{&quot;value&quot;:&quot;medium&quot;,&quot;label&quot;:&quot;Mittel&quot;},{&quot;value&quot;:&quot;large&quot;,&quot;label&quot;:&quot;Gross&quot;}]' :has-default-store="true" in-store="value" > </a17-singleselect><a17-textfield label="Yotube Link" :name="fieldName('url')" type="text" in-store="value" ></a17-textfield>
    </div>
</template>

<script>
  import BlockMixin from '@/mixins/block'

  export default {
    mixins: [BlockMixin]
  }
</script>
