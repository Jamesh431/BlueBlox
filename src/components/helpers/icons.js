import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGithub } from '@fortawesome/free-brands-svg-icons'

function initIcons() {
  return library.add(fas, faTwitter, faFontAwesome, faGithub)
}

export default initIcons