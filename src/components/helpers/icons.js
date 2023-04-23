import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

function initIcons() {
  return library.add(fas, faTwitter, faFontAwesome)
}

export default initIcons