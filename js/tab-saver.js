/**
 * Created with IntelliJ IDEA.
 * User: Sascha
 * Date: 06.04.14
 * Time: 21:31
 * To change this template use File | Settings | File Templates.
 */

// Reopen last tab
(function () {

    var tabIndex = $.cookie('last-tab');

    if (tabIndex) {

        var tab = $('.topictabs > a').get(tabIndex);

        tab.click();
    }
})();

// Store the last clicked tab
$('.topictabs > a').click(function () {

    var tabIndex = $(this).index();

    $.cookie('last-tab', tabIndex);
});