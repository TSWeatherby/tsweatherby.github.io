---
page_id: Theo_1
layout: page
title: Theoretical Physics for Future Secondary Physics Teachers 1
description: Companion workshop on Newtonian and Lagrangian Mechanics.
img: assets/img/lagrange.svg
importance: 1
category: Undergraduate
related_publications: false
---

This companion course supports the lecture series on Theoretical Physics 1 for future secondary physics teachers.
Across the semester we focus on three threads:

- activating and clarifying prior knowledge;
- confidently applying central tools of theoretical mechanics;
- reflecting didactically on typical tasks, misconceptions, and models so that the content becomes useful for future upper-secondary teaching.


### Course materials

Materials appear here as soon as they are uploaded. Please note that the downloadable materials are in German. The slide decks provided online are not complete: copyrighted material that may be used in the workshop but cannot be posted online has been removed from this website.

{% assign theo1_materials = "/assets/pdf/de/Theo1" | list_material_files %}
{% if theo1_materials == empty %}
No downloadable materials are available yet. Check back after the next workshop.
{% else %}
<ul>
  {% for resource in theo1_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
