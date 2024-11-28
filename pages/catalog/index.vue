<template>
  

  <main class="main">
    <div class="breadcrumbs">
      <div class="container">
        <div class="breadcrumbs__inner">
          <span class="breadcrumbs__item">{{ categoryName }}</span>
          <span
            class="breadcrumbs__sep"
            v-if="subcategoryName.length"
            ><span class="i-breadcrumbs-sep"></span
          ></span>
          <span
            class="breadcrumbs__item"
            v-if="subcategoryName.length"
            >{{ subcategoryName }}</span
          >
        </div>
      </div>
    </div>

    <div class="filterblock">
      <div class="container">
        <div class="filterblock__inner">
          <div class="filterbar">
            <form id="filterbar">
              <div class="filterbar__all-btn-mob-wrap">
                <div class="filterbar__all-btn-mob-count"><span>1</span></div>
                <div class="filterbar__all-btn-mob-lbl">Фильтры</div>
                <div @click="toggleFilter" class="filterbar__all-btn-mob-icon"><span class="i-mob-filter"></span></div>
              </div>

              <div ref="filter-inner" class="filterbar__inner">
                <div class="filterbar__param_1">
                  <ul>
                    <li>
                      <span data-cat-name="categoriya">Категория</span>
                      <ul>
                        <li
                          v-for="category in categories"
                          :key="category"
                          :data-id="category.id"
                          ref="categ"
                          :class="{_active: categoryId === category.id}"
                        >
                          <span @click="setCategory(category.id, category.title)">{{
                            category.title
                          }}</span>
                          <ul ref="sub-categ">
                            <li
                              v-for="sub in category.sub_categories"
                              :key="sub"
                              @click="setSubcategory(sub.id, sub.title)"
                              :class="{ _active: sub.id === subCategoryId }"
                            >
                              <span>{{ sub.title }}</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="filterbar__param_2">
                  <label
                    class="_active"
                    for="trend"
                  >
                    <input
                      type="radio"
                      name="catalogRadio"
                      id="trend"
                      checked
                      v-model="radio"
                      value="trend"
                    />
                    <div class="filterbar__checkbox-input"><span></span></div>
                    <div class="filterbar__label">Тренд 2024</div>
                  </label>
                  <label for="hitsales">
                    <input
                      type="radio"
                      name="catalogRadio"
                      id="hitsales"
                      v-model="radio"
                      value="hit"
                    />
                    <div class="filterbar__checkbox-input"><span></span></div>
                    <div class="filterbar__label">Хит продаж</div>
                  </label>
                  <label for="bestoffer">
                    <input
                      type="radio"
                      name="catalogRadio"
                      id="bestoffer"
                      v-model="radio"
                      value="best"
                    />
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
                        <div class="range-slider">
                          <AppMultiRangeSlider
                            :ruler="false"
                            :min="priceMin"
                            :max="priceMax"
                            :step="100"
                            :minValue="priceMinValue"
                            :maxValue="priceMaxValue"
                            @inputBySlide="UpdatePricesBySlide"
                            @input="UpdatePrices"
                          />
                        </div>
                        <div class="filterbar-block__range-num">
                          <div class="filterbar-block__range-num-from">
                            <span>от</span>
                            <input
                              class="filterbar__param_3_min"
                              type="number"
                              v-model="priceMinValue"
                              name="price-from"
                            />
                          </div>
                          <div class="filterbar-block__range-num-to">
                            <span>до</span>
                            <input
                              class="filterbar__param_3_max"
                              type="number"
                              v-model="priceMaxValue"
                              name="price-to"
                            />
                          </div>
                        </div>

                        <div class="filterbar-block__range-radio">
                          <label
                            for="price-radio-1"
                            class="filterbar-block__range-radio-item"
                            @click="setPrices(0, 1000)"
                          >
                            <input
                              type="radio"
                              name="price-radio"
                              id="price-radio-1"
                            />
                            <div class="filterbar-block__radio-input"><span></span></div>
                            <div class="filterbar-block__label">до 1000 ₽</div>
                          </label>
                          <label
                            for="price-radio-2"
                            class="filterbar-block__range-radio-item"
                            @click="setPrices(1000, 2000)"
                          >
                            <input
                              type="radio"
                              name="price-radio"
                              id="price-radio-2"
                            />
                            <div class="filterbar-block__radio-input"><span></span></div>
                            <div class="filterbar-block__label">1 000 – 2 000 ₽</div>
                          </label>
                          <label
                            for="price-radio-3"
                            class="filterbar-block__range-radio-item"
                            @click="setPrices(2000)"
                          >
                            <input
                              type="radio"
                              name="price-radio"
                              id="price-radio-3"
                            />
                            <div class="filterbar-block__radio-input"><span></span></div>
                            <div class="filterbar-block__label">2 000 ₽ и дороже</div>
                          </label>
                          <label
                            for="price-radio-4"
                            class="filterbar-block__range-radio-item"
                            @click="setPrices()"
                          >
                            <input
                              type="radio"
                              name="price-radio"
                              id="price-radio-4"
                              checked
                            />
                            <div class="filterbar-block__radio-input"><span></span></div>
                            <div class="filterbar-block__label">Неважно</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="hasWidthAndLength" class="filterbar__param_4">
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
                        <div class="range-slider">
                          <AppMultiRangeSlider
                            :ruler="false"
                            :min="widthMin"
                            :max="widthMax"
                            :step="1"
                            :minValue="widthMinValue"
                            :maxValue="widthMaxValue"
                            @input="UpdateWidth"
                            @inputBySlide="UpdateWidthBySlide"
                          />
                        </div>

                        <div class="filterbar-block__range-num">
                          <div class="filterbar-block__range-num-from">
                            <span>от</span>
                            <input
                              type="number"
                              v-model="widthMinValue"
                              name="sizes-width-from"
                              class="sizes-width-from"
                            />
                          </div>
                          <div class="filterbar-block__range-num-to">
                            <span>до</span>
                            <input
                              type="number"
                              v-model="widthMaxValue"
                              name="sizes-width-to"
                              class="sizes-width-to"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="filterbar-block__range filterbar__length">
                        <div class="filterbar-block__range-title">Длина</div>
                        <div class="range-slider">
                          <AppMultiRangeSlider
                            :ruler="false"
                            :min="lengthMin"
                            :max="lengthMax"
                            :step="1"
                            :minValue="lengthMinValue"
                            :maxValue="lengthMaxValue"
                            @input="UpdateLength"
                            @inputBySlide="UpdateLengthBySlide"
                          />
                        </div>
                        <div class="filterbar-block__range-num">
                          <div class="filterbar-block__range-num-from">
                            <span>от</span>
                            <input
                              type="number"
                              v-model="lengthMinValue"
                              name="sizes-length-from"
                              class="sizes-length-from"
                            />
                          </div>
                          <div class="filterbar-block__range-num-to">
                            <span>до</span>
                            <input
                              type="number"
                              v-model="lengthMaxValue"
                              name="sizes-length-to"
                              class="sizes-length-to"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </form>
          </div>
          <div class="filterout">
            <div class="prodtabs__main products products_ld_3">
              <CardsProduct
                v-for="(item, index) in products"
                :key="index"
                :product="item"
                :id="'catalogpageitem' + index"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import MultiRangeSlider from 'multi-range-slider-vue'
