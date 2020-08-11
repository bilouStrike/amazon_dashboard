// test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
/*import { ThemeProvider } from 'my-ui-lib'
import { TranslationProvider } from 'my-i18n-lib'
import defaultStrings from 'i18n/en-x-default'*/
import { IntlProvider } from "react-intl";

const AllTheProviders = ({ children }) => {
  return (
    <IntlProvider locale="en">
        {children}
    </IntlProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }