


## Testing

### GET

```bash
curl -X GET http://127.0.0.1:8000/celulares
```

### POST

```bash
curl --location 'http://127.0.0.1:8000/celulares' \
--form 'id="11"' \
--form 'marca="lo otro md"' \
--form 'modelo="otra cosa"' \
--form 'precio="1234567"'
```

### DELETE

```bash
curl --location --request DELETE 'http://127.0.0.1:8000/celulares/5'
```

### PUT

```bash
curl --location --request PUT 'http://127.0.0.1:8000/celulares/1' \
--header 'Content-Type: application/json' \
--data '{
    "id": "20",
    "marca": "lo que sea",
    "modelo": ".com",
    "precio": 546468761.0
}'
```