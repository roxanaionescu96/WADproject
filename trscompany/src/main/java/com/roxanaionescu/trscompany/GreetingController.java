package com.roxanaionescu.trscompany;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingController {

    @RequestMapping ("/sal")
    public  String test(){
        return "Roxana";
    }


}
