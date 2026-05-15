---
page_id: Theo_2
layout: page
title: 将来の中等物理教員のための理論物理2
description: 電磁気学の補助ワークショップ。
img: assets/img/gauss.svg
importance: 2
category: 教員養成
related_publications: false
---

この補助授業は、将来の中等物理教員を対象とした理論物理2の講義を支援します。電磁気学の大学レベルの内容を、上級中等教育の物理授業に接続する説明、モデル、課題へと橋渡しします。

### 教材

教材はアップロード後に表示されます。

{% assign theo2_materials = "/assets/pdf/de/Theo2" | list_material_files %}
{% if theo2_materials == empty %}
現在ダウンロード可能な資料はありません。
{% else %}
<ul>
  {% for resource in theo2_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
