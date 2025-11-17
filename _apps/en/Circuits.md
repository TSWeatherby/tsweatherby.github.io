---
page_id: Electricity_Simulation
layout: page
title: Simulation of Electrical Properties
description: Simulation visualising potential in different ways
img: assets/img/gauss.svg
importance: 2
category: Electricity
related_publications: false
---

This companion course supports the lecture series on Special Relativity and Quantum Mechanics aimed at grammar school teachers. We revisit each lecture topic with classroom-oriented explanations that bridge the university content and the expectations of A-level physics curricula.

Across the semester we focus on three threads:

- bringing formal derivations down to qualitative models that can be discussed with advanced secondary pupils;
- surfacing classroom-ready analogies, experiments, and discussion prompts that demystify relativity and quantum concepts;
- curating didactic tips, misconceptions, and follow-up activities teachers can integrate immediately.


### Course materials

Handouts appear here as soon as they are uploaded.

{% assign theo3_materials = "/assets/pdf/en/Theo2" | list_material_files %}
{% if theo3_materials == empty %}
No downloadable materials are available yet. Check back after the next workshop.
{% else %}
<ul>
  {% for resource in theo3_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
