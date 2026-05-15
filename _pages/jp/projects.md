---
page_id: projects
layout: page
title: プロジェクト
permalink: /projects/
description: 進行中および過去の研究プロジェクト。
nav: true
nav_order: 3
display_categories: [work, fun]
horizontal: false
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      <a id="{{ site.data[site.active_lang].strings.categories[category] }}" href=".#{{ site.data[site.active_lang].strings.categories[category] }}">
        <h2 class="category">{{ site.data[site.active_lang].strings.categories[category] }}</h2>
      </a>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endfor %}
  {% else %}
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>
