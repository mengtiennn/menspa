<template>
  <div class="desktop:pt-[76px] tablet:pt-[76px]">
    <div id="Home" class="h-[710px] mac:h-[667px] relative mac:pt-[72px] tablet:pt-[0px] tablet:h-full">
      <div class="w-full h-full">
        <img class="w-full h-full object-cover object-top" src="@/assets/img/banner.png" alt="">
        <div
          class="w-[50%] absolute text-white left-[calc(50vw-25%)] top-[calc(50%-150px)] flex flex-col items-center tablet:left-0 tablet:top-[10%]">
          <div class="text-[28px] font-[400] tablet:w-[80%] tablet:text-center tablet:text-[32px] w-fit rublk">
            Why Not Men’s Spa</div>
          <div class="flex flex-col text-center w-fit items-center mt-[24px]">
            <div class="text-[40px] font-[300] tablet:text-[14px] w-fit rublk text-[#ebebeb]">RECHARGE YOUR SPIRIT WITH</div>
            <div class="text-[40px] font-[300] tablet:text-[14px] w-fit rublk text-[#ebebeb]">MASSAGE AND SPA.</div>
          </div>
          <div class="desktop:hidden mac:hidden laptop:hidden w-[1px] h-[67px] bg-white my-[1.2rem]" />
          <div
            class="border-white border-[1px] border-solid px-[22px] text-[20px] py-[7px] font-[400] my-[1rem] text-white w-max cursor-pointer mobile:py-[8px] rublk rounded-[20px]">
            <a :href="'tel:646-379-9995'">Call now: (212) 337-8551</a>
          </div>
          <div class="w-full flex justify-between items-center mt-[140px]">
            <div class="flex flex-col justify-center items-center text-[16px] font-[300] mac:text-[1rem]">
              <div class="rublk tracking-widest text-[#ebebeb]">174-04 West 4th Street, NY</div>
            </div>
            <div class="flex flex-col justify-center items-center text-[16px] font-[300] mac:text-[1rem]">
              <div class="rublk tracking-widest text-[#ebebeb]">whynotmensspa551@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="About" class="px-[10%] bg-[#f0efec] flex py-[6rem] justify-evenly tablet:py-[109px] mac:py-[8rem]">
      <div class="w-full flex flex-col gap-[1rem] items-center tablet:hidden">
        <div class="text-[15px] text-[#CF6F00] rublk">TREATMENTS • SERVICES</div>
        <div class="text-[36px] playwriteUSModern">Best Spa Near You!</div>
        <div class="w-[60%] flex flex-col gap-[1rem]">
          <div class="rublk text-[#636262] text-center">
            Here at Why Not Man’s Spa we specialize in providing therapeutic massage for men at an affordable price. We
            are client focused and make sure to always keep you feeling healthy and relaxed after each therapy. We
            believe massage therapy is an extremely important aspect of a healthy living, it will help you maintain a
            healthy body and can even heal injury or chronic pain. Some of the services we offer are body massages,
            waxing & trimming, manicure & pedicure and facial treatment. All the services that we offer have health
            benefits that will lead you to living a happier and healthier life, we also make it mandatory to use clean
            and anti-allergic products.
          </div>
          <div class="rublk text-[#636262] mt-[16px] text-center">
            Through our site you can find some of our best sales and deals that we have to offer. You will also be able
            to view our services in more detail with all the benefits of each service listed, you can also order a gift
            card from us, or check out our amazing gallery and get to know our Spa before you even arrive. We have the
            best rates and are located in the heart of New York’s West Village. Visit us at 174 – 04 West 4th Street
            Between 6 and 7 Ave near by, 6th Ave, New York, NY 10014, or give us a call at (212) 337-8551 and start your
            journey towards living a calmer, relaxed life free of stress.
          </div>
        </div>
      </div>
    </div>
    <div id="Contact"
      class="bg-[url('@/assets/img/contactBg.png')] h-[279px] bg-cover flex justify-evenly items-center px-[10%]">
      <div class="flex flex-col items-center gap-[8px] h-[100px]">
        <div class="text-[18px] font-[500]">Address</div>
        <div class="flex flex-col justify-center items-center">
          <div>174 – 04 West 4th Street</div>
          <div>Between 6 and 7 Ave near by,</div>
          <div>6th Ave, New York, NY 10014</div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-[8px] h-[100px]">
        <div class="text-[18px] font-[500]">Contact</div>
        <div class="flex flex-col justify-center items-center">
          <div>(212) 337-8551 or  (212) 337-9880</div>
          <div>whynotmensspa551@gmail.com</div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-[8px] h-[100px]">
        <div class="text-[18px] font-[500]">Business Hours</div>
        <div class="flex flex-col justify-center items-center">
          <div>Monday - Sunday </div>
          <div>10AM - 11PM</div>
        </div>
      </div>
    </div>
    <!-- SERVICES & PRICES -->
    <div class="w-full flex flex-col items-center mt-[132px] mb-[112px]">
      <div class="flex flex-col items-center">
        <span class="text-[15px] font-[600] rublk text-[#CF6F00]">SERVICES & PRICES</span>
        <span class="text-[36px] font-[400] playwriteUSModern">Ready to Relax?</span>
      </div>
      <div class="mt-[57px] flex flex-col gap-[62px]">
        <div class="flex gap-[40px] items-center">
          <img src="@/assets/img/s1.png" alt="" class="w-[289px]">
          <div class="w-[493px] bg-[#FBFAF8] rounded-[27px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25] py-[24px] px-[47px]">
            <span class="rublk text-[24px] font-[500] leading-[43.2px] text-[#404040]">Body Massage</span>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262]">
              We provide professional body massage, reflexology, Swedish massage and hot stone massage. There are
              various health benefits to regular massage treatment, such as; decreased pain, increase in blood flow,
              less anxiety, reduce stress, decrease muscle tension and much more. 
            </div>
            <div class="rublk text-[15px] font-[500] leading-[17.78px] text-[#464646] mt-[8px]">Price</div>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262]">
              30min – $45&nbsp&nbsp&nbsp&nbsp&nbsp45min – $60&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp60min – $70<br />90min
              – $105&nbsp&nbsp&nbsp120min
              – $125
            </div>
            <div class="mt-[13px] Rubik text-[15px] font-[400] leading-[24px] text-[#636262]">$65/60min massage with
              Free Hot stone
              massage<br />(Original rate: $70)</div>
          </div>
        </div>
        <div class="flex gap-[40px] items-center">
          <div class="w-[493px] bg-[#FBFAF8] rounded-[27px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25] py-[24px] px-[47px]">
            <span class="rublk text-[24px] font-[500] leading-[43.2px] text-[#404040]">Waxing & Trimming</span>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262]">
              Our waxing services will keep you well groomed while feeling clean and smooth. We can provide waxing and
              trimming for your face, chest, back, arms or legs. We also use waxing devices with good anti-allergy
              products.
            </div>
            <div class="rublk text-[15px] font-[500] leading-[17.78px] text-[#464646] mt-[8px]">Price</div>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262] flex gap-[20px]">
              <div>
                Eyebrows – $15<br />Full arm – $55 ($30)<br />Half arm – $30 ($15)<br />Under arm – $25 ($15)<br />Full
                leg
                – $68
                ($40)<br />Upper leg – $45 ($30)<br />Lower leg – $35 ($20)<br />Buttocks – $58 ($35)
              </div>
              <div>
                Neck – $15 ($10)<br />Back – $35 ($20)<br />Shoulder – $15 ($10)<br />Chest – $35 ($20)<br />Stomach
                – $30
                ($20)<br />Bikini –
                $35 ($20)<br />Brazilian Bikini – $85 ($50)<br />Full body – $199 ($130)
              </div>
            </div>
          </div>
          <img src="@/assets/img/s2.png" alt="" class="w-[289px]">
        </div>
        <div class="flex gap-[40px] items-center">
          <img src="@/assets/img/s3.png" alt="" class="w-[289px]">
          <div class="w-[493px] bg-[#FBFAF8] rounded-[27px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25] py-[24px] px-[47px]">
            <span class="rublk text-[24px] font-[500] leading-[43.2px] text-[#404040]">Facial Treatment</span>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262]">
              We use luxury skincare products and professional beauty devices in order to exfoliate and clean the face.
              We also provide face massages and use facial masks to achieve a smooth, clean feeling.
            </div>
            <div class="rublk text-[15px] font-[500] leading-[17.78px] text-[#464646] mt-[8px]">Price - Facials</div>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262] flex gap-[20px] mt-[2px]">
              70min – $148&nbsp&nbsp&nbsp&nbsp80min – $168
            </div>
            <div class="rublk text-[15px] font-[500] leading-[17.78px] text-[#464646] mt-[8px]">Price - Moisture
              Facial</div>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262] flex gap-[20px] mt-[2px]">
              30min – $68&nbsp&nbsp&nbsp&nbsp70min – $168<br />50min – $108&nbsp&nbsp&nbsp&nbsp80min – $168
            </div>
          </div>
        </div>
        <div class="flex gap-[40px] items-center">
          <div class="w-[493px] bg-[#FBFAF8] rounded-[27px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25] py-[24px] px-[47px]">
            <span class="rublk text-[24px] font-[500] leading-[43.2px] text-[#404040]">Manicure & Pedicure</span>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262]">
              Get a sophisticated look with our professional nail services. Keep those nails clean and avoid all the
              discomforts and bacteria that can come from poor nail care. All of our manicure and pedicure services
              include bathing and hydration.
            </div>
            <div class="rublk text-[15px] font-[500] leading-[17.78px] text-[#464646] mt-[8px]">Price</div>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262] flex gap-[20px] mt-[2px]">
              Manicure – $15&nbsp&nbsp&nbsp&nbspWhy Not Manicure – $28<br />Pedicure – $32&nbsp&nbsp&nbsp&nbspWhy Not
              Pedicure – $52
            </div>
          </div>
          <img src="@/assets/img/s4.png" alt="" class="w-[289px]">
        </div>
        <div class="flex gap-[40px] items-center">
          <img src="@/assets/img/s5.png" alt="" class="w-[289px]">
          <div class="w-[493px] bg-[#FBFAF8] rounded-[27px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25] py-[24px] px-[47px]">
            <span class="rublk text-[24px] font-[500] leading-[43.2px] text-[#404040]">Body Scrubbing</span>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262]">
              We provide body scrubbing which will make your skin look more vibrant and youthful. Body scrubs help
              remove dead skin cells, boosts circulation and helps increase your nymph nodes. The refreshing texture
              against your skin will also have you feeling amazing, an experience that will boost your mood as you
              continue your day or evening.
            </div>
            <div class="rublk text-[15px] font-[500] leading-[17.78px] text-[#464646] mt-[8px]">Price</div>
            <div class="rublk text-[15px] font-[400] leading-[24px] text-[#636262] flex gap-[20px] mt-[2px]">
              60min – $95
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- email -->
    <div class="flex h-[234px]">
      <div class="w-[35%] h-full"><img class="object-cover w-full h-full" src="@/assets/img/email.png" alt=""></div>
      <div class="bg-[#E6D4C6] w-[65%] flex flex-col justify-center items-center">
        <div class="rublk font-[500] text-[24px]">Subscribe for Exclusive Updates and Offers!</div>
        <div class="mt-4">
          <el-input v-model="emailInput" style="width: 505px" placeholder="Email" class="input-with-select text-[18px]">
            <template #append>
              <img src="@/assets/img/search.svg" alt="">
            </template>
          </el-input>
        </div>
      </div>
    </div>
    <!-- Better Prices -->
    <div class="w-full flex justify-center gap-[240px] mt-[161px] items-end mb-[199px]">
      <div class="relative">
        <img src="@/assets/img/sale1.png" alt="" class="w-[354px]">
        <img src="@/assets/img/sale2.png" alt="" class="w-[238px] absolute top-[92px] right-[-194px]">
      </div>
      <div class="flex flex-col items-center">
        <span class="text-[#CF6F00] rublk font-[600] text-[24px] leading-[28.44px]">Better Prices</span>
        <div class="playwriteUSModern font-[400] text-[36px] text-center leading-[49.47px] rublk">Promotion Package
          <br />&<br />
          Big Sale!
        </div>
        <div class="bg-[#F9F9F9] py-[28px] px-[63px] rounded-[27px] mt-[42px] relative">
          <img src="@/assets/img/sale3.png" alt="" class="w-[82px] absolute left-[-20px] top-[-40px]">
          <div class="rublk text-[24px] font-[300] leading-[32.52px] rublk">
            <span class="text-[#CF0000] text-[36px] font-[500] leading-[55.8px] rublk">50% off</span>all facial
            treatments
          </div>
          <div class="rublk text-[24px] font-[300] leading-[37.2px] rublk">
            <span class="text-[#CF0000] text-[32px] font-[500] leading-[49.6px] rublk">10% off</span>all waxing services
          </div>
          <div class="text-[#404040] font-[300] text-[16px] leading-[24.8px] rublk">
            <span class="text-[#404040] font-[500] text-[16px] leading-[24.8px] rublk">$25 - </span>30 min reflexology
          </div>
          <div class="text-[#404040] font-[300] text-[16px] leading-[24.8px] rublk">
            <span class="text-[#404040] font-[500] text-[16px] leading-[24.8px] rublk">$35 - </span>Manicure + Pedicure
          </div>
          <div class="text-[#404040] font-[300] text-[16px] leading-[24.8px] rublk">
            <span class="text-[#404040] font-[500] text-[16px] leading-[24.8px] rublk">$40 - </span>30 min massage
          </div>
          <div class="text-[#404040] font-[300] text-[16px] leading-[24.8px] rublk">
            <span class="text-[#404040] font-[500] text-[16px] leading-[24.8px] rublk">$60 - </span>60 min massage
          </div>
          <div class="text-[#404040] font-[300] text-[16px] leading-[24.8px] rublk">
            <span class="text-[#404040] font-[500] text-[16px] leading-[24.8px] rublk">$95 - </span>Manicure + Pedicure
            + 60
            min massage
          </div>
          <div class="text-[#404040] font-[300] text-[16px] leading-[24.8px] rublk">
            <span class="text-[#404040] font-[500] text-[16px] leading-[24.8px] rublk">$125 - </span>60 min massage +
            Facial
          </div>
          <div class="text-[#404040] font-[300] text-[16px] leading-[24.8px] rublk">
            <span class="text-[#404040] font-[500] text-[16px] leading-[24.8px] rublk">$155 - </span>Manicure + Pedicure
            + 60
            min massage + Facial
          </div>
        </div>
      </div>
    </div>
    <!-- 八張圖片區 -->
    <div class="w-full px-[32px] flex flex-wrap justify-center mb-[199px]">
      <img v-for="p in 8" :src="getAssetsImgFile('e', `e${p}.png`)" alt="" class="object-contain w-[343px]">
    </div>
  </div>
  <div
    class="w-[53px] h-[53px] bg-[#D9D9D9] rounded-full fixed bottom-[24px] right-[20px] flex justify-center items-center">
    <img src="@/assets/icon/arrow.svg" alt="arrow" class="w-[40px] rotate-90" @click="goToTop()">
  </div>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[1000]" v-if="showBigPhoto">
    <div class="w-full h-full pic absolute left-0 top-0 z-10" @click="showBigPhoto = false"></div>
    <div class="absolute right-10 top-5 text-xl font-semibold z-20 text-white cursor-pointer"
      @click="showBigPhoto = false">
      <img src="@/assets/icon/closewhite.svg" alt="">
    </div>
    <img src="@/assets/img/ca.png"
      class="rotate-180 w-[50px] absolute top-[50%] left-[20%] translate-y-[-50%] cursor-pointer tablet:left-0 z-20"
      @click="changePicIndex('back')">
    <img :src="nowPic"
      class="h-[80vh] object-contain absolute left-[50%] translate-x-[-50%] z-20 tablet:w-[70vw] tablet:h-auto">
    <img src="@/assets/img/ca.png"
      class="w-[50px] absolute top-[50%] right-[20%] translate-y-[-50%] cursor-pointer tablet:right-0 z-20"
      @click="changePicIndex('go')">
  </div>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center pic z-[1000]" v-if="showBigPhoto2">
    <div class="w-full h-full pic absolute left-0 top-0 z-10" @click="showBigPhoto2 = false"></div>
    <div class="absolute right-10 top-5 text-xl font-semibold z-20 text-white cursor-pointer"
      @click="showBigPhoto2 = false">
      <img src="@/assets/icon/closewhite.svg" alt="">
    </div>
    <img src="@/assets/img/ca.png"
      class="rotate-180 w-[50px] absolute top-[50%] left-[20%] translate-y-[-50%] cursor-pointer tablet:left-0 z-20"
      @click="changePicIndex2('back')">
    <img :src="nowPic2"
      class="h-[80vh] object-contain absolute left-[50%] translate-x-[-50%] z-20 tablet:w-[70vw] tablet:h-auto">
    <img src="@/assets/img/ca.png"
      class="w-[50px] absolute top-[50%] right-[20%] translate-y-[-50%] cursor-pointer tablet:right-0 z-20"
      @click="changePicIndex2('go')">
  </div>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { ref, computed, onMounted } from 'vue'
