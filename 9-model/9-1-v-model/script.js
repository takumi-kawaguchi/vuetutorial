var app = new Vue({
    el: '#app',
    data: {
        message: '',
        checked: true,
        checkedNames: [],
        picked: '',
        selected: '',
        multipleSelected: [],
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})