import { useAccountStore } from '~/store/accountStore'
import { useProductsStore } from '~/store/productsStore'
import { makeCatalogFilters } from '~/utils/makeCatalogFilters'

const productsStore = useProductsStore()
const accountStore = useAccountStore()

const route = useRoute()

const catRef = useTemplateRef('categ')
const subCatListsRef = useTemplateRef('sub-categ')

const filterInnerRef = useTemplateRef('filter-inner')

const categoryName = ref('Паркет')
const subcategoryName = ref('')

const categoryId = ref(1)
const subCategoryId = ref(0)
const choosedSubCat = ref(false)
const hasWidthAndLength = ref(false)

const checkedCategory = ref(1)
const checkedSubcategory = ref(0)
const categories = ref([])
const products = ref([])

const radio = ref('trend')

async function slideUp(element, duration = 500) {
  return new Promise((resolve) => {
    element.style.transition = `height ${duration}ms ease`;
    element.style.overflow = 'hidden';
    element.style.height = `${element.offsetHeight}px`;

    requestAnimationFrame(() => {
      element.style.height = '0';
    });

    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition');
      resolve()
    }, duration);
  })
}

async function slideDown(element, duration = 500) {
  return new Promise((resolve) => {
    element.style.display = 'block';
    const height = element.offsetHeight; // Вычисляем полную высоту
    element.style.height = '0';
    element.style.overflow = 'hidden';
    element.style.transition = `height ${duration}ms ease`;
  
    requestAnimationFrame(() => {
      element.style.height = `${height}px`;
    });
  
    setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition');
      resolve()
    }, duration);
  })
}

