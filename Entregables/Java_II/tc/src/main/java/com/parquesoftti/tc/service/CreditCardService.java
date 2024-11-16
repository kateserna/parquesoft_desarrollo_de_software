package com.parquesoftti.tc.service;

import com.parquesoftti.tc.model.CreditCard;

import java.util.List;
import java.util.Optional;

public interface CreditCardService {

    public List<CreditCard> getCreditCards(); //trae todas las tarjetas de credito

    public Optional<CreditCard> getCardById(Long id); //tarjeta de credito por id

    CreditCard saveCreditCard(CreditCard creditCard);

    CreditCard updateCreditCard(CreditCard creditCard, Long id);

    void deleteCard(Long id);

    public CreditCard getCreditCardsByCardNumber(String cardNumber);

}
