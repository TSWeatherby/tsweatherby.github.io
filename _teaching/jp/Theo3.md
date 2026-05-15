---
page_id: Theo_3
layout: page
title: 将来の中等物理教員のための理論物理3
description: 特殊相対論と量子力学の補助ワークショップ。
img: assets/img/QM.svg
importance: 3
category: 教員養成
related_publications: false
---

この補助授業は、将来の中等物理教員を対象とした特殊相対論と量子力学の講義を支援します。抽象的な大学内容を、学校教育で扱える質的モデル、アナロジー、実験、議論課題へとつなげます。

### 教材

教材はアップロード後に表示されます。

{% assign theo3_materials = "/assets/pdf/de/Theo3" | list_material_files %}
{% if theo3_materials == empty %}
現在ダウンロード可能な資料はありません。
{% else %}
<ul>
  {% for resource in theo3_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
