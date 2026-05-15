---
page_id: Theo_3
layout: page
title: Theoretische Physik 3 für das gymnasiale Lehramt
description: Begleitworkshop zur Spezielle Relativitätstheorie und Quantenmechanik.
img: assets/img/QM.svg
importance: 4
category: Lehrerbildung
related_publications: false
---

Dieser Begleitkurs unterstützt die Vorlesungsreihe über Spezielle Relativitätstheorie und Quantenmechanik, die sich an Gymnasiallehrer richtet. Wir greifen jedes Vorlesungsthema mit unterrichtsorientierten Erläuterungen auf, die eine Brücke zwischen den Inhalten der Universität und den Erwartungen des Physiklehrplans der Oberstufe schlagen.

Im Laufe des Semesters konzentrieren wir uns auf drei Themenbereiche:

- die Übertragung formaler Ableitungen auf qualitative Modelle, die mit Oberstufenschülern diskutiert werden können;
- die Erarbeitung von unterrichtsfertigen Analogien, (Gedanken-)Experimenten und Diskussionsanregungen, die Relativitäts- und Quantenkonzepte verständlich machen;
- die Zusammenstellung didaktischer Tipps, häufiger Probleme und Folgeaktivitäten, die Lehrer sofort in ihren Unterricht integrieren können.

### Kursmaterialien

Die Materialien werden hier angezeigt, sobald sie hochgeladen wurden.

{% assign theo3_materials = "/assets/pdf/de/Theo3" | list_material_files %}
{% if theo3_materials == empty %}
Es sind noch keine Materialien zum Herunterladen verfügbar – schauen Sie nach dem nächsten Seminar wieder vorbei.
{% else %}
<ul>
  {% for resource in theo3_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
