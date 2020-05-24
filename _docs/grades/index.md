---
title: "What-If Grades"
name: index
section: grades
layout: docs
---

# What-If Grades

> The "what-if" grade utilities in Schoology Plus let you calculate impacts to your grade in various hypothetical scenarios.
>
> Note that all references to grade editing in this document and in Schoology Plus refer only to simulated grade changing that takes place on *your computer only*. Schoology Plus cannot change your actual course grade, and all Schoology Plus grade edits will disappear on a page reload.

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