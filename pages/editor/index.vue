<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="tag"
                  class="form-control"
                  placeholder="Enter tags"
                  @keydown.enter="onEnter"
                />
                <div class="tag-list">
                  <span v-for="(item, index) in article.tagList" :key="item">
                    {{ item }}
                    <span v-if="index !== article.tagList.length - 1">,</span>
                  </span>
                </div>
              </fieldset>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary">Publish Article</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'

export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',
  data() {
    return {
      article: {
        tagList: [],
        title: '',
        description: '',
        body: ''
      },
      tag: ''
    }
  },
  methods: {
    onEnter() {
      this.article.tagList.push(`${this.tag}`)
      console.log(this.article.tagList)
      this.tag = ''
    },
    async onSubmit() {
      try {
        const data = await getArticles({ article: this.article })
      } catch (e) {}
    }
  }
}
</script>

<style></style>
