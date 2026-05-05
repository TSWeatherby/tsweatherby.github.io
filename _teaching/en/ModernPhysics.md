---
page_id: Modern Physics
layout: page
title: Modern Physics and its Pedagogy
description: Integrated Subject and Pedagogy course on modern physics for secondary school teachers.
img: assets/img/black-body.svg
importance: 1
category: Undergraduate
related_publications: false
---

This course deepens the subject-didactic treatment of modern physics for future secondary school teachers.
It connects central ideas from 20th- and 21st-century physics with ways of making abstract phenomena teachable in school.

In terms of physics content, we cover:
- atomic models and the transition from particle ideas to models of the atom;
- light models, the speed of light, and the role of model choice in explanation;
- stars, astrophysics, and modern observational evidence;
- quantum physics and the basic ideas of quantum mechanics;
- solid-state physics, magnetism, and the laser;
- radioactivity, radiation, and laboratory practice;
- particle physics, current research contexts, and possible links to a GSI excursion;
- relativity and its role in a coherent picture of modern physics.

In terms of pedagogy and practice, we examine:
- modelling competencies - how learners construct, evaluate, revise, and use models in modern physics;
- representational competencies - moving productively between diagrams, mathematical descriptions, experiments, simulations, verbal explanations, and everyday representations;
- analogical learning - using analogies carefully, including where they support understanding and where they break down;
- everyday anchoring - tying abstract phenomena from modern physics to familiar objects, technologies, and observations without losing conceptual accuracy.



### Course materials

Materials appear here as soon as they are uploaded. Please note that the downloadable materials are in German.

{% assign modern_physics_materials = "/assets/pdf/de/ModernPhysics" | list_material_files %}
{% if modern_physics_materials == empty %}
No downloadable materials are available yet. Check back after the next workshop.
{% else %}
<ul>
  {% for resource in modern_physics_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
