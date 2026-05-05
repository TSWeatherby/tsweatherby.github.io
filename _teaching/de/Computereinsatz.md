---
page_id: Computereinsatz
layout: page
title: Computereinsatz im Physikunterricht
description: Fachdidaktisches Seminar zum Einsatz von Computern und digitalen Werkzeugen im Physikunterricht.
img: assets/img/dikolan-digital-competencies.png
importance: 1
category: Lehrerbildung
related_publications: false
---

Dieses Seminar behandelt den zielgerichteten Einsatz von Computern und digitalen Werkzeugen im Physikunterricht.
Es ist in zwei miteinander verbundene Stränge gegliedert: praktische Techniken für den Computereinsatz im Unterricht und lernpsychologische bzw. lerntheoretische Werkzeuge, mit denen diese Techniken für den Unterricht analysiert und umgesetzt werden.
Im Mittelpunkt steht die Frage, wann digitale Medien physikalisches Lernen sinnvoll unterstützen, wie sie Unterrichtspraxis verändern und wie ihr Einsatz fachdidaktisch begründet werden kann.

Der technische Strang behandelt konkrete Einsatzweisen von Computern und digitalen Medien im Physikunterricht:
- Videoanalyse und die Erstellung erklärender oder experimenteller Videos;
- Simulationen zum Erkunden, Darstellen und Prüfen physikalischer Modelle;
- rechnergestützte Modellbildung als technische und konzeptuelle Tätigkeit;
- digitale Messwerterfassung, Datenverarbeitung und Interpretation;
- Smartphone-Experimente als niedrigschwellige Werkzeuge für den Physikunterricht;
- Dokumentation, Präsentation, Kollaboration, Kommunikation, Assessment und Feedback mit digitalen Plattformen.

Der lerntheoretische Strang liefert Kriterien für Analyse und Unterrichtsplanung:
- Ziele, Szenarien und Entscheidungskriterien für die Auswahl digitaler Werkzeuge;
- kognitive Belastung und die Gestaltung übersichtlicher Lernumgebungen;
- CTML und die Analyse multimedialer Lernmaterialien;
- die Rolle von Repräsentationen, Interaktion, Feedback und Lernaktivität;
- die Übersetzung technischer Möglichkeiten in fachdidaktische Entscheidungen.

Das Seminar verbindet kurze Inputphasen mit praktischen Aufgaben, Diskussionen und von Studierenden entwickelten Unterrichtsmaterialien.
Dabei werden technische Möglichkeiten immer mit fachdidaktischen Entscheidungen verknüpft: wann ein Werkzeug ein Phänomen klärt, wann es zusätzliche kognitive Belastung erzeugt und wie digitale Repräsentationen in zusammenhängende Lernprozesse eingebettet werden können.



### Kursmaterialien

Die Materialien werden hier angezeigt, sobald sie hochgeladen wurden.

{% assign computereinsatz_materials = "/assets/pdf/de/Computereinsatz" | list_material_files %}
{% if computereinsatz_materials == empty %}
Es sind noch keine Materialien zum Herunterladen verfügbar - schauen Sie nach dem nächsten Seminar wieder vorbei.
{% else %}
<ul>
  {% for resource in computereinsatz_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
