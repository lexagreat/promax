<template>
   <main class="main">
      <div class="breadcrumbs">
         <div class="container">
            <div class="breadcrumbs__inner">
               <NuxtLink to="#" class="breadcrumbs__item">Паркет</NuxtLink>
               <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
               <span class="breadcrumbs__item">Паркет с рисунками</span>
            </div>
         </div>
      </div>

      <div class="filterblock">
         <div class="container">
            <div class="filterblock__inner">
               <div class="filterbar">

                  <!-- probably AJAX form (output in .filterout) -->
                  <form id="filterbar">

                     <div class="filterbar__all-btn-mob-wrap">
                        <div class="filterbar__all-btn-mob-count"><span>1</span></div>
                        <div class="filterbar__all-btn-mob-lbl">Фильтры</div>
                        <div class="filterbar__all-btn-mob-icon"><span class="i-mob-filter"></span></div>
                     </div>

                     <div class="filterbar__inner">
                        <div class="filterbar__param_1">
                           <ul>
                              <li>
                                 <span data-cat-name="categoriya">Категория</span>
                                 <ul>
                                    <li>
                                       <span data-cat-name="parket">Паркет</span>
                                       <ul>
                                          <li><span data-cat-name="parketnaya-doska">Паркетная доска</span></li>
                                          <li><span>Инженерная доска</span></li>
                                          <li><span>Шпонированные полы</span></li>
                                          <li><span>Паркет Елочка Фр</span></li>
                                          <li><span>Паркет елочка английская</span></li>
                                          <li><span>Паркет Ромбы</span></li>
                                          <li><span>Массивная доска</span></li>
                                          <li><span>Паркет для ванной комнаты</span></li>
                                          <li><span>Модульный паркет</span></li>
                                          <li><span>Геометрический паркет</span></li>
                                          <li><span>Паркет с рисунками</span></li>
                                          <li><span>Паркет с гравировкой/печатью</span></li>
                                          <li><span>Торцевой паркет</span></li>
                                          <li><span>Индустриальный паркет</span></li>
                                          <li><span>Штучный паркет</span></li>
                                          <li><span>Спортивный паркет</span></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <span>SPC / ПВХ</span>
                                       <ul>
                                          <li><span>Индустриальный паркет</span></li>
                                          <li><span>Штучный паркет</span></li>
                                          <li><span>Спортивный паркет</span></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <span>Ламинат</span>
                                       <ul>
                                          <li><span>Модульный паркет</span></li>
                                          <li><span>Геометрический паркет</span></li>
                                          <li><span>Паркет с рисунками</span></li>
                                          <li><span>Паркет с гравировкой/печатью</span></li>
                                          <li><span>Торцевой паркет</span></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <span>Пробковые покрытия</span>
                                       <ul>
                                          <li><span>Паркет елочка английская</span></li>
                                          <li><span>Паркет Ромбы</span></li>
                                          <li><span>Массивная доска</span></li>
                                          <li><span>Паркет для ванной комнаты</span></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <span>Стеновые панели</span>
                                       <ul>
                                          <li><span>Паркет Елочка Фр</span></li>
                                          <li><span>Паркет елочка английская</span></li>
                                          <li><span>Паркет Ромбы</span></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <span>Плинтуса и пороги</span>
                                       <ul>
                                          <li><span>Массивная доска</span></li>
                                          <li><span>Паркет для ванной комнаты</span></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <span>Химия (масла и краски)</span>
                                       <ul>
                                          <li><span>Массивная доска</span></li>
                                          <li><span>Спортивный паркет</span></li>
                                       </ul>
                                    </li>
                                    <li><span>Терраса и Фасады</span></li>
                                    <li><span>Сопутствующие материалы</span></li>
                                    <li>
                                       <span>Абразивы</span>
                                       <ul>
                                          <li><span>Модульный паркет</span></li>
                                          <li><span>Геометрический паркет</span></li>
                                          <li><span>Паркет с рисунками</span></li>
                                          <li><span>Паркет с гравировкой/печатью</span></li>
                                          <li><span>Торцевой паркет</span></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                        <div class="filterbar__param_2">
                           <label class="_active" for="trend">
                              <input type="checkbox" name="trend" id="trend" checked>
                              <div class="filterbar__checkbox-input"><span></span></div>
                              <div class="filterbar__label">Тренд 2024</div>
                           </label>
                           <label for="hitsales">
                              <input type="checkbox" name="hitsales" id="hitsales">
                              <div class="filterbar__checkbox-input"><span></span></div>
                              <div class="filterbar__label">Хит продаж</div>
                           </label>
                           <label for="bestoffer">
                              <input type="checkbox" name="bestoffer" id="bestoffer">
                              <div class="filterbar__checkbox-input"><span></span></div>
                              <div class="filterbar__label">Лучшее предложение</div>
                           </label>
                        </div>
                        <div class="filterbar__param_3">
                           <div class="price">
                              <div class="filterbar-block">
                                 <div class="filterbar__title">
                                    <span class="filterbar__title-name">Цена</span>
                                    <span class="filterbar__info">
                                       <span class="i-info"></span>
                                       <span>Какая-то информация о цене</span>
                                    </span>
                                 </div>
                                 <div class="filterbar-block__range">
                                    <div class="filterbar-block__range-input"></div>
                                    <div class="filterbar-block__range-num">
                                       <div class="filterbar-block__range-num-from">
                                          <span>от</span>
                                          <input class="filterbar__param_3_min" type="number" value="100" data-min="100"
                                             name="price-from">
                                       </div>
                                       <div class="filterbar-block__range-num-to">
                                          <span>до</span>
                                          <input class="filterbar__param_3_max" type="number" value="10000"
                                             data-max="10000" name="price-to">
                                       </div>
                                    </div>
                                    <div class="filterbar-block__range-radio">
                                       <label for="price-radio-1" class="filterbar-block__range-radio-item">
                                          <input type="radio" name="price-radio" id="price-radio-1" value="0-1000">
                                          <div class="filterbar-block__radio-input"><span></span></div>
                                          <div class="filterbar-block__label">до 1000 ₽</div>
                                       </label>
                                       <label for="price-radio-2" class="filterbar-block__range-radio-item">
                                          <input type="radio" name="price-radio" id="price-radio-2" value="1000-2000">
                                          <div class="filterbar-block__radio-input"><span></span></div>
                                          <div class="filterbar-block__label">1 000 – 2 000 ₽</div>
                                       </label>
                                       <label for="price-radio-3" class="filterbar-block__range-radio-item">
                                          <input type="radio" name="price-radio" id="price-radio-3" value="2000-10000">
                                          <div class="filterbar-block__radio-input"><span></span></div>
                                          <div class="filterbar-block__label">2 000 ₽ и дороже</div>
                                       </label>
                                       <label for="price-radio-4" class="filterbar-block__range-radio-item">
                                          <input type="radio" name="price-radio" id="price-radio-4" value="100-10000"
                                             checked>
                                          <div class="filterbar-block__radio-input"><span></span></div>
                                          <div class="filterbar-block__label">Неважно</div>
                                       </label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="filterbar__param_4">
                           <div class="sizes">
                              <div class="filterbar-block">
                                 <div class="filterbar__title">
                                    <span class="filterbar__title-name">Размеры</span>
                                    <span class="filterbar__info">
                                       <span class="i-info"></span>
                                       <span>Какая-то информация о размерах</span>
                                    </span>
                                 </div>

                                 <div class="filterbar-block__range filterbar__width">
                                    <div class="filterbar-block__range-title">Ширина</div>
                                    <div class="filterbar-block__range-input sizes-width-range">
                                       <!-- <input type="range" value="" name="sizes-width-range"> -->
                                    </div>

                                    <div class="filterbar-block__range-num">
                                       <div class="filterbar-block__range-num-from">
                                          <span>от</span>
                                          <input type="number" value="100" name="sizes-width-from" data-min="100"
                                             class="sizes-width-from">
                                       </div>
                                       <div class="filterbar-block__range-num-to">
                                          <span>до</span>
                                          <input type="number" value="1000" name="sizes-width-to" data-max="1000"
                                             class="sizes-width-to">
                                       </div>
                                    </div>
                                 </div>

                                 <div class="filterbar-block__range filterbar__length">
                                    <div class="filterbar-block__range-title">Длина</div>
                                    <div class="filterbar-block__range-input sizes-length-range">
                                       <!-- <input type="range" value="" name="sizes-length-range"> -->
                                    </div>
                                    <div class="filterbar-block__range-num">
                                       <div class="filterbar-block__range-num-from">
                                          <span>от</span>
                                          <input type="number" value="100" name="sizes-length-from"
                                             class="sizes-length-from" data-min="100">
                                       </div>
                                       <div class="filterbar-block__range-num-to">
                                          <span>до</span>
                                          <input type="number" value="10000" name="sizes-length-to"
                                             class="sizes-length-to" data-max="10000">
                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </div>

                        <div class="filterbar__all-btn _btn">Все фильтры</div>
                     </div>


                  </form>

               </div>
               <div class="filterout">

                  <div class="prodtabs__main products products_ld_3">
                     <CardsProduct v-for="(item, index) in 6" :key="index" :id="'catalogpageitem' + index" />

                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>
<script setup>
import { makeCatalogFilters } from '~/utils/makeCatalogFilters'
onMounted(() => {
   makeCatalogFilters()
})

</script>