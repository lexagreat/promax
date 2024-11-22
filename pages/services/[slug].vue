<template>
  <main class="main">
    <div class="singleserv">
      <div class="singleserv__inner">
        <h1 class="singleserv__title">{{ data.title }}</h1>
        <div class="singleserv__desc">
          {{ data.subtitle }}
        </div>

        <div class="singleserv__pop-wrp">
          <div class="container">
            <div class="singleserv__pop">
              <div class="singleserv__pop-label">
                <b>Самые популярные</b> укладки деревянных напольных покрытий:
              </div>
              <div class="singleserv__pop-list">
                <div class="singleserv__pop-item _active">
                  <div class="singleserv__pop-item-img">
                    <img
                      src="@/assets/img/ourserv/singleserv__pop1.svg"
                      alt="Укладка паркетной и инженерной доски"
                    />
                  </div>
                  <div class="singleserv__pop-item-txt">Укладка паркетной и инженерной доски</div>
                </div>
                <div class="singleserv__pop-item">
                  <div class="singleserv__pop-item-img">
                    <img
                      src="@/assets/img/ourserv/singleserv__pop2.svg"
                      alt="Укладка художественного паркета"
                    />
                  </div>
                  <div class="singleserv__pop-item-txt">Укладка художественного паркета</div>
                </div>
                <div class="singleserv__pop-item">
                  <div class="singleserv__pop-item-img">
                    <img
                      src="@/assets/img/ourserv/singleserv__pop3.svg"
                      alt="Укладка французской елочки"
                    />
                  </div>
                  <div class="singleserv__pop-item-txt">Укладка французской елочки</div>
                </div>
                <div class="singleserv__pop-item">
                  <div class="singleserv__pop-item-img">
                    <img
                      src="@/assets/img/ourserv/singleserv__pop4.svg"
                      alt="Укладка модульного паркета"
                    />
                  </div>
                  <div class="singleserv__pop-item-txt">Укладка модульного паркета</div>
                </div>
                <div class="singleserv__pop-item">
                  <div class="singleserv__pop-item-img">
                    <img
                      src="@/assets/img/ourserv/singleserv__pop5.svg"
                      alt="Укладка паркета в ванных комнатах"
                    />
                  </div>
                  <div class="singleserv__pop-item-txt">Укладка паркета в ванных комнатах</div>
                </div>
                <div class="singleserv__pop-item">
                  <div class="singleserv__pop-item-img">
                    <img
                      src="@/assets/img/ourserv/singleserv__pop6.svg"
                      alt="Укладка штучного паркета"
                    />
                  </div>
                  <div class="singleserv__pop-item-txt">Укладка штучного паркета</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="singleserv__price">
          <div class="container">
            <div class="singleserv__price-inner">
              <h2 class="singleserv__price-label">
                {{ data.title }}
              </h2>
              <div class="singleserv__price-table">
                <div class="singleserv__price-table-header">
                  <div class="singleserv__price-table-serv">{{ data.prices.title }}</div>
                  <div class="singleserv__price-table-price">РУБ@/М2</div>
                </div>
                <div class="singleserv__price-table-body">
                  <div
                    class="singleserv__price-table-item singleserv__price_btn"
                    v-for="item in data.prices.items"
                    :key="item"
                  >
                    <div class="singleserv__price-table-serv">{{ item.name }}</div>
                    <div class="singleserv__price-table-icon-wrp">
                      <div class="singleserv__price-table-price">{{ item.price }}</div>
                      <button
                        class="singleserv__price-table-icon"
                        @click="openPopup(data.id, item.id)"
                      >
                        <span class="i-singleserv-arrow"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="singleserv__price-foundserv">
                <div class="foundserv">
                  <div class="foundserv-icon">
                    <span class="i-q-search"></span>
                  </div>
                  <div class="foundserv__inner">
                    <div class="foundserv-desc">
                      <strong>Не нашли интересующую Вас услугу?</strong><br />
                      Просмотрите полный список цен на работы
                    </div>
                    <NuxtLink
                      to="/prices"
                      class="foundserv-btn"
                      >Подробнее</NuxtLink
                    >
                  </div>
                </div>
              </div>

              <div class="singleserv__price-text">
                <div class="singleart">
                  <div class="singleart__inner">
                    <div
                      v-for="item in data.blocks"
                      :key="item"
                      class="p"
                    >
                      <div>
                        <h2 v-if="item.title">{{ item.title }}</h2>
                        <p>{{ item.text }}</p>
                      </div>
                      <img
                        v-if="item.image"
                        :src="item.image"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TgExperts />
  </main>
  <PopupsService
    :serviceId="serviceId"
    :priceId="priceId"
    :isOpen="isPopupOpen"
    @closePopup="isPopupOpen = false"
  />
</template>
<script setup>
import { ref } from 'vue'

const isPopupOpen = ref(false)
let route = useRoute()
let slug = route.params.slug

let data = await useBaseFetch(`/blog/service/${slug}`)

const serviceId = ref(0)
const priceId = ref(0)

function openPopup(serviceID, priceID) {
  serviceId.value = serviceID
  priceId.value = priceID
  isPopupOpen.value = true
}
</script>
<style lang="scss" scoped>
.singleserv__title {
  font-size: 30px;
  font-weight: 700;
  line-height: 43.35px;
}

.singleserv__price-label {
  font-size: 40px;
  font-weight: 600;
  line-height: 44px;
}

@media (max-width: 1470px) {
  .singleserv__price-label {
    font-size: 17px;
    text-align: center;
    line-height: 19px;
  }
}
</style>
