import { useMDXComponents as getThemeComponents } from 'nextra-theme-blog'
 
const themeComponents = getThemeComponents()
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components
  }
}