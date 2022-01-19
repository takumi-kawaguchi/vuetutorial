Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

new Vue({
    el: '#datapass',
    data: {
        posts: [
            { id: 1, title: 'my vue' },
            { id: 2, title: 'dairy life' },
            { id: 3, title: 'dinner' }
        ]
    }
})