---
page_id: Modern Physics
layout: page
title: 現代物理とその教授法
description: 中等教育教員のための現代物理の内容と教授法を統合した授業。
img: assets/img/black-body.svg
importance: 1
category: 教員養成
related_publications: false
---

この授業では、将来の中等物理教員を対象に、現代物理の内容とその教授法を深めます。20世紀・21世紀の物理の中心的な考えを、学校教育で扱える形にする方法を検討します。

扱う内容には、原子モデル、光のモデル、天体物理、量子物理、固体物理、磁性、レーザー、放射線、素粒子物理、相対論が含まれます。

教授法として、モデル化能力、表象能力、アナロジーを用いた学習、日常経験との接続を扱います。

### 教材

教材はアップロード後に表示されます。ダウンロード可能な資料はドイツ語です。

{% assign modern_physics_materials = "/assets/pdf/de/ModernPhysics" | list_material_files %}
{% if modern_physics_materials == empty %}
現在ダウンロード可能な資料はありません。
{% else %}
<ul>
  {% for resource in modern_physics_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
