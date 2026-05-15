---
page_id: Theo_1
layout: page
title: 将来の中等物理教員のための理論物理1
description: ニュートン力学とラグランジュ力学の補助ワークショップ。
img: assets/img/lagrange.svg
importance: 1
category: 教員養成
related_publications: false
---

この補助授業は、将来の中等物理教員を対象とした理論物理1の講義を支援します。既有知識の確認、理論力学の中心的道具の活用、学校教育で使えるようにするための課題・誤概念・モデルの検討に焦点を当てます。

### 教材

教材はアップロード後に表示されます。オンライン資料には、著作権上公開できない部分が含まれていない場合があります。

{% assign theo1_materials = "/assets/pdf/de/Theo1" | list_material_files %}
{% if theo1_materials == empty %}
現在ダウンロード可能な資料はありません。
{% else %}
<ul>
  {% for resource in theo1_materials %}
    <li><a href="{{ resource.path | relative_url }}">{{ resource.name }}</a></li>
  {% endfor %}
</ul>
{% endif %}
