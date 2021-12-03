const applySetting = passedSetting => {
  let currentSetting = passedSetting || localStorage.getItem('user-color-scheme');
  if (currentSetting) {
    document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
  }
}
applySetting();