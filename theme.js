// Apply the saved appearance before the stylesheet paints the page.
// This classic script stays external so it also works with the site's CSP.
(() => {
  let theme = 'light'
  try {
    const saved = document.cookie.split(';').map(part => part.trim()).find(part => part.startsWith('mvt25_theme='))?.split('=')[1]
    if (saved === 'light' || saved === 'dark') theme = saved
  } catch { /* A blocked cookie must not prevent the page from opening. */ }
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#fbfaf6' : '#14251c')
  document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme)
})()
