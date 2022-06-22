/**
 * Butterfly
 * repalce link
 * By ImCaO
 */

'use strict'

hexo.extend.filter.register("markdown-it:renderer", function (md) {
  md.use(require("markdown-it-replace-link"), {
    replaceLink: function (link, env) {
      const { replace_link } = hexo.theme.config
      if (link.toString().startsWith(replace_link.alias)) {
        return replace_link.replacement + link.toString().substring(replace_link.alias.length);
      } else {
        return link.toString();
      }
    },
  });
});

hexo.extend.filter.register('before_post_render', function (data) {
  const { replace_link } = hexo.theme.config
  const cover = data.cover
  if (cover && cover.toString().startsWith(replace_link.alias)) {
    data.cover = replace_link.replacement + cover.toString().substring(replace_link.alias.length);
  }
  return data
})