function slideToggle(element, duration = 500) {
  const isHidden = window.getComputedStyle(element).display === 'none';

  if (isHidden) {
    slideDown(element, duration);
  } else {
    slideUp(element, duration);
  }
}

function toggleFilter() {
  slideToggle(filterInnerRef.value)
}

categories.value = await useBaseFetch('/catalog/categories-list/')

onMounted(async () => {
  if (route.query['id']) {
    let id = Number(route.query.id)

    if (Number.isNaN(id)) {
      console.log('id === Nan');
      id = 1
    }
    const categoryTitle = categories.value.filter((category) => category.id === id)[0].title
    setCategory(id, categoryTitle)
  } else {
    const categoryTitle = categories.value[0].title
    setCategory(1, categoryTitle)
    slideDown(subCatListsRef.value[0])
  }
  console.log('categories', categories.value);
  console.log('subCatListsRef.value', subCatListsRef.value);
})

const priceMin = ref(0)
const priceMax = ref(10000)
const priceMinValue = ref(priceMin.value)
const priceMaxValue = ref(priceMax.value)
const helpPriceMinValue = ref(priceMin.value)
const helpPriceMaxValue = ref(priceMax.value)


const UpdatePrices = async (e) => {
  console.log('e', e);
  priceMinValue.value = e.minValue
  priceMaxValue.value = e.maxValue
  console.log('priceMinValue.value', priceMinValue.value, 'priceMaxValue.value', priceMaxValue.value);
}
const UpdatePricesBySlide = async (e) => {
  console.log('e', e);
  priceMinValue.value = e.minValue
  priceMaxValue.value = e.maxValue
  if (categoryName.value.length) {
    await getProducts(subCategoryId.value === 0 ? '' : subCategoryId.value)
  } else {
    await getProducts('')
  }
}

const widthMin = ref(0)
const widthMax = ref(1000)
const widthMinValue = ref(widthMin.value)
const widthMaxValue = ref(widthMax.value)
const UpdateWidth = (e) => {
  widthMinValue.value = e.minValue
  widthMaxValue.value = e.maxValue
}
const UpdateWidthBySlide = async (e) => {
  widthMinValue.value = e.minValue
  widthMaxValue.value = e.maxValue

  if (categoryName.value.length) {
    await getProducts(subCategoryId.value === 0 ? '' : subCategoryId.value)
  } else {
    await getProducts('')
  }
}
const lengthMin = ref(0)
const lengthMax = ref(1000)
const lengthMinValue = ref(lengthMin.value)
const lengthMaxValue = ref(lengthMax.value)
const UpdateLength = (e) => {
  lengthMinValue.value = e.minValue
  lengthMaxValue.value = e.maxValue
}
const UpdateLengthBySlide = async (e) => {
  lengthMinValue.value = e.minValue
  lengthMaxValue.value = e.maxValue

  if (categoryName.value.length) {
    await getProducts(subCategoryId.value === 0 ? '' : subCategoryId.value)
  } else {
    await getProducts('')
  }
}

