package com.ruet.sac.user.controller;

import com.ruet.sac.repository.FlagRepository;
import com.ruet.sac.user.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

@CrossOrigin(origins = "*")
@RequestMapping("/resource")
@RestController
public class ResourceController {
    @Autowired
    ResourceLoader resourceLoader;

    @Autowired
    FlagRepository flagRepository;

    @Autowired
    FileUploadService fileUploadService;

    @GetMapping(
            value = "/images",
            produces = MediaType.IMAGE_PNG_VALUE)
    public void getImage(@RequestParam("imageName") String imageName, HttpServletResponse response) throws IOException {
        InputStream file=  fileUploadService.getFile(imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(file,response.getOutputStream());
    }

    @GetMapping(value = "flags/lastGraduatedSeries")
    public Integer getLastGraduatedSeries() throws IOException {
        return  flagRepository.getReferenceById(1).getFlagValue();
    }
}
