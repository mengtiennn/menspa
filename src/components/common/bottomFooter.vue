<script setup>
import { ref, onMounted, watch, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const routerData = reactive([
  { linkName: '关于ＷＡＧ', link: '/about' },
  { linkName: '服务项目', link: '/service' },
  { linkName: '成功案例', link: '/example' },
  { linkName: '营销博客', link: '/blog' },
  { linkName: '招聘资讯', link: '/info' },
  { linkName: '联系我们', link: '/contact' }
])
const info = reactive([
  '美国电话 ❘ +1 929-545-4470', '邮箱 ❘ contact@wag.marketing', '微信 ❘ wagmarketing', '小红书 | WAG品牌营销'
])
const emailContent = ref('')

</script>
<template>
  <div
    class="bg-[#e6d4c6] w-full pt-[110px] pb-[26px] flex flex-col items-center gap-[96px] laptop:gap-[61px] tablet:gap-[61px] tablet:pt-[57px]">
    <div
      class="flex gap-[128px] justify-center items-start laptop:flex-col tablet:flex-col laptop:gap-[40px] tablet:gap-[20px] tablet:items-center">
      <div class="flex flex-col gap-[11px] tablet:items-center tablet:mb-[2rem] items-center">
        <img src="@/assets/img/logo.png" alt="logo" class="w-[118px] tablet:w-[126px] tablet:mb-[1rem]">
        <div class="w-[223px] text-center text-[15px] font-[400] text-[#323232] tracking-widest rublk">174-04 West 4th Street, New York, NY 10014</div>
      </div>
      <div class="flex flex-col gap-[24px] text-[#323232] text-center mt-[30px]">
        <span class="font-[500] text-[15px] tablet:text-[20px] tracking-widest rublk">HOURS</span>
        <div class="font-[300] text-[15px] tablet:text-[15px] tracking-widest rublk">Monday-Sunday<br/>10:00AM - 11:00PM
        </div>
      </div>
      <div class="flex flex-col items-center gap-[24px] text-[#323232] text-center tablet:gap-[1rem] mt-[30px]">
        <span class="font-[500] text-[15px] tablet:text-[20px] tracking-widest rublk">CONTACT</span>
        <div class="font-[300] text-[15px] tablet:text-[15px] tracking-widest rublk">(212) 337-8551 or  (212) 337-9880<br/>whynotmensspa551@gmail.com</div>
        <div class="flex gap-[10px] bigMobile:hidden">
          <img src="@/assets/icon/icon-ig.svg" alt="">
          <img src="@/assets/icon/icon-fb.svg" alt="">
          <img src="@/assets/icon/icon-google.svg" alt="">
          <img src="@/assets/icon/icon-yelp.svg" alt="">
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center gap-[9px] mobile:hidden">
      <div class="flex gap-[10px]">
        <img src="@/assets/icon/icon-ig.svg" alt="">
        <img src="@/assets/icon/icon-fb.svg" alt="">
        <img src="@/assets/icon/icon-google.svg" alt="">
        <img src="@/assets/icon/icon-yelp.svg" alt="">
      </div>
      <span
        class="text-[13px] font-[300] text-[#000000] laptop:text-center tablet:text-center tablet:text-[12px] tablet:mx-[10%] rublk tracking-widest whitespace-nowrap ">@2025
        Why Not Men’s Spa. All Rights Reserved.  x  WAG Marketing</span>
    </div>
    <div class="bigMobile:hidden text-center">
      <span
      class="text-[13px] font-[300] text-[#000000] bigMobile:hidden">@2025
      Why Not Men’s Spa. All Rights<br> Reserved.  x  WAG Marketing</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');

.teko {
  font-family: "Teko", sans-serif;
}

.noto {
  font-family: "Noto Sans", sans-serif;
}

.tea {
  font-family: "Teachers", sans-serif;
}

.pic {
  background-color: rgba(0, 0, 0, 0.7);
}

.p-example {
  &__body {
    background: #d4e735;
    overflow: hidden;
    color: #333;
  }

  &__splide {
    padding: 3rem 2rem;

    @media screen and (min-width: 768px) {
      padding: 4rem;
    }
  }
}
</style>
