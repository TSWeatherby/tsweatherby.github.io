---
page_id: Theo_2
layout: page
title: Theoretische Physik 2 für das gymnasiale Lehramt
description: Begleitworkshop zur Elektrodynamik.
img: assets/img/gauss.svg
importance: 3
category: Lehrerbildung
related_publications: false
---

Platzhalter


### Course materials

Handouts appear here as soon as they are uploaded.

{% assign theo2_materials = site.static_files | where_exp: "file", "file.path contains '/assets/pdf/en/Theo2/'" %}
{% if theo2_materials == empty %}
No downloadable materials are available yet—check back after the next workshop.
{% else %}
<ul>
  {% for resource in theo2_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
