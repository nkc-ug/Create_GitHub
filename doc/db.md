## postsテーブル
|param|type|description|
|---|---|---|
|id|integer|投稿id|
|title|string|タイトル|
|url|string|記事のurl|
|comment|string|コメント|
|date|date|有効期限|
|file_name|string|ファイルの名前|
|key|string|パスワード|
|user_id|integer|usersテーブルと関連づけるid|
|created_at|datetime|作成時刻|
|updated_at|datetime|最終変更時刻|

## usersテーブル
|param|type|description|
|---|---|---|
|id|integer|ユーザid|
|name|string|名前|
|password|string|パスワード|
|created_at|datetime|作成時刻|
|updated_at|datetime|最終変更時刻|
