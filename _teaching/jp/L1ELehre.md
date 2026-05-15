---
page_id: L1_Elehre
layout: page
title: 初等教育教員のための電気と磁気
description: 初等教育向け電磁気学の内容と教授法を統合した授業。
img: assets/img/magnet.svg
importance: 1
category: 教員養成
related_publications: false
---

この授業では、将来の初等教育教員を対象に、電気と磁気に関する物理内容と教授法を結び付けます。

物理内容として、静電気、電場と磁場、簡単な電気回路、磁石と電磁石、発電と送電を扱います。

教授法として、雷などの日常現象との関連、見えない量を体験可能にする実験とアナロジー、発達段階に応じた正確な説明、多様な科学者・技術者のロールモデルを検討します。

### 教材

教材はアップロード後に表示されます。

{% assign materials = "/assets/pdf/de/L1ELehre" | list_material_files %}
{% if materials == empty %}
現在ダウンロード可能な資料はありません。
{% else %}
<ul>
  {% for resource in materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
