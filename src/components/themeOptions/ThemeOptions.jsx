export const ThemeOptions = () => {
  return (
    <form className='color-picker'>
      <fieldset>
        <legend className='visually-hidden'>
          Pick a color theam
        </legend>
        <label className='visually-hidden' for="theme">Light</label>
        <input type='radio' name='theme' id='light'></input>
        <label className='visually-hidden' for="theme">Blue theme</label>
        <input type='radio' name='theme' id='blue' ></input>
        <label className='visually-hidden' for="theme">Dark theme</label>
        <input type='radio' name='theme' id='dark' ></input>
      </fieldset>
    </form>
  )
}