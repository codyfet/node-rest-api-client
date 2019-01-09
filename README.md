# node-rest-api-client
Пример простейшего CRUD rest-api на NodeJS + Mongoose.

Клиентская часть на react.
Прежде чем запускать клиентскую часть, необходимо скачать и запустить серверную часть, которая расположена здесь:
[node-rest-api-server](https://github.com/codyfet/node-rest-api-server) 

Для запуска клиентской части выполнить:

```
npm install 

npm start
```

Схема модели product, описанная через mongoose на сервере, имеет вид: 
```
const ProductSchema = new Schema({
    name: {
        type: String,
        reuired: true
    },
    price: {
        type: Number,
        required: true
    }
});
```

Пример содержит CRUD реализацию для одной референсной сущности product:

| Method | Endpoints           | Notes              |
| ------ | ------------------- | ------------------ |
| POST   | /product/create     | Add product        |
| GET    | /product            | Get all products   |
| GET    | /product/:id        | Get single product |
| PUT    | /product/:id/update | Update product     |
| DELETE | /product/:id/delete | Delete product     |
