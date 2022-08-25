const { createApp, ref } = Vue
const am = Vue.createApp({
    data() {
        return { msg: "Parent" }
    }
})
am.component("app-component", {
    template: `
    <div>
    <slot>Hiii ,stay here</slot>
    </div>`,
    data() {
    }
})
am.mount("#app")

const app = Vue.createApp({
    data() {
        return {
          ops:["header","body","footer"],
          slot_name:"header"
        }
    }
});

app.component('light-box', {
  template: `
  <div class="lightbox">
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container"  @click.self="toggleModal">

        <div class="modal-body">
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr>
          <main>
            <slot name="body">Default Body</slot>
          </main>
          <hr>
          <footer>
            <slot name="footer">Default Footer</slot>
          </footer>
        </div>

      </div>
    </div>

    <button @click="isShow = true">Click Me</button>
  </div>`,
  data: () => ({
    isShow: false
  }),
  computed: {
    modalStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    toggleModal() {
      this.isShow = !this.isShow;
    }
  }
});


app.mount('#app1');

const app2 = Vue.createApp({
  data: () => ({
    langOptions: [{
      name: '繁體中文',
      val: 'tw'
    },
    {
      name: '日本語',
      val: 'jp'
    },
    {
      name: 'English',
      val: 'en'
    },
    ],
    lang: 'tw'
  })
});

app2.component('light-box', {
  template: `
    <div class="lightbox">
    <teleport to="body">
      <div class="modal-mask" :style="modalStyle">
        <div class="modal-container" @click.self="toggleModal">
          <div class="modal-body">
            <main>
							<slot name="default"
              	v-bind:hello="helloString[lang]"></slot>
            </main>
          </div>
        </div>
      </div>
      </teleport>

      <button @click="isShow = true">Click Me</button>
    </div>`,
  props: {
    lang: {
      type: String,
      default: 'tw'
    }
  },
  data: () => ({
    helloString: {
      'tw': '哈囉！世界！',
      'jp': 'ハロー・ワールド!',
      'en': 'Hello world!'
    },
    isShow: false
  }),
  computed: {
    modalStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    toggleModal() {
      console.log('click')
      this.isShow = !this.isShow;
    }
  }
});
app2.mount('#app2');