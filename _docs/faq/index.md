---
title: "Frequently Asked Questions"
name: index
section: faq
layout: docs
---

# Frequently Asked Questions
<h2 class="center">Choose a Topic</h2>

<div class="row">
{% assign section_pages = site.docs | where_exp: "p", "p.section == page.section" | where_exp: "p", "p.name != 'index'" %}
{% for section_page in section_pages %}
<div class="col s12 m6 l4">
    <a href="{{ section_page.url }}">
        <div class="small doc-topic card-panel blue darken-2 hoverable z-depth-3">
            <strong class="white-text">
                {{ section_page.title }}
            </strong>
        </div>
    </a>
</div>
{% endfor %}
</div>