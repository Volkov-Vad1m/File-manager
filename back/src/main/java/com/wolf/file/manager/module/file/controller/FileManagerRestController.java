package com.wolf.file.manager.module.file.controller;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1")
public class FileManagerRestController {


    @PostMapping("/upload")
    public String saveFile(@RequestParam("file") MultipartFile file){
        try {
            System.out.println(file.getOriginalFilename());
            file.transferTo(Paths.get("/home/vadim/Downloads/vakDan/" +
                    UUID.randomUUID().toString().substring(0, 5) + "-" + file.getOriginalFilename()));

            return "File was successfully uploaded";
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Something went wrong");
            return "Something went wrong";
        }
    }

}
