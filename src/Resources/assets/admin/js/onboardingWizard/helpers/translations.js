import Translator from 'bazinga-translator';
(async () => {
    const locale = document.documentElement.lang;
    const res = await fetch(`/translations/messages.json?locales=${locale}`);
    const json = await res.json();
    Translator.fromJSON(json);
})();
export default Translator;
