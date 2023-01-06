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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
