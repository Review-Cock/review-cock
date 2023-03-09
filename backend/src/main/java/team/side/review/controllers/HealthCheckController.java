package team.side.review.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(value = "healthCheck API", description = "healthCheck")
public class HealthCheckController {

    @GetMapping("/public/healthCheck")
    @ApiOperation(value = "healthCheck API", notes = "서버 상태 확인")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "성공", response = String.class)})
    public String healthCheck() {
        return "ok";
    }
}
