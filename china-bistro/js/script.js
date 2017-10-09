$(function () {
    $('#navbarToggle').blur((event) => {
        let screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $('#collapsable-nav').collapse('hide');
        }
    });
});

(function (global) {
    let dc = {};
    let homeHtml = 'snippents/home-snippet.html';
    let allCategoriesUrl = 'https://davids-restaurant.herokuapp.com/categories.json';
    let categoriesTitleHtml = 'snippets/categories-title-snippet.html';
    let categoryHtml = 'snippets/category-snippet.html';


    // Insering Html
    let insertHtml = (selector, html) => {
        let targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // Ajax loader
    let showLoading = (selector) => {
        let html = `<div class="text-center">
                        <img src="images/ajax-loader.gif" alt="loader">
                     </div>`;
        insertHtml(selector, html);
    };

    // Return substitute of '{{propName}}' with propValue in given 'string'
    let insertProperty = function (string, propName, propValue) {
        let propToReplace = `{{ ${propName} }}`;
        string = string.replace(new RegExp(propToReplace, 'g'), propValue);
        return string;
    }


    document.addEventListener('DOMContentLoaded', (event) => {
        showLoading('#main-content');
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText) {
                document.querySelector('#main-content').innerHTML = responseText;
            },
            false);
    });

    dc.loadMenuCategories = function () {
        showLoading('#main-content');
        $ajaxUtils.sendGetRequest(
            allCategoriesUrl,
            buildAndShowCategoriesHTML);
    }

    function buildAndShowCategoriesHTML(categories) {
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            function (categoriesTitleHtml) {
                // Retrive single category snipet
                $ajaxUtils.sendGetRequest(
                    categoryHtml,
                    function (categoryHtml) {
                        let categoriesViewHtml =
                            buildAndShowCategoriesHTML(categories,
                                categoriesTitleHtml,
                                categoryHtml);
                        insertHtml('#main-content', categoriesViewHtml);
                    },
                    false);
            },
            false);
    }

    // Using categories data and snippets html
    // build caregories view HTML to be inserted into page
    function buildCategoriesViewHtml(categories,
                                     categoriesTitleHtml,
                                     categoryHtml) {

        let finalHtml = categoriesTitleHtml;
        finalHtml += "<section class='row'>";

        // Loop over categories
        for (let i = 0; i < categories.length; i++) {
            let html = categoryHtml;
            let name = "" + categories[i].name;
            let short_name = "" + categories[i].short_name;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }

    }


    global.$dc = dc;

})(window);