import React from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({children}) {
  return (
    <Provider>
        {children}
    </Provider>
  )
}