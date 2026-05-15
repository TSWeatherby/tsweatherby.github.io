---
page_id: teaching
layout: page
title: 教育
permalink: /teaching/
description: 教員養成、学校向け教材、シミュレーション。
nav: true
nav_order: 6
display_categories: [教員養成, 学校, シミュレーション]
horizontal: false
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      {% assign category_label = site.data[site.active_lang].strings.categories[category] | default: category %}
      <a id="{{ category_label }}" href=".#{{ category_label }}">
        <h2 class="category">{{ category_label }}</h2>
      </a>
      {% assign categorized_teaching = site.teaching | where: "category", category %}
      {% assign sorted_teaching = categorized_teaching | sort: "importance" %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_teaching %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endfor %}
  {% else %}
    {% assign sorted_teaching = site.teaching | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_teaching %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>
