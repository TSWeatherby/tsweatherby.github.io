---
page_id: L1_Elehre
layout: page
title: Electromagnetism for Primary School Teachers
description: Integrated content and pedagogy of electromagnetism for primary school.
img: assets/img/magnet.svg
importance: 1
category: Undergraduate
related_publications: false
---

This course blends physics content and pedagogy to develop aspiring primary teachers' knowledge on the topics of electricity and magnetism.
In terms of physics content, we cover:
- Electrostatics - fundamental phenomena and principles;
- Fields - simple representations and laws that govern electric and magnetic fields;
- Current electricity - predicting and describing behaviour in simple circuits;
- Magnetism - Permanent magnets, electromagnets and models we use to explain them;
- Power generation and distribution - power plants, sources of energy and how it is transfered to our houses.

In terms of pedagogy and practice, we examine:
- Weather - using electrostatic ideas to understand lightning storms and how to stay safe.
- Making the invisible tangible - experiments and analogies to allow primary learners to experience abstract physical quantities through their senses.
- Age/Stage-appropriate accuracy - crafting honest, accessible explainations and learning experiences that allow learners insight into the world around them.
- Role models - introducing a wide range of historical scientists and electrical engineers, so that learners can see themselves in the scientists behind the ideas.



### Course materials

Handouts appear here as soon as they are uploaded.

{% assign theo3_materials = "/assets/pdf/en/L1ELehre" | list_material_files %}
{% if theo3_materials == empty %}
No downloadable materials are available yet. Check back after the next workshop.
{% else %}
<ul>
  {% for resource in theo3_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