import { getAssetsImgFile, getAssetsImg } from '../utils/commonUse'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const content = ref(null)
const menu1List = ref(['COFFEE', 'SPECIALTY LATTE', 'FRIZZY SPARKLING & SLUSH', 'FRESH FRUIT  TEA'])
const menu2List = ref(['SPECIAL SMOOTHIE', 'LEMONADE', 'FOOD'])
const orderUrl = ref('https://order.mealkeyway.com/customer/release/index?mid=45774946684268454942534476706e424837583342773d3d#/main')

const goUrl = (url) => {
  if(!url){
    url = orderUrl.value
  }
  window.open(url, '_blank');
}

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
const showBigPhoto = ref(false)
const showBigPhoto2 = ref(false)
const nowIndex = ref(0)
const nowPic = computed(() => {
  return getAssetsImgFile('r', `r${nowIndex.value}.png`)
})
const nowIndex2 = ref(0)
const nowPic2 = computed(() => {
  return getAssetsImgFile('d', `d${nowIndex2.value}.png`)
})
const show = (type, idx) => {
  showBigPhoto.value = true
  nowIndex.value = idx
}
const show2 = (type, idx) => {
  console.log(idx)
  showBigPhoto2.value = true
  nowIndex2.value = idx
}
const changePicIndex = (type) => {
  if (nowIndex.value == 9 && type == 'go') {
    nowIndex.value = 1
    return
  } else if ((nowIndex.value == 1 || nowIndex.value == 0) && type == 'back') {
    console.log('yoyoy', nowIndex.value)
    nowIndex.value = 9
    return
  }
  type == 'back' ? nowIndex.value -= 1 : nowIndex.value += 1
}
const changePicIndex2 = (type) => {
  if (nowIndex2.value == 9 && type == 'go') {
    nowIndex2.value = 1
    return
  } else if ((nowIndex2.value == 1 || nowIndex2.value == 0) && type == 'back') {
    console.log('yoyoy', nowIndex2.value)
    nowIndex2.value = 9
    return
  }
  type == 'back' ? nowIndex2.value -= 1 : nowIndex2.value += 1
}
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1290: {
    itemsToShow: 6,
    snapAlign: 'start',
  },
}

