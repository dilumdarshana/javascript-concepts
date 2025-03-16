## NPM modules which make life easier

## immer
- Can change the object properties without loosing the previous properties

## json-server
- Create quick mock APIs

```bash
# install
$ pnpm install json-server
```
How to setup API

```javascript
// Create a db.json or db.json5 file
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```
```bash
# run
$ pnpx json-server db.json

$ curl http://localhost:3000/posts/1
```