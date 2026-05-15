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

Dieser Begleitkurs unterstützt die Vorlesungsreihe zur Theoretischen Physik 2 für das gymnasiale Lehramt. Im Mittelpunkt steht die Elektrodynamik und ihre Verbindung zu späterem Oberstufenunterricht.

Im Laufe des Semesters konzentrieren wir uns auf drei Themenbereiche:

- die Übersetzung formaler Herleitungen in qualitative Modelle, die im Unterricht diskutiert werden können;
- die Verknüpfung von Feld-, Potenzial- und Energievorstellungen mit schulnahen Experimenten und Darstellungen;
- die didaktische Reflexion typischer Aufgaben, Fehlvorstellungen und Modellierungsentscheidungen.


### Kursmaterialien

Die Materialien werden hier angezeigt, sobald sie hochgeladen wurden.

{% assign theo2_materials = "/assets/pdf/de/Theo2" | list_material_files %}
{% if theo2_materials == empty %}
Es sind noch keine Materialien zum Herunterladen verfügbar – schauen Sie nach dem nächsten Seminar wieder vorbei.
{% else %}
<ul>
  {% for resource in theo2_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
