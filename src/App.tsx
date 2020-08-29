import React from 'react'

export function App({a, ...rest}) {
  console.log(rest, Array.from({ length: 3 }, () => 2))
  return (
    <div>I am App262222~!23331 {App?.name} {JSON.stringify(rest)}</div>
  )
}
