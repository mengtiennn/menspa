<script setup lang="ts">
import { ref, onMounted, watch, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const optionList = ref(['Home', 'About', 'Services', 'Gallery', 'Contact'])
const showHamburger = ref(false)
const menuShow = ref<boolean>(false)
const scrollTo = (id:string) => {
  if(menuShow.value){
    menuShow.value = false
  }
  const element = document.getElementById(id)
  showHamburger.value = false
  console.log(element)
  if(element){
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
const orderUrl = ref<string>('https://order.mealkeyway.com/customer/release/index?mid=45774946684268454942534476706e424837583342773d3d#/main')

const goUrl = (url?: string) => {
  if(!url){
    url = orderUrl.value
  }
  window.open(url, '_blank');
}
</script>
<template>
  <div
    class="flex bg-[#f0efec] pt-[22px] px-[20%] pb-[22px] justify-center items-center laptop:justify-center mobile:justify-center mobile:pt-[10px] mobile:pb-[10px] fixed top-0 left-0 z-50 w-full tablet:px-[5%]">
    <div class="flex justify-between items-center w-full gap-[5rem] max-w-[1200px]">
      <div class="w-full flex justify-between items-center gap-[5rem] tablet:justify-center">
        <div class="flex items-center cursor-pointer" @click="router.push('/')">
          <div class="whitespace-nowrap text-[24px] font-[400] tablet:text-[15px] mobile:hidden">Why Not Men’s Spa</div>
          <img src="@/assets/img/mobileLogo.png" alt="logo" class="w-[100px] bigMobile:hidden">
        </div>
        <div class="flex gap-[32px] text-black mobile:hidden text-[16px]">
          <div v-for="(link, idx) in optionList" :key="idx" @click="scrollTo(link)" class="cursor-pointer font-[400]">{{ link
            }}</div>
        </div>
      </div>
    </div>
    <!-- <img src="@/assets/img/menu.svg" class="absolute top-[16px] right-4 cursor-pointer bigMobile:hidden mac:hidden tablet:hidden" @click="showHamburger = true"> -->
    <img src="@/assets/img/menuWhite.svg" class="absolute right-4 cursor-pointer bigMobile:hidden mac:hidden laptop:top-[20%]"
      @click="showHamburger = true">
  </div>
  <Transition name="slide-fade">
    <div class="w-full h-full fixed top-0 left-0 bg-white z-50 flex items-center pt-[75px] flex-col"
      v-if="showHamburger">
      <img src="@/assets/icon/close.svg" class="fixed top-[16px] right-4 cursor-pointer bigMobile:hidden"
        @click="showHamburger = false">
      <div class="flex gap-[24px] text-text-black flex-col items-center">
        <div v-for="(link, idx) in optionList" :key="idx" @click="scrollTo(link)" class="cursor-pointer">{{ link }}
        </div>
      </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap');

.teko {
  font-family: "Teko", sans-serif;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
