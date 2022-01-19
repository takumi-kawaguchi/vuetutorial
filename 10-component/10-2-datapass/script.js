Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

Vue.component('refactor-blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }} - {{ post.id }}</h3>
            <p v-html="post.content"></p>
        </div>
    `
})

Vue.component('childcomponent-blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text', 0.1)">enlarge text</button>
            <div v-html="post.content"></div>
        </div>
    `
})

new Vue({
    el: '#datapass',
    data: {
        posts: [
            { id: 1, title: 'my vue', content: 'vue is very good!' },
            { id: 2, title: 'dairy life', content: 'good day it was!' },
            { id: 3, title: 'dinner', content: 'yammy!' }
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount
            console.log(enlargeAmount)
        }
    }
})