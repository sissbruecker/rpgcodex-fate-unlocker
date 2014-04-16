/**
 * Created with IntelliJ IDEA.
 * User: Sascha
 * Date: 16.04.14
 * Time: 04:53
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
