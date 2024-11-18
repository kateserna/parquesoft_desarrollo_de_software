package com.parquesoftti.tc.controller;

import com.parquesoftti.tc.model.Transaction;
import com.parquesoftti.tc.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api/v1/sessions")
public class SimulationRestController {

    private final TransactionService transactionService;

    @PostMapping()
    public ResponseEntity<Transaction> payment(@RequestBody Transaction transaction){
        return ResponseEntity.ok().body(transactionService.payment(transaction));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> reversePayment(@PathVariable Long id){
        transactionService.reversePayment(id);
        return ResponseEntity.ok().body("");
    }

}