// import '@splidejs/splide/dist/css/splide.min.css'
// import Splide from '@splidejs/splide'
// import { Grid } from '@splidejs/splide-extension-grid'


const emailInput = ref('')
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      btnDis.value = true
      const mailData = {
        Name: tableForm.name,
        email: tableForm.email,
        message: tableForm.message,
      }
      emailjs.send('service_dmyuq3x', 'template_wpc6tuk', mailData, 'Gj4qVySalyOlMjmDT').then(() => {
        tableForm.name = ''
        tableForm.email = ''
        tableForm.message = ''
        btnDis.value = false
        successMes()
      })
      return true
    } else {
      return false
    }
  })
} 
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap');
.teko {
  font-family: "Teko", sans-serif;
}
.noto{
  font-family: "Noto Sans", sans-serif;
}
.tea{
  font-family: "Teachers", sans-serif;
}
.pic {
  background-color: rgba(0, 0, 0, 0.7);
}
.rublk{
  font-family: "Rublk", sans-serif;
}
.playwriteUSModern{
  font-family: "PlaywriteUSModern", sans-serif;
}

:deep(.splide__arrow--prev) {
  transform: translate(-50px, -30px);
  width: 41px;
  height: 41px;
  background-image: url(@/assets/img/ev.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;

  >svg {
    display: none;
  }
}

:deep(.splide__arrow--next) {
  transform: translate(50px, -30px);
  width: 41px;
  height: 41px;
  background-image: url(@/assets/img/ev2.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;

  >svg {
    display: none;
  }
}

:deep(.carousel__next) {
  transform: translate(50px, -30px);
  width: 41px;
  height: 41px;
  background-image: url(@/assets/img/ev2.svg);
  background-repeat: no-repeat;
  background-size: contain;

  .carousel__icon {
    display: none;
  }
}

:deep(.carousel__prev) {
  transform: translate(-50px, -30px);
  width: 41px;
  height: 41px;
  background-image: url(@/assets/img/ev.svg);
  background-repeat: no-repeat;
  background-size: contain;

  .carousel__icon {
    display: none;
  }
}

:deep(.carousel__pagination) {
  .carousel__pagination-item {
    .carousel__pagination-button {
      &::after {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
    }
  }
}

// .p-splide {
//   &__slide {
//     position: relative;
//     color: #fff;
//     border-radius: .5rem;
//     border: 3px solid #eef5ae;
//     background: #dceb5d;
//     overflow: hidden;
//     line-height: 1.5;
//     transition: border-color .15s cubic-bezier(.54, .01, .1, 1), background-color .15s cubic-bezier(.54, .01, .1, 1);
//   }

//   &__slide-number {
//     position: absolute;
//     bottom: .15em;
//     left: .5rem;
//     font-family: 'Lato', sans-serif;
//     font-size: 1.7rem;
//     line-height: .75;
//     font-weight: bold;

//     @media screen and (min-width: 768px) {
//       left: 1rem;
//       font-size: 3.2rem;
//     }
//   }
// }

// .splide {
//   &__slide {
//     &.is-active {
//       .p-splide__slide {
//         background: #13c59d;
//         border-color: #13c59d;
//       }
//     }
//   }

//   &__pagination {
//     bottom: -2.3rem;
//     left: 50%;
//     transform: translateX(-50%);

//     &__page {
//       padding: 0;
//       width: 10px;
//       height: 10px;
//       border-radius: 50%;
//       background: #93a313;
//       margin: .4em;
//       cursor: pointer;
//       display: block;
//     }
//   }
// }
:deep(.el-input-group__append){
  background: transparent;
  border: 2px solid black;
  cursor: pointer;
}
:deep(.el-input__wrapper){
  background: transparent;
  border: 2px solid black;
  border-right: 1px;
}
</style>