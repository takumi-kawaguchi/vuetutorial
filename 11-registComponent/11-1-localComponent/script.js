var componentA = {
    props: ['value'],
    template: `
        <p>{{ value }}</p>
    `
}

new Vue({
    el: '#app',
    components: {
        'component-a': componentA
    },
    data: {
        test: 'testmessage'
    }
})