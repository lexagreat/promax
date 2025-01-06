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
                <div
                  v-if="products.length"
                  class="filterbar__all-btn-mob-count"
                >
                  <span>{{ products.length }}</span>
                </div>
                <div class="filterbar__all-btn-mob-lbl">Фильтры</div>
                <div
                  @click="toggleFilter"
                  class="filterbar__all-btn-mob-icon"
                >
                  <span class="i-mob-filter"></span>
                </div>
              </div>

              <div
                ref="filter-inner"
                class="filterbar__inner"
              >
                <div class="filterbar__param_1">
                  <ul>
                    <li>
                      <span data-cat-name="categoriya">Категория</span>
                      <ul>
                        <li
                          v-for="category in categories"
                          :key="category"
                          ref="categ"
                          :class="{ _active: categoryId === category.id }"
                        >
                          <span @click="setCategory(category.id, category.title)">{{
                            category.title
                          }}</span>
                          <ul
                            :data-id="category.id"
                            ref="sub-categ"
                          >
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
                            :step="stepPrice"
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
                              v-model="helpPriceMinValue"
                              @blur="validateHelpPriceMin"
                              name="price-from"
                            />
                          </div>
                          <div class="filterbar-block__range-num-to">
                            <span>до</span>
                            <input
                              class="filterbar__param_3_max"
                              type="number"
                              v-model="helpPriceMaxValue"
                              @blur="validateHelpPriceMax"
                              name="price-to"
                            />
                          </div>
                        </div>
                        <div class="filterbar-block__range-radio">
                          <label
                            for="price-radio-1"
                            class="filterbar-block__range-radio-item"
                            @click="setHelpPrices(0, 1000)"
                            v-if="priceMinValue <= 1000 && priceMaxValue <= 1000"
                          >
                            <input
                              type="radio"
                              name="price-radio"
                              id="price-radio-1"
                              v-model="radioPrice"
                              value="radio-price-1"
                            />
                            <div class="filterbar-block__radio-input"><span></span></div>
                            <div class="filterbar-block__label">до 1000 ₽</div>
                          </label>
                          <label
                            for="price-radio-2"
                            class="filterbar-block__range-radio-item"
                            @click="setHelpPrices(1000, 2000)"
                            v-if="priceMinValue <= 1000 && priceMaxValue >= 2000"
                          >
                            <input
                              type="radio"
                              name="price-radio"
                              id="price-radio-2"
                              v-model="radioPrice"
                              value="radio-price-2"
                            />
                            <div class="filterbar-block__radio-input"><span></span></div>
                            <div class="filterbar-block__label">1 000 – 2 000 ₽</div>
                          </label>
                          <label
                            v-if="priceMinValue <= 2000 && priceMaxValue >= 2000"
                            for="price-radio-3"
                            class="filterbar-block__range-radio-item"
                            @click="setHelpPrices(2000, priceMaxValue)"
                          >
                            <input
                              type="radio"
                              name="price-radio"
                              id="price-radio-3"
                              v-model="radioPrice"
                              value="radio-price-3"
                            />
                            <div class="filterbar-block__radio-input"><span></span></div>
                            <div class="filterbar-block__label">2 000 ₽ и дороже</div>
                          </label>
                          <label
                            for="price-radio-4"
                            class="filterbar-block__range-radio-item"
                            @click="setPrices"
                          >
                            <input
                              type="radio"
                              name="price-radio"
                              id="price-radio-4"
                              checked
                              v-model="radioPrice"
                              value="radio-price-4"
                            />
                            <div class="filterbar-block__radio-input"><span></span></div>
                            <div class="filterbar-block__label">Неважно</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="hasWidthAndLength"
                  class="filterbar__param_4"
                >
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
                            :step="stepWidth"
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
                              v-model="helpWidthMinValue"
                              name="sizes-width-from"
                              class="sizes-width-from"
                              @blur="validateHelpWidthMin"
                            />
                          </div>
                          <div class="filterbar-block__range-num-to">
                            <span>до</span>
                            <input
                              type="number"
                              v-model="helpWidthMaxValue"
                              name="sizes-width-to"
                              class="sizes-width-to"
                              @blur="validateHelpWidthMax"
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
                            :step="stepLength"
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
                              v-model="helpLengthMinValue"
                              name="sizes-length-from"
                              class="sizes-length-from"
                              @blur="validateHelpLengthMin"
                            />
                          </div>
                          <div class="filterbar-block__range-num-to">
                            <span>до</span>
                            <input
                              type="number"
                              v-model="helpLengthMaxValue"
                              name="sizes-length-to"
                              class="sizes-length-to"
                              @blur="validateHelpLengthMax"
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
const radioPrice = ref('radio-price-4')

async function slideUp(element, duration = 500) {
  return new Promise((resolve) => {
    element.style.transition = `height ${duration}ms ease`
    element.style.overflow = 'hidden'
    element.style.height = `${element.offsetHeight}px`

    requestAnimationFrame(() => {
      element.style.height = '0'
    })

    setTimeout(() => {
      element.style.display = 'none'
      element.style.removeProperty('height')
      element.style.removeProperty('overflow')
      element.style.removeProperty('transition')
      resolve()
    }, duration)
  })
}

