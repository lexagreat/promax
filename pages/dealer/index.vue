<template>
   <main class="main">
      <div class="breadcrumbs">
         <div class="container">
            <div class="breadcrumbs__inner">
               <NuxtLink to="./" class="breadcrumbs__item">Главная</NuxtLink>
               <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
               <NuxtLink to="/dealer" class="breadcrumbs__item">Дилерам</NuxtLink>
               <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
               <span class="breadcrumbs__item">Раздел для дилеров</span>
            </div>
         </div>
      </div>

      <div class="dealer">
         <div class="container">
            <div class="dealer__inner">
               <h1>Раздел для дилеров</h1>
               <div class="dealer__exit _btn">Выход</div>
               <div class="dealer__desc">
                  Добро пожаловать! В данном партнерском разделе Вы всегда найдете актуальные прайс-листы и складские
                  остатки на реализуемую нами продукцию. Детали можно уточнить у Вашего менеджера в офисе продаж "ОКЛИ".
               </div>
               <div class="dealer__pricelist-wrp">
                  <div class="dealer__pricelist-group">
                     <h2>Прайс-листы на паркет для наших партнеров</h2>
                     <ul class="dealer__pricelist">
                        <li class="dealer__pricelist-item"><span>Прайс-лист Barlinek</span> - <NuxtLink to="#">Скачать
                              документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист Polarwood</span> - <NuxtLink to="#">Скачать
                              документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист Karelia</span> - <NuxtLink to="#">Скачать
                              документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист ELLETT</span> - <NuxtLink to="#">Скачать
                              документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист на подложку</span> - <NuxtLink to="#">
                              Скачать
                              документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист Karelia DUO</span> - <NuxtLink to="#">
                              Скачать
                              документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист Polarwood DUO</span> - <NuxtLink to="#">
                              Скачать
                              документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист ESTA</span> - <NuxtLink to="#">Скачать
                              документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист на спортивные полы Karelia</span> -
                           <NuxtLink href="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист ESTA Infinity Ash</span> - <NuxtLink
                              href="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист ESTA Infinity Oak</span> - <NuxtLink
                              href="#">Скачать документ</NuxtLink>
                        </li>
                     </ul>
                  </div>
                  <div class="dealer__pricelist-group">
                     <h2>Прайс-листы на плинтус для наших партнеров</h2>
                     <ul class="dealer__pricelist">
                        <li class="dealer__pricelist-item"><span>Прайс-листы на плинтус Karelia и Polarwood</span> -
                           <NuxtLink href="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист на плинтус Barlinek</span> - <NuxtLink
                              href="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист на плинтус ELLETT</span> - <NuxtLink
                              href="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист на плинтус Pedross</span> - <NuxtLink
                              href="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист на плинтус Teckwood Белый</span> - <NuxtLink
                              href="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-листы на плинтусы Teckwood Цветной 75*16</span> -
                           <NuxtLink to="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-листы на плинтусы Teckwood Цветной 75*16</span> -
                           <NuxtLink to="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-листы на плинтусы Teckwood Глянец Прайм</span> -
                           <NuxtLink to="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-лист на плинтусы Teckwood Титан</span> -
                           <NuxtLink href="#">Скачать документ</NuxtLink>
                        </li>
                        <li class="dealer__pricelist-item"><span>Прайс-листы на плинтусы Teckwood Цветной 80*16</span> -
                           <NuxtLink to="#">Скачать документ</NuxtLink>
                        </li>
                     </ul>
                  </div>
               </div>
               <h2 class="dealer__h2">Информация по доставке и оплате</h2>

            </div>
         </div>
      </div>
   </main>
</template>
<script setup></script>