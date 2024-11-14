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
                        <li
                          v-for="category in categories"
                          :key="category"
                        >
                          <span @click="setCategory(category.id, category.title)">{{
                            category.title
                          }}</span>
                          <ul>
                            <li
                              v-for="sub in category.sub_categories"
                              :key="sub"
                              @click="setSubcategory(sub.id, sub.title)"
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
                          <MultiRangeSlider
                            :ruler="false"
                            :min="priceMin"
                            :max="priceMax"
                            :step="100"
                            :minValue="priceMinValue"
                            :maxValue="priceMaxValue"
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
                        <div class="range-slider">
                          <MultiRangeSlider
                            :ruler="false"
                            :min="widthMin"
                            :max="widthMax"
                            :step="1"
                            :minValue="widthMinValue"
                            :maxValue="widthMaxValue"
                            @input="UpdateWidth"
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
                          <MultiRangeSlider
                            :ruler="false"
                            :min="lengthMin"
                            :max="lengthMax"
                            :step="1"
                            :minValue="lengthMinValue"
                            :maxValue="lengthMaxValue"
                            @input="UpdateLength"
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

                <div class="filterbar__all-btn _btn">Все фильтры</div>
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
import { useProductsStore } from '~/store/productsStore'
import { makeCatalogFilters } from '~/utils/makeCatalogFilters'
const productsStore = useProductsStore()

onMounted(() => {
  makeCatalogFilters()
})

const categoryName = ref('Паркет')
const subcategoryName = ref('')

const checkedCategory = ref(1)
const checkedSubcategory = ref(0)
const categories = ref([])
const products = ref([])

const radio = ref('trend')

const priceMin = ref(0)
const priceMax = ref(10000)
const priceMinValue = ref(priceMin.value)
const priceMaxValue = ref(priceMax.value)
const UpdatePrices = (e) => {
  priceMinValue.value = e.minValue
  priceMaxValue.value = e.maxValue
}

const widthMin = ref(0)
const widthMax = ref(1000)
const widthMinValue = ref(widthMin.value)
const widthMaxValue = ref(widthMax.value)
const UpdateWidth = (e) => {
  widthMinValue.value = e.minValue
  widthMaxValue.value = e.maxValue
}
const lengthMin = ref(0)
const lengthMax = ref(1000)
const lengthMinValue = ref(lengthMin.value)
const lengthMaxValue = ref(lengthMax.value)
const UpdateLength = (e) => {
  lengthMinValue.value = e.minValue
  lengthMaxValue.value = e.maxValue
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
categories.value = await useBaseFetch('/catalog/categories-list')

const getData = async (subCat = '') => {
  getProducts(subCat)
  getPricesAndSizes(subCat)
}
const setCategory = async (id, title) => {
  checkedCategory.value = id
  checkedSubcategory.value = ''
  subcategoryName.value = ''
  await getData()

  categoryName.value = title
}
const setSubcategory = async (id, title) => {
  checkedSubcategory.value = id
  subcategoryName.value = title
}

const getPricesAndSizes = async (subCat = '') => {
  let res = await useBaseFetch(
    `/catalog/prices-and-sizes?categoryId=${checkedCategory.value}&subCategoryId=${subCat}`
  )
  priceMin.value = Number(res.prices.min)
  priceMax.value = Number(res.prices.max)
  widthMin.value = Number(res.width.min)
  widthMax.value = Number(res.width.max)
  lengthMin.value = Number(res['length'].min)
  lengthMax.value = Number(res['length'].max)
  setPrices()
  setSizes()
}

const getProducts = async (subCat = '') => {
  let res = await useBaseFetch(
    `/catalog/products?categoryId=${checkedCategory.value}&subCategoryId=${subCat}&filter=${radio.value}&price_min=${priceMinValue.value}&price_max=${priceMaxValue.value}&width_min=${widthMinValue.value}&width_max=${widthMaxValue.value}&length_min=${lengthMinValue.value}&length_max=${lengthMaxValue.value}`
  )
  products.value = res
}
watch(checkedSubcategory, async (value) => {
  await getData(value)
})
// Следим за изменениями в объекте filters
watch(radio, async () => {
  await getData(checkedSubcategory.value ? checkedSubcategory.value : '')
})

const ranges = computed(() => {
  return {
    priceMin: priceMinValue.value,
    priceMax: priceMaxValue.value,
    lengthMin: lengthMinValue.value,
    lengthMax: lengthMinValue.value,
    widthMax: widthMinValue.value,
    widthMax: widthMaxValue.value
  }
})
watch(
  ranges,
  async () => {
    await getProducts(checkedSubcategory.value ? checkedSubcategory.value : '')
  },
  {
    deep: true
  }
)
await getData()
await productsStore.getFavoriteProducts()
</script>

<style lang="scss">
.filterout {
  flex: 1;
}
</style>
