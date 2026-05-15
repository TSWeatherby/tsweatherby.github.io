---
page_id: Computereinsatz
layout: page
title: 物理教育におけるデジタルツール
description: 物理授業でコンピュータとデジタルツールを活用するための教育学セミナー。
img: assets/img/dikolan-digital-competencies.png
importance: 1
category: 教員養成
related_publications: false
---

このセミナーでは、物理教育におけるコンピュータとデジタルツールの目的ある利用を扱います。授業で使える実践的な技術と、それらを学習理論・物理教育学の観点から分析する方法を結び付けます。

扱う内容には、動画分析、シミュレーション、計算モデル、デジタル計測、スマートフォン実験、協働・コミュニケーション・評価のためのデジタルプラットフォームが含まれます。

学習理論の観点からは、ツール選択の基準、認知負荷、マルチメディア学習、表象、相互作用、フィードバック、学習者の活動性を検討します。

### 教材

教材はアップロード後に表示されます。ダウンロード可能な資料はドイツ語です。

{% assign computereinsatz_materials = "/assets/pdf/de/Computereinsatz" | list_material_files %}
{% if computereinsatz_materials == empty %}
現在ダウンロード可能な資料はありません。
{% else %}
<ul>
  {% for resource in computereinsatz_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
