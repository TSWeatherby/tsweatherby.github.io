---
page_id: apps
layout: page
title: Apps
permalink: /apps/
description: My educational applications published under the Department for Physics Education at Frankfurt University.
nav: true
nav_order: 7
display_categories: [Mechanics, Electricity]
horizontal: false
google_site_verification: 1jLkTPNYkzl9I2OKFi8GTwJt774jpSTqjc46edtCyyg
---

<!-- pages/apps.md -->
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized app entries -->
    {% for category in page.display_categories %}
      {% assign category_label = site.data[site.active_lang].strings.categories[category] | default: category %}
      <a id="{{ category_label }}" href=".#{{ category_label }}">
        <h2 class="category">{{ category_label }}</h2>
      </a>
      {% assign categorized_apps = site.apps | where: "category", category %}
      {% assign sorted_apps = categorized_apps | sort: "importance" %}
      <!-- Generate cards for each app entry -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for project in sorted_apps %}
              {% include projects_horizontal.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_apps %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  {% else %}
    <!-- Display app entries without categories -->
    {% assign sorted_apps = site.apps | sort: "importance" %}
    <!-- Generate cards for each app entry -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_apps %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_apps %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
