---
page_id: Theo_2
layout: page
title: Theoretical Physics for Future Secondary Physics Teachers 2
description: Companion workshop on Electrodynamics.
img: assets/img/gauss.svg
importance: 1
category: Undergraduate
related_publications: false
---

This companion course supports the lecture series on Theoretical Physics 2 for future secondary physics teachers. We revisit electrodynamics with classroom-oriented explanations that bridge university content and the needs of upper-secondary physics teaching.

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
