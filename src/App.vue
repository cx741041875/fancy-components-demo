<template>
  <!--
    fancy-components 的所有组件都是用 --width和--height这俩自定义css属性来控制宽高
    用--color这个自定义css属性来控制颜色
  -->
  <main>
    <!-- 苹果标 不写颜色默认填充黑色 -->
    <fc-wave-filter>
      <img src="@/assets/apple.svg">
    </fc-wave-filter>

    <hr>

    <!-- 华为标 -->
    <fc-wave-filter color="#dd1028">
      <img src="@/assets/huaWei.svg">
    </fc-wave-filter>

    <hr>

    <!-- Vue标 -->
    <fc-wave-filter color="#6ea">
      <img src="@/assets/vue.svg">
    </fc-wave-filter>

    <hr>

    <!-- 宝马标 图片填充模式 -->
    <fc-wave-filter mode="img">
      <img src="@/assets/bwm.svg">
    </fc-wave-filter>

    <hr>

    <!-- 宝马标 图片填充模式 (传入两张图) -->
    <fc-wave-filter mode="img">
      <!-- 第一张代表填充图 -->
      <img src="@/assets/bwm.svg">

      <!-- 第二张代表背景图 -->
      <img src="@/assets/bwm-gray.svg">
    </fc-wave-filter>

    <hr>

    <!-- 小魔女 图片填充模式 (传入两张图) -->
    <fc-wave-filter mode="img" style="--width: 300px">
      <!-- 第一张代表填充图 -->
      <img src="@/assets/magic-girl.png">

      <!-- 第二张代表背景图 -->
      <img src="@/assets/magic-girl-stroke.png">
    </fc-wave-filter>

    <hr>

    <!-- 七龙珠 幻灯片填充模式 -->
    <fc-wave-filter mode="slideshow" style="--width: 300px">
      <img src="@/assets/gouku.png">
      <img src="@/assets/freeza.png">
      <img src="@/assets/piclo.png">
    </fc-wave-filter>

    <!-- 其他实用组件 -->
    <ul>
      <li>
        <fc-dbl-warp-btn></fc-dbl-warp-btn>
      </li>
      <li>
        <fc-warp-btn></fc-warp-btn>
      </li>
      <li>
        <fc-3d-btn></fc-3d-btn>
      </li>
      <li>
        <fc-round-btn></fc-round-btn>
      </li>
      <li>
        <fc-underline-btn></fc-underline-btn>
      </li>
      <li>
        <fc-parenthesis-btn></fc-parenthesis-btn>
      </li>
      <li>
        <fc-pixel-btn></fc-pixel-btn>
      </li>
      <li>
        <fc-arrow-btn></fc-arrow-btn>
      </li>
      <li>
        点击有惊喜：
        <hr style="opacity: 0">

        <fc-bubbles click>
          <fc-arrow-btn></fc-arrow-btn>
        </fc-bubbles>

        <hr style="opacity: 0">

        <fc-bubbles click>
          <fc-parenthesis-btn></fc-parenthesis-btn>
        </fc-bubbles>

        <hr style="opacity: 0">

        <fc-bubbles click style="--color: #89f">
          <fc-3d-btn></fc-3d-btn>
        </fc-bubbles>

        <hr style="opacity: 0">

        <fc-bubbles click>
          666
        </fc-bubbles>
      </li>
      <li>
        <fc-typing-input placeholder="UserName"></fc-typing-input>
      </li>
      <li style="background: #3f2766">
        <fc-typing-input white placeholder="请输入密码" type="password"></fc-typing-input>
      </li>
      <li>
        <fc-bubbles click style="--color: red">
          <fc-underline-btn @click="restart" style="--color: red">重新运行</fc-underline-btn>
        </fc-bubbles>

        <hr style="opacity: 0">

        <fc-china v-if="showChina"></fc-china>
      </li>
    </ul>
  </main>
</template>

<script>
import {
  FcWaveFilter,
  FcDblWarpBtn,
  FcWarpBtn,
  Fc3DBtn,
  FcRoundBtn,
  FcParenthesisBtn,
  FcUnderlineBtn,
  FcPixelBtn,
  FcArrowBtn,
  FcBubbles,
  FcTypingInput,
  FcChina
} from 'fancy-components'

/* eslint-disable no-new */
new FcWaveFilter()
new FcDblWarpBtn()
new FcWarpBtn()
new Fc3DBtn()
new FcRoundBtn()
new FcParenthesisBtn()
new FcUnderlineBtn()
new FcPixelBtn()
new FcArrowBtn()
new FcBubbles()
new FcTypingInput()
new FcChina()

export default {
  data: () => ({ showChina: true }),
  methods: {
    restart () {
      this.showChina = !this.showChina
      this.$nextTick(() => { this.showChina = !this.showChina })
    }
  }
}
</script>

<style scoped>
fc-wave-filter {
  --width: 100px;
  margin: auto
}

li {
  display: grid;
  place-items: center;
  padding: 60px;
}
</style>
