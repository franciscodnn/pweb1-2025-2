package com.example.hello;

import org.springframework.stereotype.Service;

@Service
public class HelloService {
    public static int LIMIAR_MAIOR_IDADE = 18;

    public String maiorDeIdade(int age) {
        return (
            age >= HelloService.LIMIAR_MAIOR_IDADE ? 
            "Maior de idade" : 
            "Menor de idade"
        );
    }

}
