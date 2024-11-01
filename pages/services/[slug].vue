<template>
   <main class="main">
      <div class="singleserv">
         <div class="singleserv__inner">
            <h1>{{ data.title }}</h1>
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
                              <img src="@/assets/img/ourserv/singleserv__pop1.svg"
                                 alt="Укладка паркетной и инженерной доски">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка паркетной и инженерной доски
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop2.svg"
                                 alt="Укладка художественного паркета">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка художественного паркета
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop3.svg" alt="Укладка французской елочки">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка французской елочки
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop4.svg" alt="Укладка модульного паркета">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка модульного паркета
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop5.svg"
                                 alt="Укладка паркета в ванных комнатах">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка паркета в ванных комнатах
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop6.svg" alt="Укладка штучного паркета">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка штучного паркета
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>

            <div class="singleserv__price">
               <div class="container">
                  <div class="singleserv__price-inner">
                     <h2 class="singleserv__price-label">Цены и услуги на укладку паркета в Санкт-Петербурге</h2>
                     <div class="singleserv__price-table">
                        <div class="singleserv__price-table-header">
                           <div class="singleserv__price-table-serv">УКЛАДКА НАПОЛЬНОГО ПОКРЫТИЯ</div>
                           <div class="singleserv__price-table-price">РУБ@/М2 </div>
                        </div>
                        <div class="singleserv__price-table-body">

                           <div class="singleserv__price-table-item singleserv__price_btn">
                              <div class="singleserv__price-table-serv">Настил паркетной доски и ламината на подложку
                                 перпендикулярно к стене</div>
                              <div class="singleserv__price-table-icon-wrp">
                                 <div class="singleserv__price-table-price">650</div>
                                 <button class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                       class="i-singleserv-arrow"></span>
                                 </button>
                              </div>
                           </div>
                           <div class="singleserv__price-table-item singleserv__price_btn">
                              <div class="singleserv__price-table-serv">Настил паркетной доски и ламината на подложку
                                 под углом к стене</div>
                              <div class="singleserv__price-table-icon-wrp">
                                 <div class="singleserv__price-table-price">750</div>
                                 <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                       class="i-singleserv-arrow"></span>
                                 </div>
                              </div>
                           </div>
                           <div class="singleserv__price-table-item singleserv__price_btn">
                              <div class="singleserv__price-table-serv">Настил паркетной доски /инженерной доски на клей
                                 к основанию</div>
                              <div class="singleserv__price-table-icon-wrp">
                                 <div class="singleserv__price-table-price">1150</div>
                                 <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                       class="i-singleserv-arrow"></span>
                                 </div>
                              </div>
                           </div>
                           <div class="singleserv__price-table-item singleserv__price_btn">
                              <div class="singleserv__price-table-serv">Настил штучного паркета «елка», «разбежка»,
                                 «шашка»</div>
                              <div class="singleserv__price-table-icon-wrp">
                                 <div class="singleserv__price-table-price">1300</div>
                                 <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                       class="i-singleserv-arrow"></span>
                                 </div>
                              </div>
                           </div>
                           <div class="singleserv__price-table-item singleserv__price_btn">
                              <div class="singleserv__price-table-serv">Настил массивной доски на клей</div>
                              <div class="singleserv__price-table-icon-wrp">
                                 <div class="singleserv__price-table-price">1300</div>
                                 <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                       class="i-singleserv-arrow"></span>
                                 </div>
                              </div>
                           </div>
                           <div class="singleserv__price-table-item singleserv__price_btn">
                              <div class="singleserv__price-table-serv">Настил модульного паркета</div>
                              <div class="singleserv__price-table-icon-wrp">
                                 <div class="singleserv__price-table-price">1500</div>
                                 <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                       class="i-singleserv-arrow"></span>
                                 </div>
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
                                 <strong>Не нашли интересующую Вас услугу?</strong><br>
                                 Просмотрите полный список цен на работы
                              </div>
                              <div class="foundserv-btn">Подробнее</div>
                           </div>
                        </div>
                     </div>

                     <div class="singleserv__price-text">
                        <div class="singleart">
                           <p>Перед настилом деревянных полов необходимо тщательно подготовить основание. Если оно у вас
                              еще не готово, то рекомендуем вызвать технолога для консультации на объекте по тел: +7
                              (812) 409-93-20. Предварительно вы можете ознакомиться с требованиями для подготовки
                              основания в <NuxtLink to="#">нашей статье.</NuxtLink>
                           </p>
                           <p>
                              <img src="@/assets/img/ourserv/single-ourserv-1.png" alt="single-ourserv-1"
                                 class="float_left">
                              Современные тенденции таковы, что петербуржцы все чаще покупают себе в квартиры паркетные
                              и инженерные доски. Причем доска уже приходит обработанной защитным лаком или маслом с
                              завода, и нет никакой необходимости шлифовать и покрывать паркет на месте. Количество
                              цветовых решений и отделок просто громадное, каждый сможет найти себе пол по вкусу.
                              Укладывать такие покрытия можно прямо на стяжку, используя эластичные полиуретановые
                              <NuxtLink href="#">клеи</NuxtLink>.
                           </p>
                           <p>
                              <img src="@/assets/img/ourserv/single-ourserv-2.png" alt="single-ourserv-2"
                                 class="float_right">
                              Но, несмотря на то, что доля штучного и массивного паркета на рынке значительно
                              сократилась, ценители все же остаются. Массивные полы являются самыми долговечными
                              благодаря своей толщине.<br><br>
                              Массивная доска сможет прослужить долго, если за ней правильно ухаживать. Обычно при
                              циклёвке снимается пара миллиметров верхнего слоя. Если выполнять циклёвку паркета раз в
                              10 лет, то можно с уверенностью сказать, что массивной доски стандартных размеров хватит
                              на 1 век.
                           </p>
                           <p>
                              <img src="@/assets/img/ourserv/single-ourserv-3.png" alt="single-ourserv-3"
                                 class="float_left">
                              Французская елочка всегда была и остается очень популярным напольным покрытием. Этот
                              рисунок смотрится выигрышно практически в любом интерьере. Поэтому его часто применяют
                              дизайнеры в своих проектах.<br><br>
                              Можно сказать, что в Санкт-Петербурге сейчас наблюдается устойчивый тренд на укладку
                              французской ёлки: 3 из 5 укладок относится именно к этому типу паркета.
                           </p>
                           <p>
                              <img src="@/assets/img/ourserv/single-ourserv-4.png" alt="single-ourserv-4"
                                 class="float_right">
                              Мы реализовали множество проектов, где паркет укладывался в ванные комнаты. Деревянный пол
                              даже без обогрева будет всегда теплым под ногами, а специальная технология укладки сделает
                              его водостойким и надежным в эксплуатации. Покрываются такие полы только маслом, от это
                              ходить по нему вдвойне приятнее.<br><br>
                              Чаще других в ванную укладывают тик, т.к. паркет из тика достаточно устойчив к высокому
                              уровню влажности.
                           </p>
                           <p>
                              ООО «Паркет Промакс» предоставляет <b>гарантийный срок – 2 года</b>, а в течение которого
                              Вы можете обратиться к нашим специалистам по всем возникающим вопросам и устранить
                              возможные дефекты бесплатно.
                           </p>
                        </div>
                     </div>

                  </div>
               </div>
            </div>


         </div>
      </div>
      <TgExperts />

   </main>
   <PopupsService :isOpen="isPopupOpen" @closePopup="isPopupOpen = false" />
</template>
<script setup>
const isPopupOpen = ref(false)
let route = useRoute()
let slug = route.params.slug


let data = await useBaseFetch(`/blog/service/${slug}`)
console.log(data);
</script>