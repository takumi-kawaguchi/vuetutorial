var propTestComponent = {
    props: {
        title: String,
        pageNum: Number
    },
    template: `
        <div>
            <p>title: {{ title }}</p>
            <p>pageNum: {{ pageNum }}</p>
        </div>
    `
}

new Vue({
    el: '#app',
    components: {
        'prop-test-component': propTestComponent
    },
    data: {
        posts: [
            { title: 'test1', pageNum: 1 },
            { title: 'test2', pageNum: 2 }
        ]
    }
})