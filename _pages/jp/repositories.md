---
page_id: repositories
layout: page
permalink: /repositories/
title: リポジトリ
description: GitHubプロフィールと関連リポジトリ。
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHubユーザー

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% endif %}

{% if site.data.repositories.github_repos %}

## GitHubリポジトリ

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