async function slideDown(element, duration = 500) {
  return new Promise((resolve) => {
    element.style.display = 'block'
    const height = element.offsetHeight // Вычисляем полную высоту
    element.style.height = '0'
    element.style.overflow = 'hidden'
    element.style.transition = `height ${duration}ms ease`

    requestAnimationFrame(() => {
      element.style.height = `${height}px`
    })

    setTimeout(() => {
      element.style.removeProperty('height')
      element.style.removeProperty('overflow')
      element.style.removeProperty('transition')
      resolve()
    }, duration)
  })
}

function slideToggle(element, duration = 500) {
  const isHidden = window.getComputedStyle(element).display === 'none'

  if (isHidden) {
    slideDown(element, duration)
  } else {
    slideUp(element, duration)
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
      id = 1
    }
    const categoryTitle = categories.value.filter((category) => category.id === id)[0].title
    await setCategory(id, categoryTitle)
  } else {
    const categoryTitle = categories.value[0].title
    await setCategory(1, categoryTitle)
  }

  updateHelpPrices()

  if (hasWidthAndLength.value) {
    updateHelpWidth()
    updateHelpLength()
  }

  await getData('')
})

const priceMin = ref(0)
const priceMax = ref(10000)
const priceMinValue = ref(priceMin.value)
const priceMaxValue = ref(priceMax.value)
const helpPriceMinValue = ref(0)
const helpPriceMaxValue = ref(10000)
const stepPrice = ref(100)

const UpdatePrices = async (e) => {
  priceMinValue.value = e.minValue
  priceMaxValue.value = e.maxValue
  updateHelpPrices()
}
const UpdatePricesBySlide = async (e) => {
  priceMinValue.value = e.minValue
  priceMaxValue.value = e.maxValue

  if (categoryName.value.length) {
    await getProducts(subCategoryId.value === 0 ? '' : subCategoryId.value)
  } else {
    await getProducts('')
  }
  updateHelpPrices()
}
const updateHelpPrices = () => {
  helpPriceMinValue.value = priceMinValue.value
  helpPriceMaxValue.value = priceMaxValue.value
}
const validateHelpPriceMin = async (e) => {
  const min = Number(e.target.value)

  if (min > priceMaxValue.value - stepPrice.value || min < priceMinValue.value + stepPrice.value) {
    helpPriceMinValue.value = priceMinValue.value
  } else {
    helpPriceMinValue.value = min
    await getValidatedProducts()
  }
}
const validateHelpPriceMax = async (e) => {
  const max = Number(e.target.value)
  if (max > priceMaxValue.value || max < priceMinValue.value + stepPrice.value) {
    helpPriceMaxValue.value = priceMaxValue.value
  } else if (max !== priceMaxValue.value) {
    helpPriceMaxValue.value = max
    await getValidatedProducts()
  }
}

const widthMin = ref(0)
const widthMax = ref(1000)
const widthMinValue = ref(widthMin.value)
const widthMaxValue = ref(widthMax.value)
const helpWidthMinValue = ref(0)
const helpWidthMaxValue = ref(0)
const stepWidth = ref(1)

const UpdateWidth = (e) => {
  widthMinValue.value = e.minValue
  widthMaxValue.value = e.maxValue
  updateHelpWidth()
}
const UpdateWidthBySlide = async (e) => {
  widthMinValue.value = e.minValue
  widthMaxValue.value = e.maxValue

  if (categoryName.value.length) {
    await getProducts(subCategoryId.value === 0 ? '' : subCategoryId.value)
  } else {
    await getProducts('')
  }
  updateHelpWidth()
}
const updateHelpWidth = () => {
  helpWidthMinValue.value = widthMinValue.value
  helpWidthMaxValue.value = widthMaxValue.value
}
const validateHelpWidthMin = async (e) => {
  const min = Number(e.target.value)
  if (min > widthMaxValue.value - stepWidth.value || min < widthMinValue.value + stepWidth.value) {
    helpWidthMinValue.value = widthMinValue.value
  } else {
    helpWidthMinValue.value = min
    await getValidatedProducts()
  }
}
const validateHelpWidthMax = async (e) => {
  const max = Number(e.target.value)
  if (max > widthMaxValue.value || max < widthMinValue.value + stepWidth.value) {
    helpWidthMaxValue.value = widthMaxValue.value
  } else {
    helpWidthMaxValue.value = max
    await getValidatedProducts()
  }
}

const lengthMin = ref(0)
const lengthMax = ref(1000)
const lengthMinValue = ref(lengthMin.value)
const lengthMaxValue = ref(lengthMax.value)
const helpLengthMinValue = ref(0)
const helpLengthMaxValue = ref(0)
const stepLength = ref(1)

