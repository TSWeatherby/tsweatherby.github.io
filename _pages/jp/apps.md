---
page_id: apps
layout: page
title: アプリ
permalink: /apps/
description: フランクフルト・ゲーテ大学の物理教育研究所で公開している教育用アプリです。
nav: true
nav_order: 7
display_categories: [力学, 電気]
horizontal: false
google_site_verification: 1jLkTPNYkzl9I2OKFi8GTwJt774jpSTqjc46edtCyyg
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      {% assign category_label = site.data[site.active_lang].strings.categories[category] | default: category %}
      <a id="{{ category_label }}" href=".#{{ category_label }}">
        <h2 class="category">{{ category_label }}</h2>
      </a>
      {% assign categorized_apps = site.apps | where: "category", category %}
      {% assign sorted_apps = categorized_apps | sort: "importance" %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_apps %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endfor %}
  {% else %}
    {% assign sorted_apps = site.apps | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_apps %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>
