# APIDocment
## Req
# ユーザごとの投稿一覧(プロフィール画面) API

```
GET /api/v1/users/{user_id}/index
```

|param|type|description|
|---|---|---|
|user_id|integer|(ログインしている)ユーザのid|

## Res
### 成功時
```
200 SUCCESS
```

|param|type|description|
|---|---|---|
|id|integer|投稿id|
|title|string|記事のタイトル|
|url|string|記事のurl|
|created_at|datetime|作成時刻|
|updated_at|datetime|最終変更時刻|

```javascript
{
    "status": "SUCCESS",
    "message": "Loaded users,posts",
    "data": {
        "id": 1,
　　　　　“title”: “NKC”,
        “url”: “https://aiueo.com/ooo”,
        "created_at": "2023-01-16T13:51:33.951Z",
        "updated_at": "2023-01-16T13:51:33.951Z"
    }
}
```

### 失敗時
```
404 Not Found
```
 
## Req

# 選択した投稿の詳細 API
```
GET /api/v1/posts/{id}
```

|param|type|description|
|---|---|---|
|id|integer|選択した投稿id|

## Res

### 成功時
```
200 SUCCESS
```
|param|type|description|
|---|---|---|
|id|integer|投稿id|
|title|string|タイトル|
|comment|string|コメント|
|date|date|有効期限|
|key|string|パスワード|
|url(変更させない)|string|記事のurl|
|created_at|datetime|作成時刻|
|updated_at|datetime|最終変更時刻|

```javascript
{
    "status": "SUCCESS",
    "message": "Loaded posts",
    "data": {
        "id": 1,
        “title”: “NKC”,
        “”comment: “名古屋工学院専門学校”, 
        “date”: “2023-01-17”, 
        “key”: “nkcug”,
        “url”: “https://aiueo.com/ooo”,
        "created_at": "2023-01-16T13:51:33.951Z",
        "updated_at": "2023-01-16T13:51:33.951Z"
    }
}
```

### 失敗時
```
404 Not Found
```

## Req

# 選択した投稿の編集 API
```
PUT /api/v1/posts/{id}
DELETE /api/v1/posts/{id}
```

|param|type|description|
|---|---|---|
|id|integer|選択した投稿id|

## Res

### 成功時
```
200 SUCCESS
```
|param|type|description|
|---|---|---|
|Id|integer|投稿id|
|title|string|タイトル|
|comment|string|コメント|
|fail_name|string|ファイルの名前|
|date|date|有効期限|
|key|string|パスワード|
|url(変更させない)|string|記事のurl|
|created_at|datetime|作成時刻|
|updated_at|datetime|最終変更時刻|

```javascript
{
    "status": "SUCCESS",
    "message": "Loaded posts",
    "data": {
        "id": 1,
        “title”: “NKC”,
        “comment": “名古屋工学院専門学校”,
        "fail_name": "nkc.xlsm"
        “date”: “2023-01-17”, 
        “key”: “nkcug”,
        “url”: “https://aiueo.com/ooo”,
        "created_at": "2023-01-16T13:51:33.951Z",
        "updated_at": "2023-01-16T13:51:33.951Z"
    }
}
```

### 失敗時
```
404 Not Found
```
## Req

# アップロード API
```
POST /api/v1/posts
```
## Res

### 成功時
```
200 SUCCESS
```
|param|type|description|
|---|---|---|
|Id|integer|投稿id|
|title|string|タイトル|
|comment|tring|コメント|
|key|string|パスワード|
|fail_name|string|ファイルの名前|
|date|date|有効期限|
|url(変更させない)|string|記事のurl|
|created_at|datetime|作成時刻|
|updated_at|datetime|最終変更時刻|
```javascript
{
    "status": "SUCCESS",
    "message": "Loaded posts",
    "data": {
        "id": 1,
        “title”: “NKC”,
        “comment": “名古屋工学院専門学校”,
        "fail_name": "nkc.xlsm"
        “date”: “2023-01-17”, 
        “key”: “nkcug”,
        “url”: “https://aiueo.com/ooo”,
        "created_at": "2023-01-16T13:51:33.951Z",
        "updated_at": "2023-01-16T13:51:33.951Z"
    }
}
```
### 失敗時
```
404 Not Found
```
## Req

# 会員登録 API
```
POST /api/v1/users
```
Res

### 成功時
```
200 SUCCESS
```
|param|type|description|
|---|---|---|
|name|string|名前|
|password|string|パスワード|
```javascript
{
    "status": "SUCCESS",
    "message": "Loaded users",
    "data": {
        “name”: “aichi”,
        “password”: “nagoya”
    }
}
```
### 失敗時
```
404 Not Found
```
## Req

# 会員情報更新 API
```
PUT /api/v1/users/{user_id}
DELETE /api/v1/users/{user_id}
```
|param|type|description|
|---|---|---|
|user_id|integer|(ログインしている)ユーザのid|
## Res

### 成功時
```
200 SUCCESS
```
|param|type|description|
|---|---|---|
|Id|integer|ユーザid|
|name|string|名前|
|password|string|パスワード|
```javascript
{
    "status": "SUCCESS",
    "message": "Loaded users",
    "data": {
        "id": 1,
        “name”: “aichi”,
        “password”: “nagoya”,
    }
}
```

### 失敗時
```
404 Not Found
```

## Req

# ダウンロードする際の内容確認 API
```
GET /api/v1/posts/{url}
```

|param|type|description|
|---|---|---|
|url|string|ダウンロードしたい記事のurl|

## Res

### 成功時
```
200 SUCCESS
```
|param|type|description|
|---|---|---|
|Id|integer|投稿id|
|url|string|ダウンロードしたい記事のurl|
|title|string|ダウンロードしたい記事のタイトル|
|comment|tring|ダウンロードしたい記事のコメント|
|date|date|有効期限|
|created_at|datetime|作成時刻|
|updated_at|datetime|最終変更時刻|
```javascript
{
    "status": "SUCCESS",
    "message": "Loaded posts",
    "data": {
        "id": 1,
        “url”: “https://aiueo.com/ooo”,
        “title”: “NKC”,
        “comment": “名古屋工学院専門学校”, 
        “date”: “2023-01-17”, 
        "created_at": "2023-01-16T13:51:33.951Z",
        "updated_at": "2023-01-16T13:51:33.951Z"
    }
}
```
### 失敗時
```
404 Not Found
```
## Req

# ダウンロード API
```
GET /api/v1/posts/{url}/{key}/download
パスワードがないものは　0000 にして送信する
```
|param|type|description|
|---|---|---|
|url|string|ダウンロードしたい記事のurl|
|key|string|ダウンロードしたい記事のパスワード|
|date|date|ダウンロードしたい記事の有効期限|

## Res

### 成功時
```
200 SUCCESS
```
|param|type|description|
|---|---|---|
|Id|integer|投稿id|
|content|string|ダウンロードしたい記事のファイル|
|created_at|datetime|作成時刻|
|updated_at|datetime|最終変更時刻|
```javascript
{
    "status": "SUCCESS",
    "message": "Loaded posts",
    "data": {
        "id": 1,
        “content”: “test.xlsm”,
        "created_at": "2023-01-16T13:51:33.951Z",
        "updated_at": "2023-01-16T13:51:33.951Z"
    }
}
```

### 失敗時
```
404 Not Found
```
