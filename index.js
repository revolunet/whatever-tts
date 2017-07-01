var fetch = require("node-fetch");

const DEFAULT_OPTIONS = {
  lang: 'en'
}

const getGoogleTranslateUrl = (text, lang) => `http://translate.google.com/translate_tts?tl=${lang}&q=${encodeURIComponent(text)}&client=gtx&ie=UTF-8`

const getUrlBody = url => fetch(url).then(res => res.body).catch(e => console.log(e));

const tts = (text, options=DEFAULT_OPTIONS)  => getUrlBody(getGoogleTranslateUrl(text, options.lang));

module.exports = tts