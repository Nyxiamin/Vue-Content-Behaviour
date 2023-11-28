
new Vue({
  el: '#app',
  data: {
    view: 'title',
    currentItemIndex: 0,
    items: data,
  },
  computed: {
    currentItem() {
      return this.items[this.currentItemIndex];
    }
  },
  methods: {
    toggleView() {
      this.view = (this.view === 'title') ? 'def' : 'title';
    },
    nextItem() {
      this.currentItemIndex = (this.currentItemIndex + 1) % this.items.length;
    },
    prevItem() {
      this.currentItemIndex = (this.currentItemIndex - 1 + this.items.length) % this.items.length;
    }
  }
});

// Project made by TB and MB for ILAC classes of Web Advanced Programming