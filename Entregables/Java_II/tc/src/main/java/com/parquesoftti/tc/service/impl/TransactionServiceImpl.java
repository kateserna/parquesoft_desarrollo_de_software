package com.parquesoftti.tc.service.impl;

import com.parquesoftti.tc.model.Transaction;
import com.parquesoftti.tc.repository.TransactionRepository;
import com.parquesoftti.tc.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final CreditCardServiceImpl creditCardServiceImpl;

    @Transactional(readOnly = false, rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    @Override
    public Transaction payment(Transaction transaction) {
        var tmp = creditCardServiceImpl.getCreditCardsByCardNumber(transaction.getCreditCard().getCardNumber());
        transaction.getCreditCard().setId(tmp.getId());
        return transactionRepository.save(transaction);
    }

    @Transactional(readOnly = false, rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    @Override
    public void reversePayment(Long id) {
        if (id == null || id <=0) {
            throw new IllegalArgumentException("El Id debe ser positivo y no nulo.");
        }

        Optional<Transaction> existingTransaction = transactionRepository.findById(id);
        if (existingTransaction.isEmpty()) {
            throw new RuntimeException("La transacción no existe y no se puede eliminar.");
        }
        transactionRepository.deleteById(id);
    }

}