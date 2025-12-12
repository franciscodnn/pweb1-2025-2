package com.example.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/rest/v1")
public class HelloController {
    private final HelloService helloService;

    public HelloController(HelloService helloService) {
        this.helloService = helloService;
    }

    @GetMapping("hello")
    public String hello() {
        return "Hello, World!";
    }

    @GetMapping("hello/name/{name}")
    public String helloByName(@PathVariable("name") String name) {
        return "Welcome, " + name;
    }

    @GetMapping("hello/age/{age}")
    public String helloByAge(@PathVariable("age") Integer age) {
        String message = this.helloService.maiorDeIdade(age);

        return message;
    }

}
