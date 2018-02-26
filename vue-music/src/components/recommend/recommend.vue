<template>
    <div class="recommend">
        <div class="recommend-content">
            <!--确保slider渲染成功，加v-if，v-if成功之后进行渲染-->
            <div v-if="recommends.length" class="slider-wrapper">
                <div class="slider-content">
                    <slider>
                        <div v-for="(item, index) in recommends" :key="index">
                            <a :href="item.linkUrl">
                                <img :src="item.picUrl" alt="">
                            </a>
                        </div>
                    </slider>
                </div>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">热门歌单推荐</h1>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  components: {
    Slider
  },
  data() {
    return {
      recommends: []
    }
  },
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/main"
</style>