---
page_id: teaching
layout: page
title: teaching
permalink: /teaching/
description: Courses, labs, and outreach activities.
nav: true
nav_order: 6
display_categories: [Undergraduate, School]
horizontal: false
---

<!-- pages/teaching.md -->
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized teaching items -->
    {% for category in page.display_categories %}
      {% assign category_label = site.data[site.active_lang].strings.categories[category] | default: category %}
      <a id="{{ category_label }}" href=".#{{ category_label }}">
        <h2 class="category">{{ category_label }}</h2>
      </a>
      {% assign categorized_teaching = site.teaching | where: "category", category %}
      {% assign sorted_teaching = categorized_teaching | sort: "importance" %}
      <!-- Generate cards for each teaching activity -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for project in sorted_teaching %}
              {% include projects_horizontal.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_teaching %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  {% else %}
    <!-- Display teaching activities without categories -->
    {% assign sorted_teaching = site.teaching | sort: "importance" %}
    <!-- Generate cards for each teaching activity -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_teaching %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for project in sorted_teaching %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
