/**
 * Created with IntelliJ IDEA.
 * User: Sascha
 * Date: 16.04.14
 * Time: 04:53
 * To change this template use File | Settings | File Templates.
 */

var extendPost = function (post) {

    post = $(post);

    // Remove bottom bar if exists
    post.find('div.bottomActions').remove();

    // Get message info container
    var messageInfo = post.find('.messageInfo');

    // Get action links
    var actions = messageInfo.find('.publicControls');

    // Clone actions for bottom bar
    var bottomActions = actions.clone();

    // Create click delegates for original links
    var topLinks = actions.find('a');
    var bottomLinks = bottomActions.find('a');

    $.each(bottomLinks, function (j, link) {

        link = $(link);
        link.click(function (e) {

            e.preventDefault();

            // Trigger click on original link
            topLinks[j].click();

            // Update bottom action bar, brofist label may have changed
            setTimeout(function () {
                extendPost(post);
            }, 500);
        });
    });

    // Create action bar at bottom
    var bottomBar = $('<div class="bottomActions" style="border-top: solid 1px #353F55; margin-top: 10px; padding-top: 5px; padding-bottom: 15px; font-size: 11px;"></div>');

    bottomBar.append(bottomActions);
    messageInfo.append(bottomBar);
};

(function () {

    // Get all posts
    var posts = $('form.InlineModForm').find('.message');

    $.each(posts, function (i, post) {

        extendPost(post);
    });

})();
