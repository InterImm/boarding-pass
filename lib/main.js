'use strict';


var app = new Vue({
  el: '#app',
  data: {
    from_body: 'Earth',
    to_body: 'Mars',
    options_en: [
        { text: 'Mercury', value: 'Mercury' },
        { text: 'Venus', value: 'Venus' },
        { text: 'Earth', value: 'Earth' },
        { text: 'Mars', value: 'Mars' },
        { text: 'Jupiter', value: 'Jupiter' },
        { text: 'Saturn', value: 'Saturn' },
        { text: 'Uranus', value: 'Uranus' },
        { text: 'Neptune', value: 'Neptune' }
      ],
    options_cn: [
        { text: '水星', value: 'Mercury' },
        { text: '金星', value: 'Venus' },
        { text: '地球', value: 'Earth' },
        { text: '火星', value: 'Mars' },
        { text: '木星', value: 'Jupiter' },
        { text: '土星', value: 'Saturn' },
        { text: '天王星', value: 'Uranus' },
        { text: '海王星', value: 'Neptune' }
      ],
    message: 'Mars',
    form: {
      'departureTime': new Date().toISOString().split("T")[0],
      'arrivalTime': new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      'name': 'Jane Doe',
      'name_cn': '小红',
      'ship': 'Renaissance',
      'ship_cn': '文艺复兴号',
      'fromCode': 'E-SH',
      'destinationCode': 'M-I',
      'deck': 'A',
      'room': 'A-10',
      'departureTerminal': 'T',
      'departurePlatform': '2',
      'ticketNumber': '12345'
    },
    timer: '',
  },
  methods: {

  },
  mounted: function () {
    this.form.ticketNumber = Math.floor(Math.random()*90000) + 10000
  },
  computed: {
    from_body_text_cn: function () {
      var arrayLength = this.options_cn.length;
      for (var i = 0; i < arrayLength; i++) {
        if (this.options_cn[i].value == this.from_body) {
          return this.options_cn[i].text
        }
      }
    },
    to_body_text_cn: function () {
      var arrayLength = this.options_cn.length;
      for (var i = 0; i < arrayLength; i++) {
        if (this.options_cn[i].value == this.to_body) {
          return this.options_cn[i].text
        }
      }
    },
    from_body_text_en: function () {
      var arrayLength = this.options_en.length;
      for (var i = 0; i < arrayLength; i++) {
        if (this.options_en[i].value == this.from_body) {
          return this.options_en[i].text
        }
      }
    },
    to_body_text_en: function () {
      var arrayLength = this.options_en.length;
      for (var i = 0; i < arrayLength; i++) {
        if (this.options_en[i].value == this.to_body) {
          return this.options_en[i].text
        }
      }
    },
    generate_link: function () {
      var base_url = '../app/index.html'
      var boarding_pass_params = '?from=' + this.from_body_text_en + '&destination=' + this.to_body_text_en + '&ship='+ this.form.ship + '&name='+this.form.name + '&departureTime='+this.form.departureTime + '&arrivalTime=' + this.form.arrivalTime + '&fromCode='+this.form.fromCode + '&destinationCode='+this.form.destinationCode + '&room='+this.form.room + '&deck=' + this.form.deck + '&departurePlatform=' + this.form.departurePlatform + '&departureTerminal=' + this.form.departureTerminal + '&ticketNumber=' + this.form.ticketNumber

      return base_url + boarding_pass_params
    },
    generate_link_cn: function () {
      var base_url = 'app/cn/index.html'
      var boarding_pass_params = '?from=' + this.from_body_text_cn + '&destination=' + this.to_body_text_cn + '&ship='+ this.form.ship_cn + '&name='+this.form.name_cn + '&departureTime='+this.form.departureTime + '&arrivalTime=' + this.form.arrivalTime + '&fromCode='+this.form.fromCode + '&destinationCode='+this.form.destinationCode + '&room='+this.form.room + '&deck=' + this.form.deck + '&departurePlatform=' + this.form.departurePlatform + '&departureTerminal=' + this.form.departureTerminal + '&ticketNumber=' + this.form.ticketNumber

      return base_url + boarding_pass_params
    }
  }
})