const UpdateLength = (e) => {
  lengthMinValue.value = e.minValue
  lengthMaxValue.value = e.maxValue
  updateHelpLength()
}
const UpdateLengthBySlide = async (e) => {
  lengthMinValue.value = e.minValue
  lengthMaxValue.value = e.maxValue

  if (categoryName.value.length) {
    await getProducts(subCategoryId.value === 0 ? '' : subCategoryId.value)
  } else {
    await getProducts('')
  }

  updateHelpLength()
}
const updateHelpLength = () => {
  helpLengthMinValue.value = lengthMinValue.value
  helpLengthMaxValue.value = lengthMaxValue.value
}
const validateHelpLengthMin = async (e) => {
  const min = Number(e.target.value)
  if (
    min > lengthMaxValue.value - stepLength.value ||
    min < lengthMinValue.value + stepLength.value
  ) {
    helpLengthMinValue.value = lengthMinValue.value
  } else {
    helpLengthMinValue.value = min
    await getValidatedProducts()
  }
}
const validateHelpLengthMax = async (e) => {
  const max = Number(e.target.value)
  if (max > lengthMaxValue.value || max < lengthMinValue.value + stepLength.value) {
    helpLengthMaxValue.value = lengthMaxValue.value
  } else {
    helpLengthMaxValue.value = max
    await getValidatedProducts()
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
const setHelpPrices = (min, max) => {
  if (min >= 0) {
    helpPriceMinValue.value = min
  }

  if (max > 0) {
    helpPriceMaxValue.value = max
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
  categoryName.value = title

  for (const sub of subCatListsRef.value) {
    const catId = Number(sub.getAttribute('data-id'))
    if (catId === id) {
      await slideDown(sub)
    }
  }

  await getData('')
}
const setSubcategory = async (id, title) => {
  subCategoryId.value = id
  subcategoryName.value = title
  await getData(id)
}

const getPricesAndSizes = async (subCat = '') => {
  let res = await useBaseFetch(
    `/catalog/prices-and-sizes?categoryId=${categoryId.value}&subCategoryId=${subCat}`
  )

  if (res.prices.min === res.prices.max && res.prices.min === null && res.prices.max === null) {
    priceMin.value = 0
    priceMax.value = 10000
  } else if (res.prices.min === res.prices.max) {
    priceMin.value = Number(res.prices.min)
    priceMax.value = Number(res.prices.min) + stepPrice.value
  } else {
    priceMin.value = Number(res.prices.min)
    priceMax.value = Number(res.prices.max)
  }

  setPrices()

  if (res.width.min === res.width.max && res.width.min === null && res.width.max === null) {
    widthMin.value = 0
    widthMax.value = 1000
    hasWidthAndLength.value = false
  } else if (res.width.min === res.width.max) {
    widthMin.value = Number(res.width.min)
    widthMax.value = Number(res.width.min) + stepWidth.value
    hasWidthAndLength.value = true
  } else {
    widthMin.value = Number(res.width.min)
    widthMax.value = Number(res.width.max)
    hasWidthAndLength.value = true
  }

  if (res.length.min === res.length.max && res.length.min === null && res.length.max === null) {
    lengthMin.value = 0
    lengthMax.value = 1000
  } else if (res.length.min === res.length.max) {
    lengthMin.value = Number(res.length.min)
    lengthMax.value = Number(res.length.min) + stepLength.value
  } else {
    lengthMin.value = Number(res.length.min)
    lengthMax.value = Number(res.length.max)
  }

  setSizes()
}

const getValidatedProducts = async () => {
  if (categoryName.value.length) {
    await getProducts(subCategoryId.value === 0 ? '' : subCategoryId.value)
  } else {
    await getProducts('')
  }
}
const getProducts = async (subCat = '') => {
  if (hasWidthAndLength.value) {
    let res = await useBaseFetch(
      `catalog/products?categoryId=${categoryId.value}&subCategoryId=${subCat}&filter=${radio.value}&price_min=${helpPriceMinValue.value}&price_max=${helpPriceMaxValue.value}&width_min=${helpWidthMinValue.value}&width_max=${helpWidthMaxValue.value}&length_min=${helpLengthMinValue.value}&length_max=${helpLengthMaxValue.value}`
    )
    products.value = res
  } else {
    let res = await useBaseFetch(
      `/catalog/products?categoryId=${categoryId.value}&subCategoryId=${subCat}&filter=${radio.value}&price_min=${helpPriceMinValue.value}&price_max=${helpPriceMaxValue.value}`
    )
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

watch(radioPrice, async (newValue) => {
  await getValidatedProducts()
})

watch(
  () => route.query['id'],
  () => {
    if (route.query['id']) {
      let id = Number(route.query.id)

      if (Number.isNaN(id)) {
        id = 1
      }
      const categoryTitle = categories.value.filter((category) => category.id === id)[0].title
      setCategory(id, categoryTitle)
    } else {
      const categoryTitle = categories.value[0].title
      setCategory(1, categoryTitle)
      slideDown(subCatListsRef.value[0])
    }
  }
)
</script>

<style lang="scss">
.filterout {
  flex: 1;
}
</style>
