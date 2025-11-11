---
page_id: Theo_1
layout: page
title: Theoretische Physik 1 für das gymnasiale Lehramt
description: Begleitworkshop zur Newtonschen und Lagrange-Mechanik.
img: assets/img/lagrange.svg
importance: 2
category: Lehrerbildung
related_publications: false
---

Platzhalter


### Course materials

Handouts appear here as soon as they are uploaded.

{% assign theo1_materials = site.static_files | where_exp: "file", "file.path contains '/assets/pdf/en/Theo1/'" %}
{% if theo1_materials == empty %}
No downloadable materials are available yet—check back after the next workshop.
{% else %}
<ul>
  {% for resource in theo1_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
