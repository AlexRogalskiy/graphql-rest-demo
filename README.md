# rest-endpoint-example

An Express REST endpoint that will be used to demo converting to GraphQL.

## GET `/posts`

Get all posts

## POST `/posts`

Add a new post. Example structure:

```json
{
  "body": "Hello world",
  "title": "This is a post title",
  "author": "uuid",
  "published": "2017-09-30T08:45:03.632Z"
}
```

Response

```json
{
  "body": "Hello world",
  "title": "This is a post title",
  "author": "uuid",
  "id": "newuuidforpost",
  "published": "2017-09-30T08:45:03.632Z"
}
```

## GET `/posts/:id`

Get individual post by id

## PUT `/posts/:id`

Update post with partial

```json
{
  "body": "Updating post body"
}
```

## GET `/posts/:id/comments`

Get all comments for post

## GET `/posts/:id/comments/:commentId`

Get individual post

## GET `/users`

Get all users

## POST `/users`

Create a new user

Request:

```json
{
 "first": "Helmer",
 "last": "Deckow",
 "email": "Cordell4@gmail.com"
}
```

Response:

```json
{
 "id": "c46c5b1d-1add-4ebd-98b0-b3cada6b3b81",
 "first": "Helmer",
 "last": "Deckow",
 "email": "Cordell4@gmail.com"
}
```

## GET `/users/:id`

Get user by id
