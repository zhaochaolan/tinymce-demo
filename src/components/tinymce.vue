<template>
  <div class="hello">
    <editor id="tinymce" v-model="tinymceHtml" :init="einit"></editor>
    <div v-html="tinymceHtml"></div>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import "tinymce/models/dom";
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/icons/default';

//配置富文本
import "tinymce/themes/silver/theme";

export default {
  name: 'HelloWorld',
  components:{ Editor },
  props: {
    msg: String
  },
  data () {
    return{
      tinymceHtml:'请输入内容',
      einit: {
        selector:'#tinymce',
        skin_url:require("@/assets/skins/ui/oxide/skin.min.css"),
        language_url:require("@/assets/langs/zh-Hans"),
        language:"zh-Hans",
        height:300,
        branding: false,
      }
    }
  },
  mounted() {
    tinymce.init({})
  }
}
</script>