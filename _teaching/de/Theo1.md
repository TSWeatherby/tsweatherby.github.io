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

Dieser Begleitkurs unterstützt die Vorlesungsreihe zur Theoretischen Physik 1 für das gymnasiale Lehramt.
Im Laufe des Semesters konzentrieren wir uns auf drei Themenbereiche:

- die Aktivierung und Klärung von Vorwissen;
- die sichere Anwendung zentraler Werkzeuge der theoretischen Mechanik;
- die didaktische Reflexion typischer Aufgaben, Fehlvorstellungen und Modellierungen, damit die Inhalte für den späteren Oberstufenunterricht nutzbar werden.



### Kursmaterialien

Die Materialien werden hier angezeigt, sobald sie hochgeladen wurden. Bitte beachten Sie, dass die online bereitgestellten Foliensätze nicht vollständig sind: urheberrechtlich geschütztes Material, das im Workshop verwendet werden darf, aber nicht online veröffentlicht werden kann, wurde für diese Website entfernt.

{% assign theo1_materials = "/assets/pdf/de/Theo1" | list_material_files %}
{% if theo1_materials == empty %}
Es sind noch keine Materialien zum Herunterladen verfügbar – schauen Sie nach dem nächsten Seminar wieder vorbei.
{% else %}
<ul>
  {% for resource in theo1_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
