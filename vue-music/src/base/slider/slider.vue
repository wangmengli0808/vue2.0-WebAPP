<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot>
            </slot>
        </div>
        <div class="dots">
            <!--<span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>-->
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'

export default {
  props: {
    loop: {
      type: Boolean, // 是否可以轮播
      default: true
    },
    autoPlay: {
      type: Boolean, // 自动轮播
      default: true
    },
    interval: {
      type: Number, // 自动轮播间隔时间
      default: 4000 // 4秒
    }
  },
  mounted() {
    setTimeout(() => {
      this._setSliderWidth()
      this._initSlider()
    }, 20)
  },
  methods: {
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children
      console.log(this.children.length)

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')

        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }

      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider() { // 初始化轮播图
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/main"
</style>