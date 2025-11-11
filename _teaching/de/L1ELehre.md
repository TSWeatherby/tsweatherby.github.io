---
page_id: L1_Elehre
layout: page
title: Elektrizität und Magnetismus für die Grundschule
description: Integrierte Fach- und Didaktikinhalte zum Thema Elektromagnetismus für die Grundschule.
img: assets/img/magnet.svg
importance: 1
category: Lehrerbildung
related_publications: false
---

Dieser Kurs verbindet physikalische Inhalte mit Pädagogik, um angehenden Grundschullehrern Kenntnisse zu den Themen Elektrizität und Magnetismus zu vermitteln.
In Bezug auf die physikalischen Inhalte behandeln wir:
- Elektrostatik – grundlegende Phänomene und Prinzipien;
- Felder – einfache Darstellungen und Gesetze, die elektrische und magnetische Felder regeln;
- Elektrischer Strom – Vorhersage und Beschreibung des Verhaltens in einfachen Stromkreisen;
- Magnetismus – Permanentmagnete, Elektromagnete und Modelle, die wir zu ihrer Erklärung verwenden;
- Stromerzeugung und -verteilung – Kraftwerke, Energiequellen und wie die Energie zu unseren Häusern transportiert wird.

Im Bereich Pädagogik und Praxis untersuchen wir:
- Wetter – Verwendung elektrostatischer Konzepte zum Verständnis von Gewittern und wie man sich sicher verhält.
- Das Unsichtbare greifbar machen – Experimente und Analogien, die es Grundschülern ermöglichen, abstrakte physikalische Größen mit ihren Sinnen zu erleben.
- Alters-/stufengerechte Richtigkeit – Erstellen ehrlicher, zugänglicher Erklärungen und Lernerfahrungen, die den Lernenden Einblicke in die Welt um sie herum ermöglichen.
- Vorbilder – Vorstellung einer Vielzahl historischer Wissenschaftler und Elektroingenieure, damit sich die Lernenden mit den Wissenschaftlerinnen und Wissenschaftlern hinter den Ideen identifizieren können.

### Course materials

Die Materialien werden hier angezeigt, sobald sie hochgeladen wurden.

{% assign L1E_materials = site.static_files | where_exp: "file", "file.path contains '/assets/pdf/en/L1ELehre/'" %}
{% if L1E_materials == empty %}
No downloadable materials are available yet—check back after the next workshop.
{% else %}
<ul>
  {% for resource in L1E_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
