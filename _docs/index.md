---
title: Documentation
name: index
section: null
layout: docs
---

# Schoology Plus Documentation
<h2 class="center">Choose a Topic</h2>

<div class="row">
{% assign index_pages = site.docs | where_exp: "p", "p.section != null" | where: "name", "index" %}
{% for index_page in index_pages %}
<div class="col s12 m6 l4">
    <a href="{{ index_page.url }}">
        <div class="small doc-topic card-panel blue darken-2 hoverable z-depth-3">
            <strong class="white-text">
                {{ index_page.title }}
            </strong>
        </div>
    </a>
</div>
{% endfor %}
</div>