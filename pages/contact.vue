<template>
  <section class="page container">
    <div class="page__content">
      <article class="container container--inner contact__article">
        <header class="contact__header">
          <p class="contact__pre-title">Digitaal Veilig Gedrag in het Basisonderwijs</p>
          <h1 class="contact__title">Contact</h1>
        </header>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
        </form>
        <div class="contact__form">
          <!-- <form
            method="post"
            name="contact"
            class="contact__form"
            netlify
            netlify-honeypot="bot-field"
          >
            <div class="contact__form-inputs">
              <input type="hidden" name="form-name" value="contact">
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
          </form> -->
        </div>
      </article>
    </div>
  </section>
</template>