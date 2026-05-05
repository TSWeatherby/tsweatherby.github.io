---
page_id: Computereinsatz
layout: page
title: Digital Tools in Physics Education
description: Pedagogy seminar on using computers and digital tools in physics lessons.
img: assets/img/dikolan-digital-competencies.png
importance: 1
category: Undergraduate
related_publications: false
---

This seminar focuses on purposeful uses of computers and digital tools in physics education.
It is organised around two connected strands: practical techniques for using computers in lessons, and learning-theoretical tools for analysing how these techniques can be implemented in the classroom.
Students learn to judge where digital media genuinely support physics learning, how they change classroom practice, and how their use can be justified didactically.

The technical strand addresses concrete ways of using computers and digital media in physics lessons:
- video analysis and the creation of explanatory or experimental videos;
- simulations for exploring, representing, and testing physical models;
- computational model building as both a technical and conceptual activity;
- digital measurement acquisition, data processing, and interpretation;
- smartphone experiments as accessible tools for school physics;
- documentation, presentation, collaboration, communication, assessment, and feedback with digital platforms.

The learning-theory strand provides criteria for analysing and designing classroom use:
- goals, scenarios, and decision criteria for choosing digital tools;
- cognitive load and the design of clear learning environments;
- CTML and the analysis of multimedia learning materials;
- the role of representations, interaction, feedback, and learner activity;
- the translation of technical affordances into subject-didactic decisions.

The seminar combines short input phases with practical tasks, discussion, and student-developed teaching materials.
Students connect technical affordances with subject-didactic decisions: when a tool clarifies a phenomenon, when it adds unnecessary cognitive load, and how digital representations can be integrated into coherent physics learning.



### Course materials

Materials appear here as soon as they are uploaded. Please note that the downloadable materials are in German.

{% assign computereinsatz_materials = "/assets/pdf/de/Computereinsatz" | list_material_files %}
{% if computereinsatz_materials == empty %}
No downloadable materials are available yet. Check back after the next workshop.
{% else %}
<ul>
  {% for resource in computereinsatz_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
