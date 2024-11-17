package org.example.controllers;

import org.example.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/support")
public class SupportController {
    private EmailService emailService;

    @Autowired
    public SupportController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public void callSupport(String email, String message) {
        emailService.sendMessage(email, message);
    }
}
