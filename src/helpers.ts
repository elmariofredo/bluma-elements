export const addStyles = ( main: string, isModifiers: (string|void)[] ): string => {
  const isModifiersClass = isModifiers.filter( Boolean ).map( name => `is-${name}`).join(' ')
  return [main, isModifiersClass].filter(Boolean).join(' ')
}
