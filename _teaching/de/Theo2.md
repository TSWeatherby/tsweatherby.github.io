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

{% assign theo3_materials = "/assets/pdf/de/Theo2" | list_material_files %}
{% if theo3_materials == empty %}
Es sind noch keine Materialien zum Herunterladen verfügbar – schauen Sie nach dem nächsten Seminar wieder vorbei.
{% else %}
<ul>
  {% for resource in theo3_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
