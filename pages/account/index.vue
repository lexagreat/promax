<template>
   <main class="main">
      <div class="accountb">
         <div class="container">
            <div class="accountb__inner">
               <h1 class="accountb__title">Личный кабинет</h1>
               <div class="accountb-main">
                  <div class="accountb-main__first">
                     <div class="accountb-main__photo">
                        <img src="@/assets/img/acc-photo-def.svg" :alt="name">
                     </div>
                     <div class="accountb-main__name">
                        {{ name }}
                     </div>
                  </div>
                  <div class="accountb-main__second">
                     <div class="accountb-main__second-header">
                        <div class="accountb-main__second-title">Учётные данные</div>
                        <div class="accountb-main__second-edit">Изменить профиль</div>
                        <button @click.prevent="onLogout" class="accountb-main__second-exit">Выйти</button>
                     </div>
                     <form class="accountb-main__second-body">
                        <div class="accountb-main__second-item">
                           <div class="accountb-main__second-item-lbl">ФИО</div>
                           <div class="accountb-main__second-item-val">
                              <input type="text" name="prof-name" id="prof-name" v-model="name" readonly>
                           </div>
                        </div>
                        <div class="accountb-main__second-item">
                           <div class="accountb-main__second-item-lbl">Телефон</div>
                           <div class="accountb-main__second-item-val">
                              <input type="text" name="prof-phone" id="prof-phone" v-model="phone" readonly>
                           </div>
                        </div>
                        <div class="accountb-main__second-item">
                           <div class="accountb-main__second-item-lbl">Почта</div>
                           <div class="accountb-main__second-item-val">
                              <input type="text" name="prof-mail" id="prof-mail" v-model="email" readonly>
                           </div>
                        </div>
                        <div class="accountb-main__second-item">
                           <!-- <div class="accountb-main__second-item-lbl">Почта</div> -->
                           <div class="accountb-main__second-item-val">
                              <input type="submit" name="prof-save" id="prof-save" class="_btn" value="Сохранить">
                           </div>
                        </div>
                     </form>
                  </div>
                  <div class="accountb-main__second-mob">
                     <div class="accountb-main__second-edit">Изменить профиль</div>
                     <button @click.prevent="onLogout" class="accountb-main__second-exit">Выйти</button>
                  </div>
               </div>
            </div>
         </div>
         <div class="accountb-tabs-wrap">
            <div class="container">
               <div class="accountb-tabs">
                  <div class="accountb-tabs-header">
                     <div class="accountb-tabs-header__item tab-referral">
                        Реферальная программа
                     </div>
                     <div class="accountb-tabs-header__item tab-wishlist _active">
                        Избранное
                     </div>
                     <div class="accountb-tabs-header__item tab-orders">
                        Мои заказы
                     </div>
                  </div>
                  <div class="accountb-tabs-body">
                     <div class="accountb-tabs-body__item body-referral">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     </div>
                     <div class="accountb-tabs-body__item body-wishlist _active">
                        <div class="prodtabs__main products products_ld_4">
                           <!-- <CardsProduct v-for="(item, index) in 6" :key="index" :id="'accountpageitem' + index" /> -->

                        </div>
                     </div>
                     <div class="accountb-tabs-body__item body-orders">
                        <div class="body-orders__list">

                           <div class="body-orders__item">
                              <div class="body-orders__item-header">
                                 <div class="body-orders__item-date">Заказ от 1 июля</div>
                                 <div class="body-orders__item-params"><span>6 уп.</span><span>10 м²</span></div>
                                 <div class="body-orders__item-price"><span>120 000</span> <span>₽</span></div>
                              </div>
                              <div class="body-orders__item-body">
                                 <div class="body-orders__item-img">
                                    <img src="@/assets/img/orders-img.png" alt="Рисунки карандашом «Print»">
                                 </div>
                                 <div class="body-orders__item-title">
                                    <div class="body-orders__item-title-first">Дизайнерский паркет</div>
                                    <h2 class="body-orders__item-title-second">Рисунки карандашом «Print»</h2>
                                 </div>
                              </div>
                           </div>
                           <div class="body-orders__item">
                              <div class="body-orders__item-header">
                                 <div class="body-orders__item-date">Заказ от 1 июля</div>
                                 <div class="body-orders__item-params"><span>6 уп.</span><span>10 м²</span></div>
                                 <div class="body-orders__item-price"><span>120 000</span> <span>₽</span></div>
                              </div>
                              <div class="body-orders__item-body">
                                 <div class="body-orders__item-img">
                                    <img src="@/assets/img/orders-img.png" alt="Рисунки карандашом «Print»">
                                 </div>
                                 <div class="body-orders__item-title">
                                    <div class="body-orders__item-title-first">Дизайнерский паркет</div>
                                    <h2 class="body-orders__item-title-second">Рисунки карандашом «Print»</h2>
                                 </div>
                              </div>
                           </div>
                           <div class="body-orders__item">
                              <div class="body-orders__item-header">
                                 <div class="body-orders__item-date">Заказ от 1 июля</div>
                                 <div class="body-orders__item-params"><span>6 уп.</span><span>10 м²</span></div>
                                 <div class="body-orders__item-price"><span>120 000</span> <span>₽</span></div>
                              </div>
                              <div class="body-orders__item-body">
                                 <div class="body-orders__item-img">
                                    <img src="@/assets/img/orders-img.png" alt="Рисунки карандашом «Print»">
                                 </div>
                                 <div class="body-orders__item-title">
                                    <div class="body-orders__item-title-first">Дизайнерский паркет</div>
                                    <h2 class="body-orders__item-title-second">Рисунки карандашом «Print»</h2>
                                 </div>
                              </div>
                           </div>
                           <div class="body-orders__item">
                              <div class="body-orders__item-header">
                                 <div class="body-orders__item-date">Заказ от 1 июля</div>
                                 <div class="body-orders__item-params"><span>6 уп.</span><span>10 м²</span></div>
                                 <div class="body-orders__item-price"><span>120 000</span> <span>₽</span></div>
                              </div>
                              <div class="body-orders__item-body">
                                 <div class="body-orders__item-img">
                                    <img src="@/assets/img/orders-img.png" alt="Рисунки карандашом «Print»">
                                 </div>
                                 <div class="body-orders__item-title">
                                    <div class="body-orders__item-title-first">Дизайнерский паркет</div>
                                    <h2 class="body-orders__item-title-second">Рисунки карандашом «Print»</h2>
                                 </div>
                              </div>
                           </div>


                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>
<script setup>
import { useAccountStore } from '~/store/accountStore';
let store = useAccountStore()
const router = useRouter()

const email = ref("")
const phone = ref("")
const name = ref("")
onMounted(async () => {
   makeAccountEditing()
   console.log(store.isLogin);
   if (!store.isLogin) {
      router.push("/")
   } else {
      let data = await store.getInfoAboutMe()
      console.log("data", data);
      email.value = data.email
      phone.value = data.phone_number
   }
})
const onLogout = () => {
   store.logout()
   router.push("/")
}
</script>