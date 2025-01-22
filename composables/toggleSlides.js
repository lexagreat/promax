export async function slideUp(element, duration = 500) {
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

export async function slideDown(element, duration = 500) {
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

export function slideToggle(element, duration = 500) {
  const isHidden = window.getComputedStyle(element).display === 'none'

  if (isHidden) {
    slideDown(element, duration)
  } else {
    slideUp(element, duration)
  }
}