import { addDecorator } from "@storybook/react"
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator'
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator'
import {TranslationDecorator} from '../../src/shared/config/storybook/TranslationDecorator'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

}

config.resolve = {
  config,resolve,
  alias: buildResolvers().alias,
  };


addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)