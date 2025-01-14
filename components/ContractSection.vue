<template>
  <div class="flex justify-center items-center pt-[80px] pb-[16px] px-6 md:px-0 md:pt-[180px] md:pb-[108px]">
    <div class="flex flex-col items-center w-full sm:w-[632px] md:w-[852px] lg:w-[1014px] xl:w-[1280px]">
      <div class="mb-20 w-full font-bold text-[32px] leading-[130%] tracking-[-0.4px] sm:tracking-[-0.8px] sm:text-[50px] sm:leading-[72px] md:mb-[160px] md:text-center">
        <span class="text-primary">{{ $t("contract.title1") }}</span>{{ $t("contract.title2") }}
      </div>

      <div
        v-for="(item, index) in list"
        :key="index"
        class="flex flex-col w-full mb-[100px] md:mb-20 lg:mb-[84px]"
      >
        <div class="font-bold text-[22px] leading-[130%] tracking-[-0.4px] text-black/80 sm:text-2xl sm:leading-9 md:hidden">
          {{ item.title }}
        </div>

        <div :class="[
          'flex flex-col items-center mt-[52px] w-full md:justify-between md:mt-0',
          index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
        ]">
          <div class="flex justify-center w-full md:w-2/5">
            <video 
              ref="video"
              :style="videoStyle"
              :width="videoSize.width"
              :height="videoSize.height"
              loop 
              muted 
              playsinline
              preload="auto"
              autoplay
              :poster="item.animation.poster"
              :controls="platform !== 'iOS' ? false : !item.animation.removeController"
              @click="platform !== 'iOS' ? false : onClick(index)"
              @timeupdate="
                platform !== 'iOS' 
                  ? false 
                  : item.animation.removeController 
                    ? false
                    : onTimeupdate(index) 
              "
            >
              <source :src="item.animation.webm" type="video/webm">
              <source :src="item.animation.mp4" type="video/mp4">
            </video>
          </div>

          <div class="flex flex-col justify-center mt-[22px] w-full md:mt-0 md:w-2/5">
            <div 
              class="hidden w-[130%] font-semibold md:block md:text-2xl md:leading-8 lg:text-[26px] lg:leading-9 xl:text-[32px] xl:leading-[48px]"
            >{{ item.title }}
            </div>
            <div 
              :class="[
                'font-normal text-base leading-[34px] text-black/90 sm:text-lg sm:leading-[34px]',
                'md:mt-4 md:text-lg md:leading-7 lg:mt-6 lg:text-xl lg:leading-8 xl:text-[22px] xl:leading-[38px]',
                index % 2 === 0 ? 'md:w-[115%]' : 'md:w-[105%]'
              ]"
            >{{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMixinEnvironment, responsiveVideoSize } from "@/utils/index";
import contractAnimationMp4 from '@/assets/animations/contracts.mp4';
import contractAnimationWebm from '@/assets/animations/contracts.webm';
import contractImage from '@/assets/images/contracts.webp';
import assetsAnimationMp4 from '@/assets/animations/assets.mp4';
import assetsAnimationWebm from '@/assets/animations/assets.webm';  
import assetsImage from '@/assets/images/assets.webp';
import compatibleAnimationMp4 from '@/assets/animations/compatible.mp4';
import compatibleAnimationWebm from '@/assets/animations/compatible.webm';
import compatibleImage from '@/assets/images/compatible.webp';

if (process.client) {
  var platform = getMixinEnvironment();
  var videoSize = responsiveVideoSize();
}

export default {
  name: "ContractSection",
  data() {
    return {
      platform,
      videoSize: {
        width: 327,
        height: 263
      },
      list: [
        {
          animation: {
            mp4: contractAnimationMp4,
            webm: contractAnimationWebm,
            poster: contractImage,
            isPlayed: false,
            removeController: false
          },
          title: this.$t("contract.section1.title"),
          content: this.$t("contract.section1.content")
        },
        {
          animation: {
            mp4: assetsAnimationMp4,
            webm: assetsAnimationWebm,
            poster: assetsImage,
            isPlayed: false,
            removeController: false
          },
          title: this.$t("contract.section2.title"),
          content: this.$t("contract.section2.content")
        },
        {
          animation: {
            mp4: compatibleAnimationMp4,
            webm: compatibleAnimationWebm,
            poster: compatibleImage,
            isPlayed: false,
            removeController: false
          },
          title: this.$t("contract.section3.title"),
          content: this.$t("contract.section3.content")
        },
      ]
    }
  },
  methods: {
    onClick(i) {
      if (this.platform === 'iOS' && !this.list[i].animation.isPlayed) {
        this.list[i].animation.isPlayed = true;
      }
    },
    onTimeupdate(i) {
      if (this.platform === 'iOS' && this.list[i].animation.isPlayed) {
        this.list[i].animation.removeController = true;
      }
    },
  },
  mounted() {
    this.videoSize = videoSize;
  },
  computed: {
    videoStyle() {
      return {
        width: `${this.videoSize.width}px`,
        height: `${this.videoSize.height}px`
      }
    }
  }
}
</script>