<template>
  <section class="page container">
    <div class="page__content">
      <article class="container container--inner contact__article">
        <header class="contact__header">
          <p class="contact__pre-title">Digitaal Veilig Gedrag in het Basisonderwijs</p>
          <h1 class="contact__title">Contact</h1>
        </header>
        <div class="contact__form">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="form"
            action="/bedankt"
          >
            <div class="contact__form-inputs">
              <input 
                type="hidden"
                name="form-name"
                value="contact"
              />

              <div class="form__group form__group--half">
                <label for="naam" class="form__label">
                  <span>Naam</span>
                  <sup>*</sup>
                </label>
                <input
                  type="text"
                  name="naam"
                  id="naam"
                  class="form__input"
                  required
                />
              </div>

              <div class="form__group form__group--half">
                <label for="email" class="form__label">
                  <span>E-mailadres</span>
                  <sup>*</sup>
                  </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form__input"
                  required
                />
              </div>

              <div class="form__group">
                <label for="onderwerp" class="form__label">
                  <span>Onderwerp</span>
                  <sup>*</sup>
                </label>
                <input
                  type="text"
                  name="onderwerp"
                  id="onderwerp"
                  class="form__input"
                  required
                />
              </div>

              <div class="form__group">
                <label for="bericht" class="form__label">
                  <span>Bericht</span>
                  <sup>*</sup>
                </label>
                <textarea
                  name="bericht"
                  id="bericht"
                  cols="18"
                  rows="10"
                  class="form__input"
                  required
                ></textarea>
              </div>
            </div>
            <div class="form__submit">
              <button type="submit" class="link">
                <span>Verzend</span>
                <Resources type="chevron-right" />
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  </section>
</template>