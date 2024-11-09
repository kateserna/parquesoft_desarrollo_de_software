CREATE TABLE CreditCard (
    id serial PRIMARY KEY,
    card_number VARCHAR(16) NOT NULL,
    expiration_date DATE NOT NULL,
    cvv VARCHAR(3) NOT NULL  
);

CREATE TABLE Transaction (
    id serial  PRIMARY KEY,
    amount DECIMAL(10,2) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL,
    credit_card_id BIGINT,
    FOREIGN KEY (credit_card_id) REFERENCES CreditCard(id)
);
