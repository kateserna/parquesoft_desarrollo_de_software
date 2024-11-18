package com.parquesoftti.tc.service.impl;

import com.parquesoftti.tc.model.Transaction;
import com.parquesoftti.tc.repository.TransactionRepository;
import com.parquesoftti.tc.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Objects;
import java.util.Optional;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final CreditCardServiceImpl creditCardServiceImpl;

    @Transactional(readOnly = false, rollbackFor = Exception.class, propagation = Propagation.REQUIRED)
    @Override
    public Transaction payment(Transaction transaction) {
        validateTransaction(transaction);
        var tmp = creditCardServiceImpl.getCreditCardsByCardNumber(transaction.getCreditCard().getCardNumber());

        if (!Objects.equals(transaction.getCreditCard().getCvv(), tmp.getCvv())){
            throw new IllegalArgumentException("El CVV de la transacción es diferente al CVV de la tarjeta de credito relacionada.");
        }

        if (!Objects.equals(transaction.getCreditCard().getExpirationDate(), tmp.getExpirationDate())){
            throw new IllegalArgumentException("La fecha de expira relacionada en la transacción es diferente a la fecha de expira de la tarjeta de credito relacionada.");
        }

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

    //Validación de transacción
    private void validateTransaction(Transaction transaction) {
        if (transaction == null){
            throw new IllegalArgumentException("La transacción no debe ser nula");
        }

        if (transaction.getAmount() == null || transaction.getAmount().equals(BigDecimal.ZERO)){
            throw new IllegalArgumentException("El monto no debe ser nulo o 0");
        }

        if (transaction.getDate() == null){
            throw new IllegalArgumentException("La fecha no debe ser nula");
        }

        if (transaction.getStatus() == null || transaction.getStatus().isEmpty()){
            throw new IllegalArgumentException("El estado no debe ser nulo o vacio");
        }

        if (transaction.getCreditCard().getExpirationDate() == null || transaction.getCreditCard().getExpirationDate().isEmpty()){
            throw new IllegalArgumentException("La fecha de vencimiento de la tarjeta de credito no debe ser nula");
        }

        if (transaction.getCreditCard().getCvv() == null || transaction.getCreditCard().getCvv().isEmpty() ){
            throw new IllegalArgumentException("El CVV de la tarjeta de credito no debe ser nula");
        }
    }
}