---
page_id: Modern Physics
layout: page
title: Fachdidaktische Vertiefung der modernen Physik
description: Fachdidaktischer Kurs zur modernen Physik für das Lehramt an weiterführenden Schulen.
img: assets/img/black-body.svg
importance: 1
category: Lehrerbildung
related_publications: false
---

Dieser Kurs vertieft die fachdidaktische Behandlung der modernen Physik für angehende Lehrkräfte der weiterführenden Schule.
Er verbindet zentrale Ideen der Physik des 20. und 21. Jahrhunderts mit der Frage, wie abstrakte Phänomene im Unterricht zugänglich gemacht werden können.

In Bezug auf die physikalischen Inhalte behandeln wir:
- Atommodelle und den Übergang von Teilchenvorstellungen zu Modellen des Atoms;
- Lichtmodelle, die Lichtgeschwindigkeit und die Rolle der Modellwahl beim Erklären;
- Sterne, Astrophysik und moderne Beobachtungsevidenz;
- Quantenphysik und Grundideen der Quantenmechanik;
- Festkörperphysik, Magnetismus und den Laser;
- Radioaktivität, Strahlung und Praktikumsbezüge;
- Teilchenphysik, aktuelle Forschungsbezüge und mögliche Anknüpfungen an eine GSI-Exkursion;
- Relativitätstheorie und ihren Beitrag zu einem zusammenhängenden Bild der modernen Physik.

Im Bereich Fachdidaktik und Unterrichtspraxis untersuchen wir:
- Modellierungskompetenzen - wie Lernende Modelle entwickeln, prüfen, überarbeiten und nutzen;
- Repräsentationskompetenzen - den produktiven Wechsel zwischen Diagrammen, mathematischen Beschreibungen, Experimenten, Simulationen, sprachlichen Erklärungen und alltagsnahen Darstellungen;
- analoges Lernen - den sorgfältigen Einsatz von Analogien, einschließlich ihrer Stärken und Grenzen;
- Alltagsanbindung - wie abstrakte Phänomene der modernen Physik mit vertrauten Gegenständen, Technologien und Beobachtungen verbunden werden können, ohne fachliche Genauigkeit zu verlieren.



### Kursmaterialien

Die Materialien werden hier angezeigt, sobald sie hochgeladen wurden.

{% assign modern_physics_materials = "/assets/pdf/de/ModernPhysics" | list_material_files %}
{% if modern_physics_materials == empty %}
Es sind noch keine Materialien zum Herunterladen verfügbar - schauen Sie nach dem nächsten Seminar wieder vorbei.
{% else %}
<ul>
  {% for resource in modern_physics_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
