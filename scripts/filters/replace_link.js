/**
 * Butterfly
 * repalce link
 * By ImCaO
 */

"use strict";

hexo.extend.filter.register("before_post_render", function (data) {
  const { replace_link } = hexo.theme.config;
  const cover = data.cover;
  if (cover) {
    let num = cover.toString().lastIndexOf("/");
    data.cover = replace_link.replacement + '/assets/covers/' + cover.toString().substring(num + 1);
  }
  if (data) {
    const reg = new RegExp(replace_link.alias, "g");
    let num = data.source.lastIndexOf(".");
    data.content = data.content.replace(reg, replace_link.replacement + '/' + data.source.substring(0, num));
  }
  return data;
});
