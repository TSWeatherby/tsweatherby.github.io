---
page_id: Theo_3
layout: page
title: Theoretical Physics for Grammar School Teachers 3
description: Companion workshop for the Theotretical Physics 3 lecture cycle.
img: assets/img/QM.svg
importance: 1
category: Undergraduate
related_publications: false
---

This companion course supports the lecture series on Special Relativity and Quantum Mechanics aimed at grammar school teachers. We revisit each lecture topic with classroom-oriented explanations that bridge the university content and the expectations of A-level physics curricula.

Across the semester we focus on three threads:

- bringing formal derivations down to qualitative models that can be discussed with advanced secondary pupils;
- surfacing classroom-ready analogies, experiments, and discussion prompts that demystify relativity and quantum concepts;
- curating didactic tips, misconceptions, and follow-up activities teachers can integrate immediately.


### Course materials

Handouts appear here as soon as they are uploaded.

{% assign theo3_materials = site.static_files | where_exp: "file", "file.path contains '/assets/pdf/en/Theo3/'" %}
{% if theo3_materials == empty %}
No downloadable materials are available yet—check back after the next workshop.
{% else %}
<ul>
  {% for resource in theo3_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