const setPrices = (min, max) => {
  if (min || min == 0) {
    priceMinValue.value = min
  } else {
    priceMinValue.value = priceMin.value
  }
  if (max) {
    priceMaxValue.value = max
  } else {
    priceMaxValue.value = priceMax.value
  }
}
const setSizes = () => {
  widthMaxValue.value = widthMax.value
  widthMinValue.value = widthMin.value
  lengthMaxValue.value = lengthMax.value
  lengthMinValue.value = lengthMin.value
}

const getData = async (subCat = '') => {
  await getPricesAndSizes(subCat)
  await getProducts(subCat)
}
const setCategory = async (id, title) => {
  for (const cat of catRef.value) {
    if (cat.classList.contains('_active')) {
      await slideUp(cat.querySelector('ul'), 500)
    }
  }
  categoryId.value = id
  subCategoryId.value = 0
  subcategoryName.value = ''
  await slideDown(subCatListsRef.value[id - 1])
  await getData('')
  categoryName.value = title
}
const setSubcategory = async (id, title) => {
  console.log('sub id', id);
  subCategoryId.value = id
  subcategoryName.value = title
  await getData(id)
}

const getPricesAndSizes = async (subCat = '') => {
  let res = await useBaseFetch(`/catalog/prices-and-sizes?categoryId=${categoryId.value}&subCategoryId=${subCat}`)
  
  if (res.prices.min !== null) {
    priceMin.value = Number(res.prices.min)
    priceMax.value = Number(res.prices.max)
    setPrices()
  } else {
    priceMin.value = 0
    priceMax.value = 10000
    setPrices()
  }

  if (res.width.min !== null && res['length'].min !== null) {
    widthMin.value = Number(res.width.min)
    widthMax.value = Number(res.width.max)
    lengthMin.value = Number(res['length'].min)
    lengthMax.value = Number(res['length'].max)
    console.log('width has');
    hasWidthAndLength.value = true
    setSizes()
  } else {
    console.log('no width');
    hasWidthAndLength.value = false
    // console.log('nulllll');
    // widthMin.value = 0
    // widthMax.value = 0
    // lengthMin.value = 0
    // lengthMax.value = 0
    // setSizes(0, 0)
  }
}

const getProducts = async (subCat = '') => {
  console.log('price_min', priceMinValue.value);
  if (hasWidthAndLength.value) {
    let res = await useBaseFetch(`catalog/products?categoryId=${categoryId.value}&subCategoryId=${subCat}&filter=${radio.value}&price_min=${priceMinValue.value}&price_max=${priceMaxValue.value}&width_min=${widthMinValue.value}&width_max=${widthMaxValue.value}&length_min=${lengthMinValue.value}&length_max=${lengthMaxValue.value}`)
    products.value = res
  } else {
    let res = await useBaseFetch(`/catalog/products?categoryId=${categoryId.value}&subCategoryId=${subCat}&filter=${radio.value}&price_min=${priceMinValue.value}&price_max=${priceMaxValue.value}`)
    products.value = res
  }
}

watch(radio, async () => {
  if (categoryName.value.length) {
    await getData(subCategoryId.value === 0 ? '' : subCategoryId.value)
  } else {
    await getData('')
  }
})

watch(() => route.query['id'], () => {
  if (route.query['id']) {
    let id = Number(route.query.id)

    if (Number.isNaN(id)) {
      console.log('id === Nan');
      id = 1
    }
    const categoryTitle = categories.value.filter((category) => category.id === id)[0].title
    setCategory(id, categoryTitle)
  } else {
    const categoryTitle = categories.value[0].title
    setCategory(1, categoryTitle)
    slideDown(subCatListsRef.value[0])
  }
})
</script>

<style lang="scss">
.filterout {
  flex: 1;
}
</style>
