<template>
    <!-- eslint-disable -->
    <div class="block__body">
        <a17-textfield label="Titel" :name="fieldName('title')" type="text" :maxlength="100" in-store="value" ></a17-textfield><a17-wysiwyg label="Text auf Karte" :name="fieldName('card_text')" :options='{"modules":{"toolbar":["bold","italic","underline",{"list":"ordered"},{"list":"bullet"},"link",{"align":[]},{"header":[2,3,false]}],"syntax":false}}' placeholder='Kurzer Text, sollte nicht zu lang sein' in-store="value" ></a17-wysiwyg><a17-wysiwyg label="Ausführlicher Text" :name="fieldName('long_text')" :options='{"modules":{"toolbar":["bold","italic","underline",{"list":"ordered"},{"list":"bullet"},"link",{"align":[]},{"header":[2,3,false]}],"syntax":false}}' placeholder='Wenn der Text auf der Karte nicht ausreicht, hier noch der ausführliche Text' in-store="value" ></a17-wysiwyg><a17-singleselect label="Ausrichtung des Bildes" :name="fieldName('alignment')" :options='[{&quot;value&quot;:&quot;left&quot;,&quot;label&quot;:&quot;Links&quot;},{&quot;value&quot;:&quot;right&quot;,&quot;label&quot;:&quot;Rechts&quot;}]' :has-default-store="true" in-store="value" > </a17-singleselect><a17-textfield label="Yotube Link" :name="fieldName('url')" type="text" in-store="value" ></a17-textfield>
    </div>
</template>

<script>
  import BlockMixin from '@/mixins/block'

  export default {
    mixins: [BlockMixin]
  }
</script>
