const STORAGE_KEY = 'user-color-scheme';
const applySetting = passedSetting => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);
  if (currentSetting) {
    document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
  }
}
applySetting();