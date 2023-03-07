package team.side.review.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {

    @GetMapping("/public/healthCheck")
    public String healthCheck() {
        return "ok";
    }
}
