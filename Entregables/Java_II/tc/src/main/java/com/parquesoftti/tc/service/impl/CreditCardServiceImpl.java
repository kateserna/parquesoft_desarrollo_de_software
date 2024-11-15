package com.parquesoftti.tc.service.impl;

import com.parquesoftti.tc.model.CreditCard;
import com.parquesoftti.tc.repository.CreditCardRepository;
import com.parquesoftti.tc.service.CreditCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class   CreditCardServiceImpl implements CreditCardService {

    private final CreditCardRepository creditCardRepository;


    //Conecta a la base y trae todas las tarjetas de credito
    @Override
    @Transactional(readOnly = true)
    public List<CreditCard> getCreditCards() {
        return creditCardRepository.findAll();
    }

    @Override
    public Optional<CreditCard> getCardById(Long id) {
        return creditCardRepository.findById(id);
    }

    @Override
    public CreditCard saveCreditCard(CreditCard creditCard) {
        return creditCardRepository.save(creditCard);
    }

    //Validar que exista la tarjeta de credito
    @Override
    public CreditCard updateCreditCard(CreditCard creditCard, Long id) {
        //validar que envien el id
        if (id == null || id == 0) {
            throw new RuntimeException("No me enviaron el id");
        }

        //Consulta si existe en la bd
        Optional<CreditCard> tmp = getCardById(id);
        //diferente a null
        if (tmp.get()==null){
            throw new RuntimeException("No se encontro en la base de datos");
        }
        //se actualiza
        creditCard.setId(id);
        return creditCardRepository.save(creditCard);
    }

    @Override
    public void deleteCard(Long id) {
        creditCardRepository.deleteById(id);
    }


}
