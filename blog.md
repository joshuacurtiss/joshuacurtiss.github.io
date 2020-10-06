---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
---

# Josh's thoughts on technology! #

My thoughts on Apple, Microsoft, Linux, source control, Node.js, ColdFusion, JavaScript, Raspberry Pi, and other fun stuff!

<div class="postlist">
{% for post in site.posts %}
    <a href="{{ post.url }}">{{ post.title }}</a>
    <em>{{ post.date | date_to_string}}</em>
    {{ post.excerpt }}
{% endfor %}
</div>