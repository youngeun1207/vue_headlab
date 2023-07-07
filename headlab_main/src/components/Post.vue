<template>
    <div class="post-menu">
        <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-image"></label>
    </div>
    <input placeholder="제목" class="post-title" @input="title = $event.target.value"/>
    <div id="editor">
        <textarea placeholder="마크다운 문법으로 작성하세요." :value="input" @input="update"></textarea>
        <div id="preview" v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import { marked } from 'marked'
export default {
    name: 'PostVue',
    data() {
        return {
            title: '',
            input: '',
            url: ''
        }
    },
    computed: {
        compiledMarkdown() {
            return marked(this.input, { sanitize: true });
        },
        preview(){
            return document.getElementById("preview"); 
        }
    },
    methods: {
        update(event) {
            this.input = event.target.value;
            this.preview.scrollTop = this.preview.scrollHeight;
        },
        upload(event){
            const img_file = event.target.files;
            this.url = URL.createObjectURL(img_file[0]);
            this.input+=`![](${this.url})`;
        }
    }
}
</script>

<style>
.post-title{
    width: 100%;
    padding: 1% 2%;
    font-size: 20px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
}
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}
#editor img {
    max-width: 80%;
}
#editor:after {
    content:'';
    display:block;
    clear:both;
}

textarea,
#editor div {
  display: inline-block;
  width: 50%;
  height: 70vh;
  vertical-align: top;
  box-sizing: border-box;
  padding: 1% 2%;
  overflow: scroll;
  word-wrap:break-word;
  border-left: 1px solid #ccc;
}

textarea {
  border: none;
  outline: none;
  resize: none;
  /* resize: vertical; */
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 2%;
  width: 50%;
}
.post-menu{
    width: 100%;
    border-bottom: 1px solid #ccc;
}
.inputfile {
  display: none;
}
.input-image {
  cursor: pointer;
  background-image: url('../assets/img/upload_img.png');
  width: 30px;
  height: 30px;
  display: block;
  background-size: 100%;
  margin: 0.5% 1%;
  box-sizing: border-box;
}

code {
  color: #f66;
}
</style>