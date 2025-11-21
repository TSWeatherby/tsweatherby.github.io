---
page_id: iVoltage
layout: page
title: iVoltage
description: Influence of Media Use and Student Grouping on Learning Gains and Affective Indicators
img: assets/img/iVoltageARVis.png
importance: 1
category: work
related_publications: true
---

iVoltage is a research and development project that asks a simple question: **what features of visualisations and augmented reality help people understand electric circuits better?** We design digital tools that make invisible electrical quantities (like current and voltage) visible, and then study how well they support learning in undergraduate physics laboratory courses and teacher education. {% cite weatherby2020ivoltage %}

Before building the tools, we first worked out what “good” visualisations for simple DC circuits should look like – drawing on theories of multimedia learning and representations in physics education - considering the impact these would have on the cognitive load of the learners using them. These design principles then shaped the representation-based simulation and visualisation of measurement data used throughout the project. {% cite weatherby2020visualisierungen weatherby2021reprasentationsbasierte %}

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/iVoltage.svg" title="iVoltage Logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    iVoltage Logo – making invisible electrical quantities visible through digital representations.
</div>

In the project, we explore three ways of representing the physical quantities that govern the behavious of direct-current (DC) circuits:

- **Dashboard visualisation on a tablet:** Measurement data from real circuit components is collected via Bluetooth and displayed on an iPad as a dashboard of analogue-style dials. Each dial shows the voltage across, or current through, a specific component, keeping all the key information in one place while students carry out experimental tasks with the physical circuit. This maintains *spatial contiguity* and *temporal contiguity* between all of the measurement data.

- **Augmented Reality (AR):** The same measurement data can be shown directly in the camera view. When students look at their circuit through the tablet, the dials appear to “float” above the real components they belong to. This maintains *spatial contiguity*, of electrical component at measurement data. This aims to reduce the need to look back and forth between apparatus and screen by bringing the numbers directly into the experimental setup, reducing the cognitive load from keeping these in short term memory. {% cite kapp2020using %}

- **Interactive simulation:** A browser-based simulation shows electric potential as a smooth colour gradient along each wire (for example blue–white–red) or as a height above the circuit and represents current by the thickness and direction of arrows. These representational features allow the user a non-numeric way to decode changes that have happened in the circuit, as well as, the ability to link them to common analogies for teaching electricity. Learners can quickly build and modify circuits and immediately see how changes affect the invisible electrical changes. The design and classroom use of this simulation are described in detail in our German-language papers, {% cite weatherby2020ivoltage weatherby2021reprasentationsbasierte %}, and be accessed [here]({{ "/simulation_en.html" | relative_url }}).

These three approaches are illustrated in the images below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/iVoltageARVis.png" title="Measurement information shown in Augmented Reality." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/iVoltageDashiPad.png" title="Measurement information shown on an iPad dashboard." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/iVoltageSimCol.png" title="Simulation displaying potential as colour." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    From left to right: measurement data embedded in the real setup via Augmented Reality; the same data collected on an iPad dashboard; and a simulation that displays electric potential as colour and current as arrows.
</div>

Across several quasi-experimental and experimental studies in inquiry-based, university physics practical courses, we used these tools to compare different media settings (e.g. AR versus tablet dashboard versus multimeters) and to investigate how students should best work together with them (alone, in pairs, or in small groups). We measured not only what students learned about DC electricity, but also the *cognitive load* (how mentally demanding the tasks felt and how usable they found the systems. {% cite kapp2020effects kapp2020using weatherby2024not %}

A central result from iVoltage is that **“more high-tech” does not automatically mean “more effective”**. Comparative studies in undergraduate laboratory courses show that AR setups can be highly usable and engaging, but that carefully designed 2D displays and simulations often lead to **similar learning outcomes** than more complex AR environments. {% cite kapp2020effects kapp2020using weatherby2024not %} In an upcoming publication, we also examine what happens when students use AR tools alone versus in pairs.

Within iVoltage, my contributions span **designing the visual representations**, **developing and deploying the simulations in university contexts**, and **planning, conducting and analysing studies**.

