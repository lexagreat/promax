<template>
   <main class="main">

      <div class="breadcrumbs">
         <div class="container">
            <div class="breadcrumbs__inner">
               <NuxtLink to="#" class="breadcrumbs__item">Паркет</NuxtLink>
               <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
               <NuxtLink to="#" class="breadcrumbs__item">Паркет с рисунками</NuxtLink>
               <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
               <span class="breadcrumbs__item">Рисунки карандашом «Print»</span>
            </div>
         </div>
      </div>

      <div class="singleprod">
         <div class="container">
            <div class="singleprod__inner">
               <div class="singleprod-first">

                  <div class="singleprod-char__title-mob">Рисунки карандашом «Print»</div>

                  <SectionsProductSlider />

                  <div class="singleprod-char">
                     <h1 class="singleprod-char__title">Рисунки карандашом «Print»</h1>
                     <div class="singleprod-char__list">
                        <div class="singleprod-char__list-item">
                           <span>Код товара</span>
                           <span>12345</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Бренд</span>
                           <span>Panaget</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Страна бренда</span>
                           <span>Франция</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Страна производства</span>
                           <span>Франция</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Артикул</span>
                           <span>1010101</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Коллекция</span>
                           <span>Panaget Monolame</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Порода дерева</span>
                           <span>Дуб</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Селекция</span>
                           <span>Натур</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Длина доски</span>
                           <span>800 / 1200 / 1500 мм</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Полосность</span>
                           <span>однополосный</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Твёрдость по Бринеллю</span>
                           <span>3.7</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Длина</span>
                           <span>1210 мм</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Ширина</span>
                           <span>139 мм</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Толщина</span>
                           <span>12 мм</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Толщина верхнего слоя</span>
                           <span>2.5 мм</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Площадь упаковки</span>
                           <span>1.85 м2</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Досок в упаковке</span>
                           <span>11 шт</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Вес упаковки</span>
                           <span>18.3 кг</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Покрытие</span>
                           <span>ультраматовый лак</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Фаска</span>
                           <span>2v</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Тип соединения</span>
                           <span>замок Unifit</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Совместимость с теплым полом</span>
                           <span>да</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Гарантия</span>
                           <span>30 лет</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Акция</span>
                           <span>распродажа остатков</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Класс пожарной опасности</span>
                           <span>КМ5</span>
                        </div>
                        <div class="singleprod-char__list-item">
                           <span>Способ укладки (рекомендация) </span>
                           <span></span>
                        </div>
                     </div>
                  </div>
                  <div class="singleprod-bar">
                     <form class="singleprod-bar__item">
                        <div class="singleprod-bar__price">
                           <div class="singleprod__tag">Тренд 2024</div>
                           <div class="singleprod__issample">
                              <span class="i-issample-yellow"></span>
                              <span class="singleprod__issample-text">есть образец</span>
                           </div>
                           <div class="singleprod-bar__price-text">Цена:</div>
                           <div class="singleprod__regular-price"><span>7 500</span><span>руб. за м²</span></div>
                           <div class="singleprod-bar__price-text">Цена за упаковку:</div>
                           <div class="singleprod__pack-price"><span>7 500</span><span>руб. за уп.</span></div>

                           <div class="products__item-bottom-frst">
                              <div class="products__item-addtocart-btn" @click="isPopupOpen = true"><span
                                    class="i-addtocart"></span><span class="products__item-addtocart-btn-txt">В
                                    корзину</span>
                              </div>
                              <div class="products__item-wishlist-btn"><span class="i-wishlist-disabled"></span>
                              </div>
                           </div>

                           <div class="singleprod-info">
                              <div class="singleprod-info__item"><b>Наличие:</b><span>наличие по запросу</span></div>
                              <div class="singleprod-info__item"><b>Самовывоз в СПБ:</b><span>по запросу</span></div>
                              <div class="singleprod-info__item"><b>Доставка по СПБ:</b><span>по запросу</span></div>
                           </div>

                        </div>
                     </form>
                     <form class="singleprod-bar__item">
                        <div class="singleprod-bar__calc">
                           <div class="singleprod-bar__calc-title">Калькулятор:</div>
                           <div class="singleprod-bar__calc-sizes">
                              <div class="singleprod-bar__calc__item">
                                 <span class="singleprod-bar__calc__item-lbl">Ширина (м):</span>
                                 <input class="singleprod-bar__calc__item-width" name="width" type="number" value="10">
                              </div>
                              <div class="singleprod-bar__calc__item">
                                 <span class="singleprod-bar__calc__item-lbl">Длина (м):</span>
                                 <input class="singleprod-bar__calc__item-length" name="length" type="number"
                                    value="10">
                              </div>
                           </div>
                           <div class="singleprod-bar__calc-or">или</div>
                           <div class="singleprod-bar__calc-square">
                              <div class="singleprod-bar__calc__item">
                                 <span class="singleprod-bar__calc__item-lbl">Площадь (м²):</span>
                                 <input class="singleprod-bar__calc__item-square" name="square" type="number"
                                    value="10">
                              </div>
                           </div>
                           <div class="singleprod-bar__calc-percents">
                              <label for="radio-percent-1" class="singleprod-bar__calc-percents-item">
                                 <input type="radio" name="radio-percent" id="radio-percent-1" checked>
                                 <span class="singleprod-bar__calc-percents-item-icon"></span>
                                 <span class="singleprod-bar__calc-percents-item-txt">+0%</span>
                              </label>
                              <label for="radio-percent-2" class="singleprod-bar__calc-percents-item">
                                 <input type="radio" name="radio-percent" id="radio-percent-2">
                                 <span class="singleprod-bar__calc-percents-item-icon"></span>
                                 <span class="singleprod-bar__calc-percents-item-txt">+5%</span>
                              </label>
                              <label for="radio-percent-3" class="singleprod-bar__calc-percents-item">
                                 <input type="radio" name="radio-percent" id="radio-percent-3">
                                 <span class="singleprod-bar__calc-percents-item-icon"></span>
                                 <span class="singleprod-bar__calc-percents-item-txt">+10%</span>
                              </label>
                           </div>
                           <div class="singleprod-bar__calc-out">
                              <div class="singleprod-bar__calc-out-item">
                                 <div class="singleprod-bar__calc-out-item-lbl">Ваша площадь:</div>
                                 <div class="singleprod-bar__calc-out-item-val"><span
                                       class="out_square_1">1</span><span>м²</span></div>
                              </div>
                              <div class="singleprod-bar__calc-out-item">
                                 <div class="singleprod-bar__calc-out-item-lbl">
                                    Ваша площадь <span><b>+</b> <span class="out_percents">0</span><b>%:</b></span>
                                 </div>
                                 <div class="singleprod-bar__calc-out-item-val"><span
                                       class="out_square_2">1</span><span>м²</span></div>
                              </div>
                              <div class="singleprod-bar__calc-out-item">
                                 <div class="singleprod-bar__calc-out-item-lbl">Количество упаковок:</div>
                                 <div class="singleprod-bar__calc-out-item-val"><span
                                       class="out_pack_count_1">1</span><span>уп.</span></div>
                              </div>
                              <div class="singleprod-bar__calc-out-item">
                                 <div class="singleprod-bar__calc-out-item-lbl">Рекомендуем приобрести:</div>
                                 <div class="singleprod-bar__calc-out-item-val">
                                    <span class="out_pack_count_2">2</span><span>уп.</span> <span
                                       class="singleprod-gray">(2 м²)</span>
                                 </div>
                              </div>
                           </div>
                           <div class="singleprod-bar__calc-out-price"><span>7 500</span> <span>руб.</span></div>
                           <div class="products__item-bottom-frst">
                              <div class="products__item-addtocart-btn" @click="isPopupOpen = true"><span
                                    class="i-addtocart"></span><span class="products__item-addtocart-btn-txt">В
                                    корзину</span>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div class="singleprod-second">
                  <div class="singleprod-tabs">
                     <div class="singleprod-tabs__ctrl">
                        <div class="singleprod-tabs__ctrl-item _active">Описание</div>
                        <div class="singleprod-tabs__ctrl-item">Способ для укладки</div>
                        <div class="singleprod-tabs__ctrl-item">Паркетная химия</div>
                     </div>
                     <div class="singleprod-tabs__out">
                        <div class="singleprod-tabs__out-item _active">
                           <p>
                              Современный художественный паркет, созданный по уникальной инновационной технологии.
                              Для обработки дерева и создания дизайна используется ручной труд и эксклюзивное
                              оборудование.
                           </p>
                           <p>
                              Печать — это высокотехнологичный способ изготовления дизайнерского паркета. Изображения
                              наносятся специальными чернилами, безопасными для здоровья и окружающей среды.
                           </p>
                           <p>
                              Финишное покрытие: 2-х компонентное масло или 2-х компонентный лак.
                           </p>
                           <p>
                              Соединение: шип-паз.
                           </p>
                           <p>
                              Толщина ценного слоя: 4 мм.
                           </p>
                           <p>
                              Основание доски: 11 мм березовая влагостойкая фанера.
                           </p>
                           <p>
                              Виды сортировок: <br>
                              Рустик — допускаются светлые и темные сучки выпавшие, шпаклеванные, диаметром не более 60
                              мм,
                              наклон волокон, прожилки, небольшие трещины усушки, заделанные шпаклевкой под цвет
                              древесины
                              и не портящие внешнего вида паркетных планок. Изменения окраски древесины, заболонь в виде
                              полосы шириной до 20 мм. <br>
                              Натур — классический сорт паркета без отбора по распилу, обладающий натуральным рисунком
                              древесины. Перепад по тону допускается. Возможны живые — не выпавшие сучки диаметром
                              не более
                              20 мм. <br>
                              Прайм — паркет высшего сорта тангенциального и смешанного распила, натуральный и ровный
                              рисунок дерева. Заболони, сучки, пороки древесины и любые механические повреждения
                              не допускаются.
                           </p>
                        </div>
                        <div class="singleprod-tabs__out-item">
                           <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe velit mollitia blanditiis
                              ducimus ullam autem, deleniti exercitationem. Facere ad eum id sint, architecto quisquam
                              quam, tempore in delectus, rerum quo.
                           </p>
                        </div>
                        <div class="singleprod-tabs__out-item">
                           <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe velit mollitia blanditiis
                              ducimus ullam autem, deleniti exercitationem. Facere ad eum id sint, architecto quisquam
                              quam, tempore in delectus, rerum quo.
                           </p>
                           <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe velit mollitia blanditiis
                              ducimus ullam autem, deleniti exercitationem. Facere ad eum id sint, architecto quisquam
                              quam, tempore in delectus, rerum quo.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>


      <PopupsCart :isOpen="isPopupOpen" @closePopup="isPopupOpen = false" />
   </main>
</template>
<script setup>
const isPopupOpen = ref(false)
</script>