// parses html to isolate for tags containing products info
module.exports = (html) => {
    try {
        if (!(/^<!DOCTYPE html>/.test(html))) throw 'Argument NOT HTML string';

        // find and separate the script tags from the html body
        const script = scriptFinder(html);
        // const itemsJSON = scripts.match(//);
        return script;
    } catch (err) {
        console.log(err);
        console.trace();
    }
};

const scriptFinder = (html) => {
    return html.match(/<script id\=\"linkJSON\" type=\"text\/json\" data-comp\=\"PageJSON \"\>(.*)<\/script>/).pop();
}